/**
 * Cloudflare Pages Function — contact form → Vacademy CRM lead capture.
 * Served at POST /api/contact. Mirrors the old Next API route; runs on the
 * Cloudflare Workers runtime. Audience/source are overridable via env vars
 * (set in the Cloudflare Pages dashboard); the custom-field UUIDs belong to
 * that audience and are fixed alongside its default id below.
 */

type Env = {
  VACADEMY_LEAD_ENDPOINT?: string;
  VACADEMY_AUDIENCE_ID?: string;
  VACADEMY_SOURCE_TYPE?: string;
  VACADEMY_SOURCE_ID?: string;
};

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  whatsapp?: string;
  message?: string;
};

const FIELDS = {
  intent: "8019032b-3aa5-4cbd-bc80-916bedd37e83",
  details: "88c95bb2-db8a-4aca-b21e-74756a975425",
  fullName: "46d26332-cf27-4db0-955e-f5fec2a95f23",
  email: "307817d3-357a-4db3-a1c2-cbfbe491ef44",
  phone: "0884ac17-d227-49bc-be04-e7ca541eb1d1",
};

const DEFAULT_AUDIENCE = "35f15719-e928-4d57-be93-9f9d1dcc5bc9";
const DEFAULT_ENDPOINT =
  "https://backend-stage.vacademy.io/admin-core-service/open/v1/audience/lead/submit";

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" },
  });
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();
  const company = body.company?.trim() ?? "";
  const phone = body.whatsapp?.trim() ?? "";

  if (!name || !email || !message) {
    return json({ error: "name, email and message are required" }, 422);
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return json({ error: "Invalid email" }, 422);
  }

  const audienceId = env.VACADEMY_AUDIENCE_ID || DEFAULT_AUDIENCE;
  const payload = {
    audience_id: audienceId,
    source_type: env.VACADEMY_SOURCE_TYPE || "AUDIENCE_CAMPAIGN",
    source_id: env.VACADEMY_SOURCE_ID || audienceId,
    custom_field_values: {
      [FIELDS.intent]: "Website Contact Form",
      [FIELDS.details]: company ? `Company: ${company}\n\n${message}` : message,
      [FIELDS.fullName]: name,
      [FIELDS.email]: email,
      [FIELDS.phone]: phone,
    },
    user_dto: {
      id: "",
      username: email,
      email,
      full_name: name,
      address_line: "",
      city: "",
      region: "",
      pin_code: "",
      mobile_number: phone,
      date_of_birth: null,
      gender: "",
      password: "",
      profile_pic_file_id: "",
      roles: [],
      last_login_time: null,
      root_user: false,
    },
  };

  try {
    const res = await fetch(env.VACADEMY_LEAD_ENDPOINT || DEFAULT_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error(`[contact] CRM responded ${res.status}: ${text.slice(0, 300)}`);
      return json({ error: "Delivery failed" }, 502);
    }
    return json({ ok: true });
  } catch (err) {
    console.error("[contact] lead submit failed:", err);
    return json({ error: "Delivery failed" }, 502);
  }
};

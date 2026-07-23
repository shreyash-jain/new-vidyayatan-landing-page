import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  whatsapp?: string;
  message?: string;
};

/**
 * Vacademy CRM lead capture (open endpoint — no auth).
 * Submits to admin-core-service audience lead/submit. Audience + source IDs are
 * overridable via env; the custom-field UUIDs belong to that audience and are
 * fixed alongside its default id below.
 */
const CRM = {
  endpoint:
    process.env.VACADEMY_LEAD_ENDPOINT ??
    "https://backend-stage.vacademy.io/admin-core-service/open/v1/audience/lead/submit",
  audienceId:
    process.env.VACADEMY_AUDIENCE_ID ?? "35f15719-e928-4d57-be93-9f9d1dcc5bc9",
  sourceType: process.env.VACADEMY_SOURCE_TYPE ?? "AUDIENCE_CAMPAIGN",
  sourceId:
    process.env.VACADEMY_SOURCE_ID ??
    process.env.VACADEMY_AUDIENCE_ID ??
    "35f15719-e928-4d57-be93-9f9d1dcc5bc9",
  fields: {
    intent: "8019032b-3aa5-4cbd-bc80-916bedd37e83",
    details: "88c95bb2-db8a-4aca-b21e-74756a975425",
    fullName: "46d26332-cf27-4db0-955e-f5fec2a95f23",
    email: "307817d3-357a-4db3-a1c2-cbfbe491ef44",
    phone: "0884ac17-d227-49bc-be04-e7ca541eb1d1",
  },
} as const;

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();
  const company = body.company?.trim() ?? "";
  const phone = body.whatsapp?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "name, email and message are required" },
      { status: 422 },
    );
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 422 });
  }

  // Fold company into details so nothing is lost (CRM has no company field).
  const details = company ? `Company: ${company}\n\n${message}` : message;

  const payload = {
    audience_id: CRM.audienceId,
    source_type: CRM.sourceType,
    source_id: CRM.sourceId,
    custom_field_values: {
      [CRM.fields.intent]: "Website Contact Form",
      [CRM.fields.details]: details,
      [CRM.fields.fullName]: name,
      [CRM.fields.email]: email,
      [CRM.fields.phone]: phone,
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
    const res = await fetch(CRM.endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`CRM responded ${res.status}: ${text.slice(0, 300)}`);
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] lead submit failed:", err);
    return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
  }
}

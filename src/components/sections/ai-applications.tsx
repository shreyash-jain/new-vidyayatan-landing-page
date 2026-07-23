import {
  ArrowUpRight,
  Bot,
  Workflow,
  Mail,
  Sparkles,
  Play,
} from "lucide-react";
import { Container, Section } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";

const preBuiltAgents = [
  "Crop Monitoring Agent",
  "Chargeback Resolution Agent",
  "Document Intelligence Agent",
  "Support Assistant Agent",
];

const acceleratorTagsRow1 = ["Fintech", "Document Processing"];
const acceleratorTagsRow2 = ["CRM", "Support", "Analytics", "+4"];

const codeLines = [
  { n: 1, tokens: [k("def "), f("route_lead"), p("(lead):")] },
  { n: 2, tokens: [k("    if "), p("lead."), f("urgent"), p(":")] },
  { n: 3, tokens: [k("        return "), s('"sales"')] },
  { n: 4, tokens: [k("    return "), s('"nurture"')] },
];

// Token colors are tuned for the dark navy code-card background.
function k(text: string) {
  return { text, cls: "text-sky-300" };
}
function f(text: string) {
  return { text, cls: "text-white" };
}
function s(text: string) {
  return { text, cls: "text-emerald-300" };
}
function p(text: string) {
  return { text, cls: "text-white/60" };
}

/** "Three ways to get AI" — homepage lead-in, placed right after the hero. */
export function AiApplications() {
  return (
    <Section className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/5 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -top-16 right-1/5 h-80 w-80 rounded-full bg-navy/15 blur-3xl" />
      </div>
      <Container>
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Pre-built Applications */}
          <Reveal>
            <ApplicationCard
              title="Pre-built Applications"
              description="Use AI applications ready for Agritech, Fintech, EdTech, HealthTech and Operations today."
            >
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-full bg-muted text-navy">
                    <Bot className="size-5" />
                  </span>
                  <span className="rounded-full bg-navy px-3 py-1.5 text-xs font-semibold text-white">
                    Preview &amp; Deploy
                  </span>
                </div>
                <div className="mt-5 border-t border-dashed border-border pt-4">
                  <p className="text-sm text-muted-foreground">
                    Industry-ready AI applications
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {preBuiltAgents.map((a) => (
                      <span
                        key={a}
                        className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-navy"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ApplicationCard>
          </Reveal>

          {/* Application Accelerators */}
          <Reveal delay={0.08}>
            <ApplicationCard
              title="Application Accelerators"
              description="Leverage our library of pre-built AI agents, templates and integrations."
            >
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-orange-100 text-orange-600">
                    <Workflow className="size-5" />
                  </span>
                  <span className="grid size-10 place-items-center rounded-full bg-blue-100 text-blue-600">
                    <Mail className="size-5" />
                  </span>
                  <span className="grid size-10 place-items-center rounded-full bg-navy/10 text-navy">
                    <Sparkles className="size-5" />
                  </span>
                </div>
                <div className="mt-5 space-y-2.5">
                  <div className="h-2.5 w-1/3 rounded-full bg-muted" />
                  <div className="h-2.5 w-full rounded-full bg-muted" />
                  <div className="h-2.5 w-2/5 rounded-full bg-muted" />
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {acceleratorTagsRow1.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 border-t border-border pt-4">
                  <div className="flex flex-wrap gap-2">
                    {acceleratorTagsRow2.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-navy"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ApplicationCard>
          </Reveal>

          {/* Tailored Applications */}
          <Reveal delay={0.16}>
            <ApplicationCard
              title="Tailored Applications"
              description="Design and build custom AI applications around your workflows and your data."
            >
              <div className="overflow-hidden rounded-2xl border border-border bg-navy shadow-soft">
                <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                  <span className="size-2.5 rounded-full bg-white/25" />
                  <span className="size-2.5 rounded-full bg-white/25" />
                  <span className="size-2.5 rounded-full bg-white/25" />
                </div>
                <div className="overflow-x-auto px-4 py-4 font-mono text-[13px] leading-relaxed">
                  {codeLines.map((line) => (
                    <div key={line.n} className="flex gap-3">
                      <span className="w-4 shrink-0 select-none text-right text-white/30">
                        {line.n}
                      </span>
                      <span className="whitespace-pre">
                        {line.tokens.map((t, i) => (
                          <span key={i} className={t.cls}>
                            {t.text}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="px-4 pb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-navy">
                    <Play className="size-3" />
                    Run
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="mt-4 w-full rounded-xl border border-border bg-card py-3 text-sm font-semibold text-navy shadow-soft transition-colors hover:bg-muted"
              >
                Deploy now
              </button>
            </ApplicationCard>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function ApplicationCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-hover flex h-full flex-col rounded-3xl border border-border bg-white/70 p-7 shadow-soft backdrop-blur-sm sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-bold text-navy sm:text-2xl">
          {title}
        </h3>
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-navy shadow-sm">
          <ArrowUpRight className="size-4" />
        </span>
      </div>
      <p className="mt-3 text-muted-foreground">{description}</p>
      <div className="mt-7">{children}</div>
    </div>
  );
}

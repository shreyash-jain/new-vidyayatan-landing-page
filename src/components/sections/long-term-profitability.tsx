import Image from "next/image";
import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";

type Pt = { x: number; y: number };
type Label = { x: number; y: number; text: string; anchor?: "start" | "middle" | "end" };

const RED = "#ef4444";
const BLUE = "#1677ff";

// Higher on the chart (smaller y) = higher financial cost.
const marketPts: Pt[] = [
  { x: 95, y: 390 },
  { x: 250, y: 325 },
  { x: 340, y: 275 },
  { x: 560, y: 150 },
  { x: 840, y: 110 },
  { x: 955, y: 105 },
];
const vidyaPts: Pt[] = [
  { x: 95, y: 290 },
  { x: 255, y: 255 },
  { x: 375, y: 240 },
  { x: 565, y: 235 },
  { x: 770, y: 200 },
  { x: 900, y: 295 },
  { x: 955, y: 298 },
];

const marketLabels: Label[] = [
  { x: 98, y: 412, text: "Low Initial Cost" },
  { x: 250, y: 348, text: "Poor Code Quality" },
  { x: 352, y: 298, text: "Poor Tech Quality" },
  { x: 578, y: 150, text: "Struggles with Scaling" },
  { x: 840, y: 140, text: "Expensive Software Management", anchor: "middle" },
];
const vidyaLabels: Label[] = [
  { x: 98, y: 312, text: "Higher Initial Investment" },
  { x: 150, y: 238, text: "Superior Code Quality" },
  { x: 360, y: 222, text: "Strategic Tech Decisions" },
  { x: 568, y: 260, text: "Scalable Solutions" },
  { x: 790, y: 190, text: "Manage Millions of Users" },
  { x: 955, y: 318, text: "Cost-Effective Maintenance", anchor: "end" },
];

/** Catmull-Rom → cubic bézier for a smooth curve through the points. */
function smoothPath(p: Pt[]): string {
  if (p.length < 2) return "";
  let d = `M ${p[0].x} ${p[0].y}`;
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i - 1] ?? p[i];
    const p1 = p[i];
    const p2 = p[i + 1];
    const p3 = p[i + 2] ?? p2;
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  return d;
}

export function LongTermProfitability() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Total cost of ownership"
          title="Long term Profitability"
          description="Cheaper up front rarely means cheaper overall. Here's how the numbers really play out over time."
        />

        <Reveal className="mt-12">
          <div className="rounded-3xl border border-border bg-card p-4 shadow-soft sm:p-8">
            <div className="overflow-x-auto">
              <svg
                viewBox="0 0 1000 460"
                className="h-auto w-full min-w-[720px]"
                role="img"
                aria-label="Line chart comparing financial cost over time: market alternatives start with a low initial cost but rise steeply to expensive software management, while Vidyayatan starts with a higher initial investment but drops to cost-effective maintenance over time."
              >
                {/* dashed gridlines */}
                {[140, 240, 340].map((y) => (
                  <line
                    key={y}
                    x1="70"
                    y1={y}
                    x2="955"
                    y2={y}
                    stroke="hsl(214 30% 90%)"
                    strokeDasharray="6 8"
                  />
                ))}
                {/* axes */}
                <line x1="70" y1="55" x2="70" y2="400" stroke="hsl(215 16% 75%)" strokeWidth="1.5" />
                <line x1="70" y1="400" x2="960" y2="400" stroke="hsl(215 16% 75%)" strokeWidth="1.5" />
                <text
                  x="40"
                  y="230"
                  transform="rotate(-90 40 230)"
                  textAnchor="middle"
                  className="fill-muted-foreground"
                  fontSize="17"
                  fontWeight="600"
                >
                  Financials ($)
                </text>
                <text x="905" y="430" className="fill-muted-foreground" fontSize="17" fontWeight="600">
                  Time →
                </text>

                {/* curves */}
                <path d={smoothPath(marketPts)} fill="none" stroke={RED} strokeWidth="3.5" strokeLinecap="round" />
                <path d={smoothPath(vidyaPts)} fill="none" stroke={BLUE} strokeWidth="3.5" strokeLinecap="round" />

                {/* points */}
                {marketPts.slice(0, 5).map((p, i) => (
                  <circle key={`m${i}`} cx={p.x} cy={p.y} r="6.5" fill={RED} stroke="#fff" strokeWidth="2.5" />
                ))}
                {vidyaPts.slice(0, 6).map((p, i) => (
                  <circle key={`v${i}`} cx={p.x} cy={p.y} r="6.5" fill={BLUE} stroke="#fff" strokeWidth="2.5" />
                ))}

                {/* labels */}
                {marketLabels.map((l) => (
                  <text key={l.text} x={l.x} y={l.y} textAnchor={l.anchor ?? "start"} fill={RED} fontSize="15" fontWeight="500">
                    {l.text}
                  </text>
                ))}
                {vidyaLabels.map((l) => (
                  <text key={l.text} x={l.x} y={l.y} textAnchor={l.anchor ?? "start"} fill={BLUE} fontSize="15" fontWeight="500">
                    {l.text}
                  </text>
                ))}
              </svg>
            </div>

            {/* legend */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
              <span className="inline-flex items-center gap-2">
                <span className="size-3 rounded-full" style={{ background: RED }} />
                <span style={{ color: RED }}>Market Alternatives</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="size-3 rounded-full" style={{ background: BLUE }} />
                <span style={{ color: BLUE }}>Vidyayatan Technologies</span>
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
            While market options may seem cost-effective initially, they often lead to
            poor code quality, weak tech decisions and high maintenance costs as they
            struggle to scale. In contrast, Vidyayatan&apos;s approach — though requiring
            a slightly higher initial investment — delivers robust, scalable solutions
            that reduce long-term expenses and enhance overall efficiency.
          </p>
        </Reveal>

        {/* ISO certifications */}
        <Reveal delay={0.15}>
          <div className="mx-auto mt-12 flex flex-col items-center gap-5 rounded-3xl border border-border bg-muted/40 px-6 py-8 sm:flex-row sm:justify-center sm:gap-12">
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground sm:text-left">
              Certified to international
              <br className="hidden sm:block" /> standards
            </p>
            <div className="flex items-center gap-10">
              <Image src="/badges/iso-27001.png" alt="ISO 27001 certified" width={192} height={192} className="h-20 w-20 object-contain" />
              <Image src="/badges/iso-9001.png" alt="ISO 9001 certified" width={192} height={192} className="h-20 w-20 object-contain" />
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

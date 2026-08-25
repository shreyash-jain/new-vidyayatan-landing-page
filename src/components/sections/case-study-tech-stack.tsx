/** Tech stack as labelled chips in a bordered panel. Names, not logo files —
 *  the site has no vendor logo set, and text keeps this maintainable. */
export function TechStackPanel({ techStack }: { techStack: string[] }) {
  if (!techStack.length) return null;

  return (
    <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
      <h2 className="font-display text-xl font-bold tracking-tight text-navy">
        Tech stack
      </h2>
      <ul className="mt-6 flex flex-wrap gap-2.5">
        {techStack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-navy/80"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}

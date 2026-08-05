import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { slugify } from "@/lib/slug";

/** Flatten MDX children to plain text so headings can carry a stable id. */
function toText(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(toText).join("");
  if (typeof node === "object" && "props" in node) {
    return toText((node as { props?: { children?: ReactNode } }).props?.children);
  }
  return "";
}

/** Same id the table of contents links to — see lib/slug.ts. */
function headingId(node: ReactNode): string {
  return slugify(toText(node));
}

const components = {
  // Headings get ids so sections are deep-linkable — this is what lets Google
  // surface "jump to" links and lets readers share a specific section.
  h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => (
    <h2
      id={headingId(children)}
      className="mt-12 scroll-mt-24 font-display text-2xl font-bold text-navy"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: ComponentPropsWithoutRef<"h3">) => (
    <h3
      id={headingId(children)}
      className="mt-8 scroll-mt-24 font-display text-xl font-semibold text-navy"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: ComponentPropsWithoutRef<"h4">) => (
    <h4
      id={headingId(children)}
      className="mt-6 scroll-mt-24 font-display text-lg font-semibold text-navy"
      {...props}
    >
      {children}
    </h4>
  ),
  // Measure is set by the article column (40rem ≈ 74ch at this size) rather
  // than per-element caps, so tables and code fill the same column width.
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="mt-6 text-lg leading-[1.75] text-navy/80" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="mt-6 list-disc space-y-2 pl-6 text-navy/80" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="mt-6 list-decimal space-y-2 pl-6 text-navy/80" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="leading-relaxed" {...props} />
  ),
  a: ({ href = "#", ...props }: ComponentPropsWithoutRef<"a">) => (
    <Link href={href} className="font-medium text-primary hover:underline" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="mt-6 border-l-4 border-primary/40 bg-muted/40 py-3 pl-5 italic text-navy/70"
      {...props}
    />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-navy" {...props} />
  ),
  // Fenced code blocks. Layout only — background and token colours come from
  // Shiki as inline styles (see prettyCodeOptions), so no colour classes here:
  // a `text-navy` would leak onto any token Shiki leaves unstyled and make it
  // invisible against the dark block.
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="mt-6 overflow-x-auto rounded-xl p-5 font-mono text-sm leading-relaxed [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-inherit"
      {...props}
    />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-navy" {...props} />
  ),
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm" {...props} />
    </div>
  ),
  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th className="border-b border-border bg-muted/50 px-4 py-2.5 font-display font-semibold text-navy" {...props} />
  ),
  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td className="border-b border-border px-4 py-2.5 text-navy/80" {...props} />
  ),
  img: ({ alt = "", ...props }: ComponentPropsWithoutRef<"img">) => (
    <img
      alt={alt}
      className="my-8 w-full rounded-2xl border border-border/80 object-cover shadow-soft"
      loading="lazy"
      {...props}
    />
  ),
  hr: (props: ComponentPropsWithoutRef<"hr">) => (
    <hr className="my-10 border-t border-border/60" {...props} />
  ),
};

/**
 * Shiki highlights at build time and emits inline styles, so highlighted code
 * costs nothing at runtime — no client-side highlighter, no flash of unstyled
 * code. Safe under `output: "export"`.
 */
const prettyCodeOptions = {
  theme: "github-dark",
  keepBackground: true,
  // Block-only. Passing a bare string here also targets *inline* code, which
  // stamps Shiki's dark background onto `code` spans inside paragraphs.
  defaultLang: { block: "plaintext" },
};

export function MdxContent({ source }: { source: string }) {
  return (
    <div className="max-w-none">
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
          },
        }}
      />
    </div>
  );
}

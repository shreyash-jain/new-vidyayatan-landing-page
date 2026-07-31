import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import type { ComponentPropsWithoutRef } from "react";

const components = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="mt-12 font-display text-2xl font-bold text-navy" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="mt-8 font-display text-xl font-semibold text-navy" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="mt-5 leading-relaxed text-navy/80" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="mt-5 list-disc space-y-2 pl-6 text-navy/80" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="mt-5 list-decimal space-y-2 pl-6 text-navy/80" {...props} />
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

export function MdxContent({ source }: { source: string }) {
  return (
    <div className="max-w-none">
      <MDXRemote
        source={source}
        components={components}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
      />
    </div>
  );
}

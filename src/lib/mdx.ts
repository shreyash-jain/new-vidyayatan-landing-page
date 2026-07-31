import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Collection = "blog" | "guides";

export type DocFrontmatter = {
  title: string;
  description: string;
  date: string; // ISO
  author?: string;
  tag?: string;
  image?: string;
};

export type Doc = {
  slug: string;
  frontmatter: DocFrontmatter;
  content: string;
  readingMinutes: number;
};

const CONTENT_DIR = path.join(process.cwd(), "src", "content");

function collectionDir(collection: Collection) {
  return path.join(CONTENT_DIR, collection);
}

export function getSlugs(collection: Collection): string[] {
  const dir = collectionDir(collection);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getDoc(collection: Collection, slug: string): Doc | null {
  const file = path.join(collectionDir(collection), `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const words = content.split(/\s+/).length;
  return {
    slug,
    frontmatter: data as DocFrontmatter,
    content,
    readingMinutes: Math.max(1, Math.round(words / 200)),
  };
}

export function getAllDocs(collection: Collection): Doc[] {
  return getSlugs(collection)
    .map((slug) => getDoc(collection, slug))
    .filter((d): d is Doc => d !== null)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime(),
    );
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

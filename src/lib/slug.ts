/**
 * Heading id generator. Shared by the MDX renderer (which stamps the ids onto
 * the headings) and the table-of-contents builder (which links to them) — they
 * must agree exactly or every ToC link is a dead anchor.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

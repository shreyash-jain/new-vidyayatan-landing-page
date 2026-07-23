export type Role = {
  title: string;
  team: string;
  location: string;
  type: string;
};

/** Open roles. Edit this list to publish/close positions. */
export const openRoles: Role[] = [
  { title: "Senior Full-Stack Engineer", team: "Engineering", location: "Bhopal / Remote", type: "Full-time" },
  { title: "React / Next.js Developer", team: "Frontend", location: "Bhopal / Remote", type: "Full-time" },
  { title: "Java Spring Boot Engineer", team: "Backend", location: "Bhopal / Remote", type: "Full-time" },
  { title: "Mobile Engineer (React Native / Flutter)", team: "Mobile", location: "Remote", type: "Full-time" },
  { title: "AI / ML Engineer", team: "AI", location: "Bhopal / Remote", type: "Full-time" },
  { title: "Product Designer (UI/UX)", team: "Design", location: "Remote", type: "Full-time" },
  { title: "QA Automation Engineer", team: "Quality", location: "Bhopal / Remote", type: "Full-time" },
];

export const perks = [
  { title: "Work on real scale", description: "Ship products used by millions — payments, agritech and SaaS platforms in production." },
  { title: "Learn from IIT alumni", description: "Grow alongside a senior, engineering-first team that cares about craft." },
  { title: "Flexible & remote-friendly", description: "Do your best work from Bhopal or remotely, with flexible hours." },
  { title: "Ownership from day one", description: "Small teams, real responsibility and a direct line to impact." },
];

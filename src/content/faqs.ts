export type Faq = {
  question: string;
  answer: string;
};

/** Homepage FAQ. Questions carried over from the current site; answers written
 *  to reflect Vidyayatan's engagement models and positioning. */
export const faqs: Faq[] = [
  {
    question: "Why should I choose Vidyayatan Technologies as my tech partner?",
    answer:
      "We're an IIT-alumni-led engineering team that has shipped production software at real scale — from BharatPe's payments platform to DCM Shriram's 300,000-farm monitoring system. You get senior engineering judgement, industry-specific expertise, and solutions built to scale rather than throwaway code.",
  },
  {
    question: "How does Vidyayatan ensure a return on investment (ROI)?",
    answer:
      "We invest upfront in the right architecture and tech decisions, so your software scales cleanly instead of accruing costly technical debt. That means lower long-term maintenance, faster feature delivery, and infrastructure that grows with your business — the ROI compounds over time.",
  },
  {
    question: "How flexible are Vidyayatan's engagement models?",
    answer:
      "Very. Choose full-project Outsourcing (we deliver and hand over everything), a long-term Technological Partnership (we co-own the roadmap), or Dedicated Teams that work exclusively under your supervision. You can also move between models as your needs change.",
  },
  {
    question: "Can Vidyayatan support my business's scalability needs?",
    answer:
      "Yes. Scalability is central to how we build — scalable cloud architecture (AWS), microservices where appropriate, and multi-tenant SaaS foundations. We've built systems handling billions of transactions and hundreds of thousands of records.",
  },
  {
    question: "Do I have a dedicated point of contact at Vidyayatan?",
    answer:
      "Yes. Every engagement has a dedicated point of contact who keeps you informed, coordinates the team, and ensures priorities stay aligned throughout the project.",
  },
  {
    question: "What is the minimum commitment for your services?",
    answer:
      "It depends on the engagement model and scope. We're happy to start with a focused discovery or a smaller first milestone so you can validate the working relationship before committing further. Book a call and we'll recommend the right starting point.",
  },
  {
    question: "How does Vidyayatan ensure the security of its software solutions?",
    answer:
      "Security is built in from day one — secure cloud infrastructure, access control, data protection and GDPR-conscious practices. We safeguard applications against external threats and follow secure development practices across the SDLC.",
  },
];

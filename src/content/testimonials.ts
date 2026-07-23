export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
  company: string;
  avatar: string;
};

/** Real client testimonials carried over from the current site. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "We are extremely pleased with the farm management solution developed by Vidyayatan Technologies. Their expertise in crop planning, pest management and block mapping has significantly improved our operations — optimising planting schedules, enhancing pest control and bettering resource allocation. We highly recommend them for their innovative solutions and outstanding support.",
    name: "Hannes Nel",
    role: "CEO",
    company: "Maroi Boerdery BK",
    location: "Limpopo, South Africa",
    avatar: "/testimonials/hannes-nel.png",
  },
  {
    quote:
      "Vidyayatan's solutions have significantly improved our ability to manage and monitor field activities, giving us real-time data that improves decision-making. Our farm managers can streamline operations, optimise resource use and increase productivity, and field visitors now have accurate, up-to-date information that makes their tasks more efficient.",
    name: "Mahesh Kumar",
    role: "Digital Head",
    company: "DCM Shriram",
    location: "New Delhi, India",
    avatar: "/testimonials/mahesh-kumar.png",
  },
  {
    quote:
      "The best part about working with Vidyayatan is that they take the time to understand our unique farm-security challenges in South Africa and then work consistently to deliver to those needs. Their qualified team works with precision, and we are absolutely thrilled to have them as our technology partner.",
    name: "Anneli Nel",
    role: "CEO",
    company: "Labour Link",
    location: "Limpopo, South Africa",
    avatar: "/testimonials/anneli-nel.png",
  },
  {
    quote:
      "We are very pleased with the site-mapping tool developed by Vidyayatan for our manufacturing operations. Their SaaS solution for mapping sites, buildings and floors has streamlined our workflow and enhanced efficiency. The team understood our specific needs and delivered a user-friendly, tailored solution that exceeded our expectations.",
    name: "Gunasekaran Raju",
    role: "Regional Director",
    company: "Innowell",
    location: "Chennai, India",
    avatar: "/testimonials/gunasekaran-raju.png",
  },
];

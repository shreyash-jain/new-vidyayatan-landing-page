export type ShowcaseClient = {
  name: string;
  url: string;
};

export type IndustryShowcase = {
  key: string;
  tabLabel: string;
  cardTitle: string;
  image: string;
  clients: ShowcaseClient[];
};

/** Real clients, grouped by industry, for the homepage trust showcase. */
export const industryShowcase: IndustryShowcase[] = [
  {
    key: "fintech",
    tabLabel: "Fintech",
    cardTitle: "Payments, Lending & Fintech Platforms",
    image: "/clients-showcase/fintech.jpg",
    clients: [{ name: "BharatPe", url: "https://bharatpe.com/" }],
  },
  {
    key: "edtech",
    tabLabel: "EdTech",
    cardTitle: "Schools, Coaching & Learning Platforms",
    image: "/clients-showcase/edtech.jpg",
    clients: [
      { name: "Vacademy", url: "https://vacademy.io/" },
      { name: "Shiksha Nation", url: "https://shikshanation.com/" },
      { name: "IIRF", url: "https://iirfranking.com/" },
      { name: "VetEducation", url: "https://veteducation.com/" },
      { name: "Jumpstart Preschool", url: "https://jumpstartpreschool.in/" },
      { name: "Shri Saidas Classes", url: "https://shrisaidasclasses.com/" },
    ],
  },
  {
    key: "agritech",
    tabLabel: "Agritech",
    cardTitle: "Farms, Labour & Agri Operations",
    image: "/clients-showcase/agritech.jpg",
    clients: [{ name: "Labour Link", url: "https://labourlinksoftware.co.za/" }],
  },
  {
    key: "wellness",
    tabLabel: "Health & Wellness",
    cardTitle: "Fitness, Yoga & Wellness Platforms",
    image: "/clients-showcase/wellness.jpg",
    clients: [
      { name: "Habuild", url: "https://habuild.in/" },
      { name: "Aanandham", url: "https://www.aanandham.uk/" },
    ],
  },
  {
    key: "manufacturing",
    tabLabel: "Manufacturing",
    cardTitle: "Factories, Facilities & Production",
    image: "/clients-showcase/manufacturing.jpg",
    clients: [
      { name: "Sri Chakra", url: "https://www.srichakra.in/" },
      { name: "Krazy Kreators", url: "https://krazykreators.com/" },
      { name: "Innowell", url: "https://innowellgroup.com/" },
    ],
  },
  {
    key: "realestate",
    tabLabel: "Real Estate",
    cardTitle: "Property & Home Services",
    image: "/clients-showcase/realestate.jpg",
    clients: [{ name: "Home Review", url: "https://homereview.co.nz/" }],
  },
];

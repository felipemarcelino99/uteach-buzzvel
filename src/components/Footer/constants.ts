type MenuItem = {
  label: string;
  tag?: string;
  icon?: string;
};

type MenuSection = {
  key: string;
  title: string;
  items: MenuItem[];
};

export const MENU_SECTIONS: MenuSection[] = [
  {
    key: "product",
    title: "Product",
    items: [
      { label: "Pricing" },
      { label: "Overview" },
      { label: "Browse" },
      { label: "Accessibility", tag: "BETA" },
    ],
  },
  {
    key: "solutions",
    title: "Solutions",
    items: [
      { label: "Brainstorming" },
      { label: "Ideation" },
      { label: "Wireframing" },
      { label: "Research" },
    ],
  },
  {
    key: "resources",
    title: "Resources",
    items: [
      { label: "Help Center" },
      { label: "Blog" },
      { label: "Tutorials" },
      { label: "FAQs" },
    ],
  },
  {
    key: "support",
    title: "Support",
    items: [
      { label: "Contact Us" },
      { label: "Developers" },
      { label: "Documentation" },
      { label: "Integrations" },
    ],
  },
  {
    key: "company",
    title: "Company",
    items: [
      { label: "About" },
      { label: "Press" },
      { label: "Events" },
      {
        label: "Request Demo",
        icon: "/images/icons/arrow-right-gray.png",
      },
    ],
  },
];

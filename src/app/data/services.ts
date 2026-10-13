import type { IconType } from "react-icons";
import { FiCloud, FiCode, FiCpu, FiLayers, FiPenTool, FiSmartphone } from "react-icons/fi";

export type Service = {
  slug: string;
  title: string;
  short: string; // one line, used in cards and the nav menu
  icon: IconType;
  intro: string; // paragraph at the top of the service page
  capabilities: { title: string; desc: string }[];
  deliverables: string[];
  tech: string[]; // names matching data/tech.ts
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    short: "Fast, secure websites and web apps built to scale.",
    icon: FiCode,
    intro:
      "From marketing sites to complex web platforms, we build fast, accessible and SEO-friendly web applications on a modern, well-supported stack, ready to grow with your business.",
    capabilities: [
      { title: "Web applications", desc: "Dashboards, portals and SaaS products with clean, maintainable architecture." },
      { title: "E-commerce", desc: "Online stores with catalogues, bundles, payments and order flows that convert." },
      { title: "Corporate websites", desc: "Content-rich sites with CMS editing, great performance and strong SEO." },
      { title: "APIs & integrations", desc: "REST and GraphQL APIs plus integrations with payment, CRM and third-party services." },
    ],
    deliverables: ["Responsive web app", "Admin / CMS panel", "API documentation", "Automated tests", "CI/CD pipeline", "Performance & SEO audit"],
    tech: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    short: "Cross-platform iOS and Android apps with a native feel.",
    icon: FiSmartphone,
    intro:
      "We design and build mobile apps that feel at home on both iOS and Android, sharing one codebase where it makes sense and going native where it matters.",
    capabilities: [
      { title: "Cross-platform apps", desc: "One codebase for iOS and Android with Flutter or React Native." },
      { title: "Native features", desc: "Push notifications, payments, maps, camera and offline support." },
      { title: "Backend & sync", desc: "Secure APIs, authentication and real-time data for your app." },
      { title: "Store launch", desc: "App Store and Google Play submission, review and release management." },
    ],
    deliverables: ["iOS & Android apps", "Backend API", "Push notifications", "Analytics setup", "Store listings", "Release pipeline"],
    tech: ["Flutter", "React Native", "Expo", "Kotlin", "Swift", "Firebase"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX & Product Design",
    short: "Research-led design that people enjoy using.",
    icon: FiPenTool,
    intro:
      "Good software starts with understanding people. We turn ideas into clear user flows, clickable prototypes and polished interfaces before development begins.",
    capabilities: [
      { title: "Discovery & research", desc: "Stakeholder workshops, user interviews and competitor reviews." },
      { title: "UX & wireframes", desc: "User journeys, information architecture and low-fidelity layouts." },
      { title: "UI & visual design", desc: "High-fidelity screens that reflect your brand across every device." },
      { title: "Design systems", desc: "Reusable components and guidelines that keep products consistent." },
    ],
    deliverables: ["User flows", "Wireframes", "Clickable prototype", "High-fidelity UI", "Design system", "Developer hand-off"],
    tech: ["Figma"],
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    short: "Booking systems, ERPs and internal tools built around you.",
    icon: FiLayers,
    intro:
      "Off-the-shelf tools rarely fit perfectly. We build custom systems shaped around how your business actually works: booking platforms, management systems, dashboards and automation.",
    capabilities: [
      { title: "Booking & reservations", desc: "Availability, scheduling, payments and notifications in one flow." },
      { title: "Management systems", desc: "Inventory, HR, billing and operations tools tailored to your process." },
      { title: "Dashboards & reporting", desc: "Real-time data and reports that support faster decisions." },
      { title: "Legacy modernisation", desc: "Move ageing systems to modern, secure and maintainable platforms." },
    ],
    deliverables: ["Requirements spec", "Custom web platform", "Role-based access", "Reports & exports", "Data migration", "Training & docs"],
    tech: ["Next.js", "NestJS", "Spring Boot", "PostgreSQL", "MySQL", "Docker"],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    short: "Automated, observable and cost-efficient infrastructure.",
    icon: FiCloud,
    intro:
      "We set up the infrastructure and pipelines that let your team ship confidently: automated deployments, monitoring and cloud environments that scale without surprises.",
    capabilities: [
      { title: "Cloud architecture", desc: "Secure, scalable setups on AWS, Google Cloud or Azure." },
      { title: "CI/CD", desc: "Automated testing and deployments on every change." },
      { title: "Containers", desc: "Docker and Kubernetes for consistent, portable environments." },
      { title: "Monitoring & cost", desc: "Logging, alerting and right-sizing to keep things fast and affordable." },
    ],
    deliverables: ["Cloud architecture", "Infrastructure as code", "CI/CD pipelines", "Monitoring & alerts", "Backups & recovery", "Runbooks"],
    tech: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    short: "Practical AI features and workflows that save time.",
    icon: FiCpu,
    intro:
      "We help businesses put AI to work in practical ways: assistants that know your data, document processing, and automations that remove repetitive manual work.",
    capabilities: [
      { title: "AI assistants", desc: "Chatbots and copilots grounded in your own documents and data." },
      { title: "Document intelligence", desc: "Extract, classify and summarise information from files and forms." },
      { title: "Workflow automation", desc: "Connect your tools and automate repetitive tasks end to end." },
      { title: "AI in your product", desc: "Add search, recommendations and generation features to existing apps." },
    ],
    deliverables: ["Use-case assessment", "Prototype", "Production integration", "Evaluation & guardrails", "Usage monitoring", "Team hand-off"],
    tech: ["Claude", "LangChain", "Python", "FastAPI", "PyTorch"],
  },
];

export function findServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Quiva Comic Web3 API",
    description:
      "Backend API powering a Web3 comic platform with user management, content access, subscriptions, and secure JWT authentication.",
    technologies: ["Express.js", "MongoDB", "Swagger"],
    image: "/cleaning-service-api-dashboard.jpg",
    link: "",
  },
  {
    title: "Chain Cart Full Stack",
    description:
      "Full-stack Web2 and Web3 real-estate marketplace for buying land and houses using the XION blockchain.",
    technologies: [
      "React",
      "TanStack Store/Query",
      "Express.js",
      "MongoDB",
      "Swagger",
    ],
    image: "/chain_client.png",
    link: "",
  },
  {
    title: "Warpay",
    description:
      "Decentralized property marketplace combining blockchain payments with modern Web2 user experience.",
    technologies: [
      "React",
      "TanStack Store/Query",
      "Express.js",
      "MongoDB",
      "Swagger",
    ],
    image: "/chain_client.png",
    link: "",
  },
  {
    title: "Veepay API",
    description:
      "Payment gateway API integrating Paystack, Flutterwave, and VTPass for airtime and data transactions.",
    technologies: ["Express.js", "MongoDB", "Swagger"],
    image: "/cleaning-service-api-dashboard.jpg",
    link: "",
  },
  {
    description:
      "Scalable payment infrastructure for digital services and wallet-based transactions.",
    technologies: ["Express.js", "MongoDB", "Swagger"],
    image: "/cleaning-service-api-dashboard.jpg",
    link: "",
  },
  {
    title: "AI Nurse Assistant",
    description:
      "An intelligent healthcare assistant that uses machine learning and natural language processing to support symptom analysis, patient guidance, and medical data interaction.",
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "Scikit-learn",
      "Machine Learning",
      "NLP",
      "REST API",
    ],
    image: "/ai_nurse_dashboard.png",
    link: "",
  },

  {
    title: "Edfin API",
    description:
      "Financial service API integrated with Remita for airtime, data, and utility payments.",
    technologies: ["Express.js", "MongoDB", "Swagger"],
    image: "/cleaning-service-api-dashboard.jpg",
    link: "",
  },
  {
    title: "Cleaning Service API",
    description:
      "Service management API for bookings, cleaners, customers, subscriptions, and role-based access control.",
    technologies: [
      ".NET 8",
      "PostgreSQL",
      "Entity Framework",
      "JWT",
      "Swagger",
    ],
    image: "/cleaning-service-api-dashboard.jpg",
    link: "",
  },
  {
    title: "E-Commerce API",
    description:
      "E-commerce backend supporting product listings, cart, orders, search, pagination, and secure authentication.",
    technologies: ["ASP.NET Core", "Entity Framework", "JWT", "REST API"],
    image: "/ecommerce-api-interface.jpg",
    link: "",
  },
  {
    title: "Yoruba Calendar",
    description:
      "Cultural platform showcasing Yoruba traditions, Orishas, books, and global Yoruba cultural events.",
    technologies: [
      "React",
      "API Integration",
      "Express.js",
      "Prisma",
      "PostgreSQL",
    ],
    image: "/yoruba_calendar.png",
    link: "",
  },
  {
    title: "Abundance Full stack ",
    description:
      "Real-time video and chat communication platform built with WebRTC and Socket.IO infrastructure.",
    technologies: [
      "React",
      "API Integration",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "WebSocket",
      "Socket.IO",
      "WebRTC",
      "Coturn / TURN / STUN",
    ],
    image: "/ecommerce-api-interface.jpg",
    link: "",
  },
  {
    title: "Real-Time Video and Chat Call",
    description:
      "Real-time video and chat communication platform built with WebRTC and Socket.IO infrastructure.",
    technologies: [
      "React",
      "API Integration",
      "Express.js",
      "WebSocket",
      "Socket.IO",
      "Ethersjs",
      "Rainbowkit",
      "Reown",
    ],
    image: "/ecommerce-api-interface.jpg",
    link: "",
  },
  {
    title: "Scan Shop Mobile App Full Stack",
    description:
      "Mobile lending and borrowing platform with Web3 smart-contract based transaction security.",
    technologies: [
      "React Native",
      "Expo",
      "NativeWind",
      "TanStack Store/Query",
      "Express.js",
      "MongoDB",
      "",
    ],
    image: "/deficonnect.png",
    link: "",
  },
  {
    title: "Event Booking API",
    description:
      "Backend system for managing event listings, bookings, payments, and attendee records.",
    technologies: ["ASP.NET Core", "Entity Framework", "JWT", "REST API"],
    image: "/deficonnect.png",
    link: "",
  },
  {
    title: "Restaurant API",
    description:
      "Restaurant management API handling menus, orders, reservations, and customer data.",
    technologies: ["ASP.NET Core", "Entity Framework", "JWT", "REST API"],
    image: "/deficonnect.png",
    link: "",
  },
  {
    title: "Car Renting API",
    description:
      "Car rental backend API for vehicle listings, bookings, payments, and customer management.",
    technologies: ["ASP.NET Core", "Entity Framework", "JWT", "REST API"],
    image: "/deficonnect.png",
    link: "",
  },
  {
    title: "DeFi Credit Platform",
    description:
      "Decentralized finance platform enabling lending and borrowing through smart contracts.",
    technologies: ["React", "Web3.js", "Solidity", "Smart Contracts"],
    image: "/deficonnect.png",
    link: "",
  },
  {
    title: "Cybria Staking Platform",
    description:
      "Blockchain staking platform allowing users to stake, swap, and earn rewards securely.",
    technologies: ["React", "Solidity", "Ethers.js", "DeFi"],
    image: "/crypto-staking-platform-dark.jpg",
    link: "",
  },
  {
    title: "Task Management System",
    description:
      "Enterprise task tracking system with real-time updates for team productivity.",
    technologies: ["Angular", ".NET", "MySQL", "Real-time", "API Integration"],
    image: "/task-management-dashboard-dark.jpg",
    link: "",
  },
  {
    title: "Dyleum",
    description:
      "Web3 platform focused on decentralized application interaction and blockchain services.",
    technologies: [
      "React",
      "Solidity",
      "Ethers.js",
      "API Integration",
      "Express.js",
      "MongoDB",
    ],
    image: "/Dyleum_Testnet.png",
    link: "",
  },
  {
    title: "Staking Platform",
    description:
      "Blockchain staking system for managing digital asset rewards and pools.",
    technologies: ["React", "Solidity", "Ethers.js", "API Integration"],
    image: "/task-management-dashboard-dark.jpg",
    link: "",
  },
  {
    title: "Airdrop Calculator",
    description:
      "Tool for calculating token airdrop rewards based on wallet activity and staking data.",
    technologies: ["React", "Solidity", "Ethers.js", "API Integration"],
    image: "/Airdrop_Calculator.png",
    link: "",
  },
  {
    title: "Staking Platform",
    description:
      "Car rental marketplace for discovering, booking, and renting vehicles easily.",
    technologies: ["React", "Next.js", "NestJS", "API Integration"],
    image: "/car_hub_client.png",
    link: "",
  },
  {
    title: "Codeline Client",
    description:
      "Frontend system for managing subscriptions, contact forms, and user interactions.",
    technologies: [
      "ASP.NET Core",
      "SQL Server",
      "Entity Framework",
      "REST API",
    ],
    image: "/Codeline_client.png",
    link: "",
  },
  {
    title: "Codeline Server",
    description:
      "Enterprise backend system delivering business solutions, integrations, and digital transformation services.",
    technologies: [
      "ASP.NET Core",
      "SQL Server",
      "Entity Framework",
      "REST API",
    ],
    image: "/server-management-dashboard.jpg",
    link: "",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          Projects
        </h2>
      </div>

      <div className="space-y-12">
        {projects.map((project, index) => {
          const TitleWrapper = project.link ? "a" : "div";

          return (
            <div
              key={index}
              className="group relative rounded-lg transition-all hover:bg-card/50 p-4 -mx-4"
            >
              <div className="grid gap-4 sm:grid-cols-8">
                <div className="sm:col-span-2 sm:order-1 order-2">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="rounded border border-border/50 aspect-video object-cover transition-all group-hover:border-muted-foreground/50"
                    width={200}
                    height={100}
                  />
                </div>

                <div className="sm:col-span-6 sm:order-2 order-1">
                  <h3 className="font-medium leading-snug text-foreground">
                    <TitleWrapper
                      {...(project.link && {
                        href: project.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                      className="inline-flex items-baseline gap-2 font-medium leading-tight transition-colors group-hover:text-primary"
                    >
                      <span>{project.title}</span>

                      {project.link && (
                        <ArrowUpRight className="ml-1 h-4 w-4 shrink-0 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      )}
                    </TitleWrapper>
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.filter(Boolean).map((tech) => (
                      <li key={tech}>
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {tech}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

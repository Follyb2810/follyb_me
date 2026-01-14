import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Cleaning Service API",
    description:
      "A .NET 8 Web API for managing cleaning operations — including customers, cleaners, bookings, and subscription plans. Implemented full CRUD operations, user roles, and secure authentication with JWT.",
    technologies: [".NET 8", "PostgreSQL", "Entity Framework", "JWT", "Swagger"],
    image: "/cleaning-service-api-dashboard.jpg",
  },
  {
    title: "E-Commerce API",
    description:
      "Modular ASP.NET Core Web API supporting product listings, cart management, and user orders. Added authentication using JWT and implemented product filtering, pagination, and search.",
    technologies: ["ASP.NET Core", "Entity Framework", "JWT", "REST API"],
    image: "/ecommerce-api-interface.jpg",
  },
  {
    title: "DeFi Credit Platform",
    description:
      "A lending and borrowing platform with Web3 integration. Implemented smart contract functionality on the backend for secure transactions.",
    technologies: ["React", "Web3.js", "Solidity", "Smart Contracts"],
    image: "/defi-lending-platform-dark-theme.jpg",
  },
  {
    title: "Cybria Staking Platform",
    description:
      "Decentralized staking platform with React and Solidity. Features include swap and staking of coins with secure blockchain integration.",
    technologies: ["React", "Solidity", "Ether.js", "DeFi"],
    image: "/crypto-staking-platform-dark.jpg",
  },
  {
    title: "Task Management System",
    description:
      "Employee task management platform with real-time updates. Built for teams to efficiently manage and track work progress.",
    technologies: ["React", "Real-time", "API Integration"],
    image: "/task-management-dashboard-dark.jpg",
  },
  {
    title: "Codeline Server",
    description:
      "Backend system managing user registration, subscriptions, and contact forms. Built with ASP.NET Core following clean REST API design principles.",
    technologies: ["ASP.NET Core", "SQL Server", "Entity Framework", "REST API"],
    image: "/server-management-dashboard.jpg",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">Projects</h2>
      </div>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="group relative rounded-lg transition-all hover:bg-card/50 p-4 -mx-4">
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
                  <div className="inline-flex items-baseline gap-2 font-medium leading-tight text-foreground group-hover:text-primary transition-colors">
                    <span>{project.title}</span>
                    <ArrowUpRight className="ml-1 h-4 w-4 shrink-0 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
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
        ))}
      </div>
    </section>
  )
}

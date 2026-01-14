import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    period: "June 2024 — Present",
    title: "Software Developer",
    company: "Codeline Digital Limited",
    description:
      "Designed and developed RESTful APIs using ASP.NET Core 7, integrated with PostgreSQL. Implemented Entity Framework Core migrations and optimized query performance. Collaborated with frontend developers to integrate APIs with React and Angular applications.",
    technologies: ["ASP.NET Core", "PostgreSQL", "Entity Framework", "React", "Angular"],
  },
  {
    period: "June 2024 — Present",
    title: "Senior Software Developer",
    company: "Cleaning Service",
    description:
      "Developed a RESTful .NET Web API managing cleaning service operations including users, bookings, subscriptions, and cleaner assignments. Built user authentication with JWT, role-based access, and secure token refresh flows.",
    technologies: ["ASP.NET Core", "SQL Server", "JWT", "Clean Architecture"],
  },
  {
    period: "Previous",
    title: "Senior Frontend Developer",
    company: "Iobotech/Prepaid Metering",
    description:
      "Designed and developed new UI components ensuring seamless user experience. Integrated payment gateways for secure transactions. Maintained legacy code and collaborated with backend APIs.",
    technologies: ["React", "Payment Integration", "UI/UX", "API Integration"],
  },
  {
    period: "Previous",
    title: "Web3 Frontend Developer",
    company: "Dexentric",
    description:
      "Developed decentralized applications (dApps) with React and Web3.js. Implemented smart contract interactions on the UI for blockchain-based solutions.",
    technologies: ["React", "Web3.js", "Smart Contracts", "dApps"],
  },
  {
    period: "Previous",
    title: "Frontend Web3 Developer",
    company: "Dyleum",
    description:
      "Built and optimized Web3 user interfaces using React and Next.js. Integrated blockchain functionalities, enabling staking and DeFi features.",
    technologies: ["React", "Next.js", "Staking", "DeFi"],
  },
  {
    period: "Previous",
    title: "Full Stack Developer",
    company: "Cybria",
    description:
      "Developed end-to-end web applications, handling both frontend and backend. Worked with Solidity and Ether.js for smart contract development.",
    technologies: ["Solidity", "Ether.js", "Full Stack", "Smart Contracts"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">Experience</h2>
      </div>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
              {exp.period}
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-foreground">
                <div className="inline-flex items-baseline gap-2 font-medium leading-tight text-foreground group-hover:text-primary transition-colors">
                  <span>{exp.title}</span>
                  <span className="text-muted-foreground">·</span>
                  <span>{exp.company}</span>
                  <ArrowUpRight className="ml-1 h-4 w-4 shrink-0 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <li key={tech}>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

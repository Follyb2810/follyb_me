const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Angular",
      "Vue",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    title: "Backend",
    skills: ["C#", "ASP.NET Core", "Blazor", "Express.js", "Entity Framework Core", "LINQ", "RESTful APIs"],
  },
  {
    title: "Blockchain/Web3",
    skills: ["Solidity", "Ether.js", "Web3.js", "Smart Contracts", "dApps", "DeFi"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "Docker", "Azure", "CI/CD", "Swagger"],
  },
  {
    title: "Design Patterns",
    skills: ["Repository Pattern", "Dependency Injection", "MVC", "MVVM", "Clean Architecture"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">Skills</h2>
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        {skillCategories.map((category, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-secondary-foreground hover:bg-secondary transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

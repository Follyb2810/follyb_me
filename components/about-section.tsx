export function AboutSection() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">About</h2>
      </div>
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          I'm a <span className="text-foreground font-medium">results-driven developer</span> with{" "}
          <span className="text-foreground font-medium">hands-on experience</span> building scalable Web APIs, modern
          web applications, and decentralized solutions. My expertise spans across the full stack—from crafting
          pixel-perfect user interfaces to architecting robust backend systems.
        </p>
        <p>
          Currently, I specialize in <span className="text-foreground font-medium">ASP.NET Core</span> and{" "}
          <span className="text-foreground font-medium">Blazor</span> for backend development, while leveraging{" "}
          <span className="text-foreground font-medium">React</span>,{" "}
          <span className="text-foreground font-medium">Next.js</span>, and modern JavaScript frameworks for frontend
          experiences. I'm also deeply involved in the{" "}
          <span className="text-foreground font-medium">Web3 ecosystem</span>, building dApps with Solidity and
          Ether.js.
        </p>
        <p>
          I'm passionate about writing clean, maintainable code and developing efficient systems integrated with
          PostgreSQL, MySQL, and SQL Server databases. When I'm not coding, I'm exploring new technologies and
          contributing to the developer community.
        </p>
      </div>
    </section>
  )
}

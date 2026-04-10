export function AboutSection() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          About
        </h2>
      </div>

      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          I'm a
          <span className="text-foreground font-medium">
            results-driven full-stack developer
          </span>
          with strong experience building scalable APIs, modern web and mobile
          applications, and decentralized blockchain solutions. I enjoy
          transforming complex ideas into clean, efficient, and user-friendly
          systems.
        </p>

        <p>
          My backend expertise includes
          <span className="text-foreground font-medium">ASP.NET Core</span>,
          <span className="text-foreground font-medium">Node.js (Express)</span>
          , and <span className="text-foreground font-medium">FastAPI</span>,
          while on the frontend I work with
          <span className="text-foreground font-medium">React</span>,
          <span className="text-foreground font-medium">Angular</span>,
          <span className="text-foreground font-medium">Vue</span>,
          <span className="text-foreground font-medium">Nuxtjs</span>,
          <span className="text-foreground font-medium">Next.js</span>, and
          <span className="text-foreground font-medium">React Native</span> to
          build responsive and high-performance applications.
        </p>

        <p>
          I am deeply involved in the
          <span className="text-foreground font-medium">Web3 ecosystem</span>,
          building decentralized applications with
          <span className="text-foreground font-medium">Solidity</span>,
          <span className="text-foreground font-medium">Ethers.js</span>, and
          smart-contract integrations for secure blockchain transactions.
        </p>

        <p>
          Recently, I have expanded into
          <span className="text-foreground font-medium">
            Artificial Intelligence and Machine Learning
          </span>
          , working with
          <span className="text-foreground font-medium">LangChain</span>,
          <span className="text-foreground font-medium">Scikit-learn</span>, and
          <span className="text-foreground font-medium">FastAPI</span> to build
          intelligent systems such as AI assistants and data-driven
          applications.
        </p>

        <p>
          I value clean architecture, performance, and maintainability, and I
          enjoy working with databases like
          <span className="text-foreground font-medium">PostgreSQL</span>,
          <span className="text-foreground font-medium">MySQL</span>, and
          <span className="text-foreground font-medium">SQL Server</span>.
          Beyond coding, I stay curious, continuously learning new technologies,
          and pushing myself to build better software solutions.
        </p>
      </div>
    </section>
  );
}

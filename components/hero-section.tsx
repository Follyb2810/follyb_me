import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  TicketCheckIcon,
} from "lucide-react";

export function HeroSection() {
  return (
    <div className="pt-24 lg:pt-0">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Babatunde Yusuf Folorunsho
      </h1>
      <h2 className="mt-3 text-lg font-medium text-primary sm:text-xl">
        Full Stack & Web3 Developer
      </h2>
      <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
        I build scalable web applications and decentralized solutions that
        deliver exceptional user experiences.
      </p>

      <nav className="hidden lg:block mt-16">
        <ul className="flex flex-col gap-4">
          {["About", "Experience", "Projects", "Skills", "Contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="group flex items-center gap-3 text-sm text-muted-foreground transition-all hover:text-foreground"
                >
                  <span className="h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground" />
                  <span className="uppercase tracking-widest text-xs">
                    {item}
                  </span>
                </a>
              </li>
            )
          )}
        </ul>
      </nav>

      <div className="mt-8 lg:mt-auto lg:pb-12">
        <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Lagos, Nigeria</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+234 909 532 9075</span>
          </div>
        </div>

        <ul className="flex items-center gap-5">
          <li>
            <a
              href="https://github.com/Follyb2810"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/babatunde-yusuf-folorunsho-390869215"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a
              href="mailto:babatundeyusuffolorunsho@gmail.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@devfolly?is_from_webapp=1&sender_device=pc"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Tiktok"
            >
              <TicketCheckIcon className="h-6 w-6" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

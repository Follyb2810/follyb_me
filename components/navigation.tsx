"use client";

import { useState, useEffect } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden lg:block fixed left-12 top-1/2 -translate-y-1/2 z-50">
      <ul className="flex flex-col gap-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={`group flex items-center gap-3 text-sm transition-all duration-300 ${
                activeSection === item.href.slice(1)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span
                className={`h-px transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? "w-16 bg-foreground "
                    : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
                }`}
              />
              <span className="uppercase tracking-widest text-xs">
                {item.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">Contact</h2>
      </div>
      <div className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          If you would like to discuss a project or just say hi, I'm always open to chat. Feel free to reach out through
          any of the channels below.
        </p>

        <div className="space-y-4">
          <a
            href="mailto:babatundeyusuffolorunsho@gmail.com"
            className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
          >
            <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="text-sm">babatundeyusuffolorunsho@gmail.com</span>
          </a>
          <a
            href="tel:+2349095329075"
            className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
          >
            <Phone className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="text-sm">+234 909 532 9075</span>
          </a>
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span className="text-sm">Lagos, Nigeria</span>
          </div>
        </div>

        <div className="pt-4">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="mailto:babatundeyusuffolorunsho@gmail.com">
              <Send className="mr-2 h-4 w-4" />
              Get in Touch
            </a>
          </Button>
        </div>

        <footer className="pt-12 text-xs text-muted-foreground">
          <p>
            Built with{" "}
            <a href="https://nextjs.org" className="font-medium text-foreground hover:text-primary transition-colors">
              Next.js
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com"
              className="font-medium text-foreground hover:text-primary transition-colors"
            >
              Tailwind CSS
            </a>
            . Deployed on{" "}
            <a href="https://vercel.com" className="font-medium text-foreground hover:text-primary transition-colors">
              Vercel
            </a>
            .
          </p>
        </footer>
      </div>
    </section>
  )
}

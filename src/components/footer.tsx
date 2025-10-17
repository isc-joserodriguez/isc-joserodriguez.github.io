import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/isc-joserodriguez',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/isc-joserodriguez',
    icon: Github,
  },
  {
    name: 'Email',
    href: 'mailto:isc.joserodriguez@gmail.com',
    icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-background" role="contentinfo">
      <div className="container py-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} José Rodriguez. Todos los derechos reservados.
            </p>
          </div>

          <nav className="flex gap-4" aria-label="Redes sociales">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm"
                aria-label={`Visitar mi perfil de ${link.name}`}
                title={link.name}
              >
                <link.icon className="h-5 w-5" aria-hidden="true" />
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Volver arriba ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}

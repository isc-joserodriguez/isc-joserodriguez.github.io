'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useI18n } from '@/contexts/i18n-context';
import type { SiteData } from '@/lib/schemas';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

interface ContactProps {
  siteDataEs: SiteData;
  siteDataEn: SiteData;
}

export function Contact({ siteDataEs, siteDataEn }: ContactProps) {
  const { locale } = useI18n();
  const siteData = locale === 'en' ? siteDataEn : siteDataEs;
  const { contact } = siteData;
  const title = locale === 'en' ? 'Contact' : 'Contacto';
  const emailLabel = locale === 'en' ? 'Email' : 'Email';
  const phoneLabel = locale === 'en' ? 'Phone' : 'Teléfono';
  const locationLabel = locale === 'en' ? 'Location' : 'Ubicación';
  const sendMessageLabel = locale === 'en' ? 'Send a message' : 'Enviar un mensaje';

  return (
    <section id="contacto" className="container py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">{contact.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">{emailLabel}</h3>
                <Link
                  href={`mailto:${contact.email}`}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {contact.email}
                </Link>
              </div>

              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">{phoneLabel}</h3>
                <Link
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {contact.phone}
                </Link>
              </div>

              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">{locationLabel}</h3>
                <p className="text-sm text-muted-foreground">{contact.location}</p>
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <Button asChild size="lg">
                <Link href={`mailto:${contact.email}`}>{sendMessageLabel}</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

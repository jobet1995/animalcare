"use client";

import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Logo } from "../shared/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/animals", label: "Animals" },
  { href: "/adopt", label: "Adopt" },
  { href: "/donate", label: "Donate" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function NewsletterForm() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <form className="flex flex-col sm:flex-row gap-2" data-lpignore="true">
      <Input
        type="email"
        placeholder="Enter your email"
        className="bg-background"
        data-lpignore="true"
      />
      <Button
        type="submit"
        className="bg-primary hover:bg-primary/90 text-primary-foreground"
      >
        Subscribe
      </Button>
    </form>
  );
}

export function Footer() {
  return (
    <footer className="bg-secondary/50 text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4 md:col-span-2 lg:col-span-1">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Saving lives, one paw at a time. Join us in our mission to find
              loving homes for animals in need.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                <span>123 Furry Lane, Petville, PV 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0" />
                <a
                  href="tel:123-456-7890"
                  className="hover:text-primary transition-colors"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0" />
                <a
                  href="mailto:info@animalkind.org"
                  className="hover:text-primary transition-colors"
                >
                  info@animalkind.org
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stay up to date with our latest news and adoptions.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} AnimalKind. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link
              href="#"
              aria-label="Facebook"
              className="hover:text-primary transition-colors"
            >
              <FacebookIcon size={20} />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="hover:text-primary transition-colors"
            >
              <InstagramIcon size={20} />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="hover:text-primary transition-colors"
            >
              <TwitterIcon size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

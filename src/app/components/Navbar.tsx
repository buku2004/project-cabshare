"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "./ui/sheet";
import { cn } from "../../lib/utils";
import UserStatus from "../auth/UserStatus";

const links = [
  { href: "#", label: "Home" },
  { href: "/find-ride", label: "Find a Ride" },
  { href: "/post-ride", label: "Post a Ride" },
  { href: "/about", label: "About" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the sheet whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 w-full border-b bg-white/90 backdrop-blur z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Left Section - Logo (keeping your existing logo) */}
        <Link href="/" className="flex items-center" aria-label="CabShare Home">
          <Image
            src="/cabshareorangelogo.png"
            alt="CabShare logo"
            width={130}
            height={32}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm text-gray-600 transition-colors hover:text-gray-900",
                pathname === l.href && "text-gray-900 font-medium",
              )}
            >
              {l.label}
            </Link>
          ))}
          {/* <Button asChild className="ml-2 bg-amber-600 text-white hover:bg-amber-700" size="sm">
            <Link href="/post-ride">{"Sign in"}</Link>
          </Button> */}
          <UserStatus/>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex justify-end">
                <SheetClose asChild>
                  <Button variant="outline" size="icon" aria-label="Close menu">
                    <X className="h-5 w-5" />
                  </Button>
                </SheetClose>
              </div>
              <div className="mt-8 grid gap-4">
                {links.map((l) => (
                  <SheetClose asChild key={l.href}>
                    <Link
                      href={l.href}
                      className={cn(
                        "rounded px-3 py-2 text-base transition-colors hover:bg-gray-50",
                        pathname === l.href && "bg-gray-50 font-medium",
                      )}
                    >
                      {l.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <UserStatus/>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

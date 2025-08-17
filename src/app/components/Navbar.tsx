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
import { motion, AnimatePresence } from "motion/react";

const links = [
  { href: "/", label: "Home" },
  { href: "/find-ride", label: "Find a Ride" },
  { href: "/post-ride", label: "Post a Ride" },
  { href: "/about", label: "About" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 w-full border-b bg-white/90 backdrop-blur z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center" aria-label="CabShare Home">
          <Image
            src="/cab-logo.png"
            alt="CabShare logo"
            width={130}
            height={32}
            priority
            className=""
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm text-gray-600 transition-colors hover:text-orange-600",
                pathname === l.href && "text-gray-900 font-medium",
              )}
            >
              {l.label}
            </Link>
          ))}
          <UserStatus/>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <motion.div
                  animate={{ rotate: open ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              
              {/* Animated Close Button */}
              <motion.div 
                className="flex justify-end"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <SheetClose asChild>
                  <Button variant="outline" size="icon" aria-label="Close menu">
                    <motion.div
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  </Button>
                </SheetClose>
              </motion.div>

              {/* Animated Menu Items */}
              <motion.div 
                className="mt-8 grid gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <AnimatePresence>
                  {open && links.map((l, index) => (
                    <motion.div
                      key={l.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.3 + (index * 0.1) 
                      }}
                    >
                      <SheetClose asChild>
                        <Link
                          href={l.href}
                          className={cn(
                            "block rounded px-3 py-2 text-base transition-colors hover:bg-gray-50",
                            pathname === l.href && "bg-gray-50 font-medium",
                          )}
                        >
                          {l.label}
                        </Link>
                      </SheetClose>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {/* Animated UserStatus */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.3 + (links.length * 0.1) 
                  }}
                >
                  <SheetClose asChild>
                    <UserStatus/>
                  </SheetClose>
                </motion.div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
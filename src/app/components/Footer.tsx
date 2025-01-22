import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="relative bg-cover bg-center bg-[#101820] text-white py-8">
        {/* Content */}
        <div className="flex flex-col justify-between">
          {/* Header */}
          <header className="text-left ml-20 my-3">
            <h1 className="text-4xl font-bold tracking-wider uppercase">
              CabShare-NITR
            </h1>
          </header>

          {/* Footer */}
          <footer className="text-left ml-20 mb-3">
            <p className="text-sm">
              Email:{" "}
              <a href="mailto:Support@Cabshare-Nitr.Com" className="underline">
                Support@Cabshare-Nitr.Com
              </a>
            </p>
            <p className="text-sm flex gap-4 mt-4">
              <Link href="/terms" className="hover:underline">
                Terms Of Service
              </Link>
              <Link href="/faq" className="hover:underline">
                FAQ
              </Link>
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </p>
            <p className="text-sm mt-4">
              Powered by NIT Rourkela Community
            </p>
            <p className="text-sm mt-2">
              © 2024 CabShare-NITR. All Rights Reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;

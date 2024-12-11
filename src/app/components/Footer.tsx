import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="relative bg-cover bg-center">

        {/* Content */}
        <div className="absolute flex flex-col justify-between text-white">
          {/* Header */}
          <header className="text-left ml-20 my-8">
            <h1 className="text-4xl font-bold tracking-wider uppercase">
              CabShare-NITR
            </h1>
          </header>

          {/* Footer */}
          <footer className="text-left ml-20 mb-8">
            <p className="text-sm">
              Email: <a href="mailto:Support@Cabshare-Nitr.Com" className="underline">Support@Cabshare-Nitr.Com</a>
            </p>
            <p className="text-sm">Terms Of Service | FAQ | Privacy Policy</p>
            <p className="text-sm mt-2">
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

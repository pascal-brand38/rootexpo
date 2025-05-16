import React from "react";

export interface Partner {
  name: string;
  logo: string;
  homepageLink: URL;
}

const mainPartner: Partner = {
    name: "Reaktor",
    logo: "https://cdn.cookielaw.org/logos/65274869-3579-4d42-93e2-893dae8bbcff/b74c7bd0-091c-478b-af51-4d9af81a00ae/8c44ad6d-30d8-4dc0-9838-dfcb7341587f/Reaktor_Wordmark_Black.png",
    homepageLink: new URL("https://www.reaktor.com"),
};
const partners: Partner[] = [
    {
        name: "Wapice",
        homepageLink: new URL("https://wapice.com"),
        logo: "https://images.ctfassets.net/l2p0cbhh34my/3oEDZFGiU4JkHWMOQ5lU7v/c0cfad2b676979ca92e2984dc99c3e8c/Wapice_Logo__No_Slogan_.png",
    },
    {
        name: "Netum",
        homepageLink: new URL("https://netum.fi"),
        logo: "https://images.ctfassets.net/l2p0cbhh34my/2cNhUSLj2o60qEFTVtwicb/f480329c64a6eeb37c0425c16e80ff49/netum_logo_green.jpg",
    },
    {
        name: "Mankeli Solutions",
        homepageLink: new URL("https://www.mankelisolutions.fi"),
        logo: "https://www.mankelisolutions.fi/_astro/logo_full.a19e8d55_6cK5I.webp",
    },
    {
        name: "Digit ry",
        homepageLink: new URL("https://www.digit.fi"),
        logo: "https://digit.fi/digit.svg",
    },
    {
        name: "Asteriski ry",
        homepageLink: new URL("https://www.asteriski.fi"),
        logo: "https://asteriski.fi/wp-content/uploads/2022/06/asteriski-logo_1_33.png",
    }
];

export default function StaticPartnersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Main Partner */}
      <section className="mb-16 flex justify-center">
        <a
          href={mainPartner.homepageLink.toString()}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="inline-flex items-center gap-6 p-8 bg-transparent transition-shadow duration-300 hover:shadow-2xl">
            <span className="flex h-36 w-72 items-center justify-center p-3 ">
              <img
                src={mainPartner.logo}
                className="max-w-full max-h-full"
              />
            </span>
          </div>
        </a>
      </section>

      {/* Grid of Other Partners */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <a
              href={partner.homepageLink.toString()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center gap-4 p-4 bg-transparent hover:shadow-md transition-all duration-300">
                <span className="flex h-24 w-48 items-center justify-center p-2">
                  <img
                    src={partner.logo}
                    className="max-w-full max-h-full"
                  />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

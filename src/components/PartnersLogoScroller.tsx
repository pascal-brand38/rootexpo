import React from "react";
import { InfiniteScroll } from "./InfiniteScroll";

interface PartnersProps {
    scrollDirection?: "normal" | "reverse";
    partnersGroup?: string;
}

const PartnersLogoScroller: React.FC<PartnersProps> = ({scrollDirection = "normal", partnersGroup = "0"}) => {

    interface Partner {
        name: string;
        homepageLink: URL;
        logo: string;
    }

    const partnersData0: { description: string; partners: Partner[] } = {
        description: "We are proud to be partnered with these amazing companies.",
        partners: [
            {
                name: "Astro",
                homepageLink: new URL("https://astro.build"),
                logo: "https://astro.build/logo.svg",
            },
            {
                name: "Vercel",
                homepageLink: new URL("https://vercel.com"),
                logo: "https://vercel.com/logo.svg",
            },
            {
                name: "Netlify",
                homepageLink: new URL("https://netlify.com"),
                logo: "https://netlify.com/logo.svg",
            },
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
        ],
    };

    const partnersData1: { description: string; partners: Partner[] } = {
        description: "We are proud to be partnered with these amazing companies.",
        partners: [
            {
                name: "Bastro",
                homepageLink: new URL("https://astro.build"),
                logo: "https://astro.build/logo.svg",
            },
            {
                name: "Bercel",
                homepageLink: new URL("https://vercel.com"),
                logo: "https://vercel.com/logo.svg",
            },
            {
                name: "Betlify",
                homepageLink: new URL("https://netlify.com"),
                logo: "https://netlify.com/logo.svg",
            },
            {
                name: "BitHub",
                homepageLink: new URL("https://github.com"),
                logo: "",
            },
            {
                name: "Bapice",
                homepageLink: new URL("https://wapice.com"),
                logo: "https://images.ctfassets.net/l2p0cbhh34my/3oEDZFGiU4JkHWMOQ5lU7v/c0cfad2b676979ca92e2984dc99c3e8c/Wapice_Logo__No_Slogan_.png",
            },
            {
                name: "Betum",
                homepageLink: new URL("https://netum.fi"),
                logo: "https://images.ctfassets.net/l2p0cbhh34my/2cNhUSLj2o60qEFTVtwicb/f480329c64a6eeb37c0425c16e80ff49/netum_logo_green.jpg",
            },
            {
                name: "Bankeli Solutions",
                homepageLink: new URL("https://www.mankelisolutions.fi"),
                logo: "https://www.mankelisolutions.fi/_astro/logo_full.a19e8d55_6cK5I.webp",
            },
            {
                name: "Bigit ry",
                homepageLink: new URL("https://www.digit.fi"),
                logo: "https://digit.fi/digit.svg",
            },
            {
                name: "Bsteriski ry",
                homepageLink: new URL("https://www.asteriski.fi"),
                logo: "https://asteriski.fi/wp-content/uploads/2022/06/asteriski-logo_1_33.png",
            }
        ],
    };

    const selectedPartnerData = partnersGroup === "0" ? partnersData0 : partnersData1;

    return (
        <InfiniteScroll
            duration={90000}
            direction={scrollDirection}
            showFade={true}
            className="flex-row justify-center"
            containerColor="#000000"
        >
            {selectedPartnerData.partners.flatMap((partner) => {
                return (
                    <a href={partner.homepageLink.toString()} target="_blank" rel="noopener noreferrer">
                        <div
                            key={`${partner}`}
                            className="mr-5 flex md:min-w-fit max-w-[90vw] items-center gap-3 text-neutral-400 p-3 bg-transparent hover:shadow-md transition-all duration-300"
                            data-tech-name={`${partner}`}
                        >
                            <span className="flex h-24 w-48 md:h-32 md:w-64 items-center justify-center p-2 text-lg">
                                <img src={partner.logo} alt="Partner Logo" className="text-xl max-w-full max-h-full" />
                            </span>
                            
                        </div>
                    </a>
                );

            })}
        </InfiniteScroll>
    );

}

export default PartnersLogoScroller;
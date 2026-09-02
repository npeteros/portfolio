import { useState } from "react";
import { Carousel } from "flowbite-react";
import { Award } from "lucide-react";
import certificates from "@/lib/certificates.json";
import { Certificate } from "@/types";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { flowbiteCarouselTheme } from "@/lib/flowbiteCarouselTheme";

function CertificateCarousel({ certificates }: { certificates: Certificate[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex cursor-pointer flex-col items-center md:gap-4 h-full">
      <Carousel
        theme={flowbiteCarouselTheme}
        className="gap-96"
        onSlideChange={(index) => setActiveIndex(index)}
      >
        {certificates.map((c, index) => (
          <a href={c.link} target="_blank" key={index}>
            <img src={c.img} alt={c.name} />
          </a>
        ))}
      </Carousel>
      <div className="flex w-full md:w-2/3 flex-col gap-2 text-center text-neutral-900 dark:text-white">
        <span className="text-lg font-bold">
          {certificates[activeIndex].name}
        </span>
        <span>{certificates[activeIndex].desc}</span>
      </div>
    </div>
  );
}

export function Certificates() {
  return (
    <section className="min-h-screen py-0 md:pb-24" id="certificates">
      <div className="max-w-6xl bg-white dark:bg-neutral-900 mx-auto px-8 rounded-lg">
        <SectionHeading icon={Award} label="Certificates" />
        <div className="h-[44rem] py-10" id="content-4">
          <CertificateCarousel certificates={certificates} />
        </div>
      </div>
    </section>
  );
}

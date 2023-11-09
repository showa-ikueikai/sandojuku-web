import { HeroProps } from "@/src/shared/type";
import Image from "next/image";

const Hero = (props: { data: HeroProps }) => {
  const { title, subtitle, image, mobileImage } = props.data;

  return (
    <section id="hero">
      <div className="relative mx-auto mt-4 max-w-5xl">
        <Image
          className="hidden w-full object-cover md:block md:h-[512px]"
          src={image.src}
          alt={image.alt}
        />
        <Image
          className="block w-full object-cover md:hidden"
          src={mobileImage.src}
          alt={mobileImage.alt}
        />
        <div className="absolute inset-0 rounded-md bg-gray-700 opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="mb-5 whitespace-pre-wrap text-center text-7xl font-bold text-white sm:text-8xl">
            {title}
          </h1>
          <h2 className="text-2xl text-white sm:text-3xl">{subtitle}</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;

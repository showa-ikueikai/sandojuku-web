import { Activity } from "@/src/shared/type";
import Image from "next/image";

const Hero2 = (props: { data: Activity }) => {
  const { title, titleFull, description, image, mobileImage } = props.data;

  return (
    <section id="heroTwo">
      <div className="mx-auto mt-4 max-w-4xl">
        <Image
          className="mx-auto hidden w-96 md:block"
          src={image.src}
          alt={image.alt}
        />
        <Image
          className="mx-auto block w-96 md:hidden"
          src={mobileImage.src}
          alt={mobileImage.alt}
        />
        <div className="my-5 flex flex-col items-center justify-center">
          <h1 className="my-5 whitespace-pre-wrap text-center text-3xl font-bold sm:text-4xl md:whitespace-nowrap">
            {titleFull ? titleFull : title}
          </h1>
          <p className="px-8">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero2;

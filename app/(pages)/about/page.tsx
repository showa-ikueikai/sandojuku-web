import { aboutData } from "@/src/shared/data";

const Page = () => {
  const { title, description } = aboutData;
  return (
    <div className="mx-auto mt-4 max-w-4xl">
      <div className="my-5 flex flex-col items-center justify-center">
        <h1 className="my-5 whitespace-pre-wrap text-center text-3xl font-bold sm:text-4xl md:whitespace-nowrap">
          {title}
        </h1>
        <p className="px-8">{description}</p>
      </div>
    </div>
  );
};

export default Page;

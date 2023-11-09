import Hero2 from "@/src/components/widgets/Hero2";
import { gaiaActivity } from "@/src/shared/data";

const Page = () => {
  return (
    <>
      <Hero2 data={gaiaActivity} />
    </>
  );
};

export default Page;

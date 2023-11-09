import Hero2 from "@/src/components/widgets/Hero2";
import { personalActivity } from "@/src/shared/data";

const Page = () => {
  return (
    <>
      <Hero2 data={personalActivity} />
    </>
  );
};

export default Page;

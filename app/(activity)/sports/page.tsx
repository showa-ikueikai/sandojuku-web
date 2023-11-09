import Hero2 from "@/src/components/widgets/Hero2";
import { sportsActivity } from "@/src/shared/data";

const Page = () => {
  return (
    <>
      <Hero2 data={sportsActivity} />
    </>
  );
};

export default Page;

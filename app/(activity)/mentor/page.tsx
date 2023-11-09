import Hero2 from "@/src/components/widgets/Hero2";
import { mentorActivity } from "@/src/shared/data";

const Page = () => {
  return (
    <>
      <Hero2 data={mentorActivity} />
    </>
  );
};

export default Page;

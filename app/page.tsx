import Activity from "@/src/components/widgets/Activity";
import Hero from "@/src/components/widgets/Hero";
import { heroData } from "@/src/shared/data";

export default function Page() {
  return (
    <>
      <Hero data={heroData} />
      <Activity />
    </>
  );
}

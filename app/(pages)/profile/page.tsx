import Profile from "@/src/components/widgets/Profile";
import { profileData } from "@/src/shared/data";

const Page = () => {
  return (
    <>
      <Profile {...profileData} />
    </>
  );
};

export default Page;

import Book from "@/src/components/widgets/Book";
import Profile from "@/src/components/widgets/Profile";
import { profileData } from "@/src/shared/data";

const Page = () => {
  return (
    <>
      <Profile {...profileData} />
      <Book />
    </>
  );
};

export default Page;

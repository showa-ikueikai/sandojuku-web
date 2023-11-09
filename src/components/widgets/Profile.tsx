import { ProfileProps } from "@/src/shared/type";
import Image from "next/image";

const Profile = (profileData: ProfileProps) => {
  const { image, name, description, positions } = profileData;

  return (
    <section id="profile">
      <div className="hero">
        <div className="hero-content flex-col lg:max-w-5xl lg:flex-row">
          <Image
            src={image.src}
            alt={image.alt}
            className="max-w-xs rounded-lg"
          />
          <div className="ml-2">
            <h1 className="text-4xl font-bold">{name}</h1>
            <p className="py-6">{description}</p>
            <ul className="ml-6 list-disc">
              {positions?.map((position, index) => (
                <li key={`item-activity-${index}`}>{position}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

import { ProfileProps } from "@/src/shared/type";
import Image from "next/image";

const Profile = (profileData: ProfileProps) => {
  const { image, name, descriptions, positions } = profileData;

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
            <article className="prose max-w-none py-6">
              {descriptions?.map((description, index) => (
                <p key={`description-${index}`} className="my-0">
                  {description}
                </p>
              ))}
            </article>
            <ul className="ml-6 list-disc">
              {positions?.map((position, index) => (
                <li key={`position-${index}`}>{position}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

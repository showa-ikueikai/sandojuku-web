import { activityData } from "@/src/shared/data";
import HeaderWidget from "@/src/components/common/HeaderWidget";
import Image from "next/image";
import Link from "next/link";

const Activity = () => {
  const { header, activities } = activityData;

  return (
    <section id="activity">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {header && (
          <HeaderWidget header={header} titleClassname="text-2xl sm:text-3xl" />
        )}
        <div className="flex items-stretch justify-center">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {activities.map(({ title, image, href }, index) => (
              <div key={`item-activity-${index}`} className="p-2">
                <Link href={href}>
                  <div className="card card-compact h-full w-80 flex-shrink-0 bg-base-100 shadow-xl">
                    <figure>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={320}
                        height={320}
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title justify-center">{title}</h2>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;

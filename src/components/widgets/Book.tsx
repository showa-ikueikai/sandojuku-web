import HeaderWidget from "@/src/components/common/HeaderWidget";
import { bookData } from "@/src/shared/data";
import Image from "next/image";

const Book = () => {
  const { header, books } = bookData;

  return (
    <section id="book" className="bg-gray-100 pt-4">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {header && (
          <HeaderWidget header={header} titleClassname="text-2xl sm:text-3xl" />
        )}
        <div className="mx-auto flex max-w-3xl flex-col items-stretch justify-center">
          {books?.map(({ title, description, image }, index) => (
            <div key={`item-book-${index}`} className="p-2">
              <div className="card flex-1 bg-base-100 shadow-xl lg:card-side lg:h-[280px]">
                <figure className="flex-shrink-0">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={160}
                    height={240}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title whitespace-pre-wrap">{title}</h2>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Book;

import Link from "next/link";
import HeaderWidget from "@/src/components/common/HeaderWidget";
import { informtionData } from "@/src/shared/data";

const Information = () => {
  const { header, callToAction } = informtionData;

  return (
    <section id="informaton" className="mt-4 bg-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {header && (
          <HeaderWidget header={header} titleClassname="text-2xl sm:text-3xl" />
        )}
        <div className="flex justify-center">
          <Link
            className="btn-primary inline-flex w-64 items-center justify-center sm:mb-0"
            href={callToAction.href}
          >
            {callToAction.text}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Information;

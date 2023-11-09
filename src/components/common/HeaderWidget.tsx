import { HeaderWidgetProps } from "@/src/shared/type";

const HeaderWidget = ({ header, titleClassname }: HeaderWidgetProps) => {
  const { title, subtitle, highlight } = header;

  return (
    <div className="mb-4">
      {(title ?? subtitle ?? highlight) && (
        <div className="mb-6 max-w-3xl text-center md:mx-auto md:mb-12">
          {highlight && (
            <p className="text-primary-600 text-base font-semibold uppercase tracking-wide">
              {highlight}
            </p>
          )}
          {title && (
            <h2
              className={`font-heading mb-4 font-bold tracking-tight text-gray-900 ${titleClassname}`}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mx-auto mt-4 max-w-3xl whitespace-pre-wrap text-xl text-gray-600 sm:whitespace-normal">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default HeaderWidget;

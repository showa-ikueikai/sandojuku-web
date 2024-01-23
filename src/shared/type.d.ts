import { StaticImageData } from "next/image";
import { MouseEventHandler, ReactElement } from "react";

interface Header {
  title?: string | ReactElement;
  subtitle?: string;
  highlight?: string;
}

interface HeaderWidgetProps {
  header: Header;
  titleClassname?: string;
}

interface Image {
  link?: string;
  src: StaticImageData;
  alt: string;
}

interface Activity {
  title: string;
  titleFull?: string;
  description?: string;
  image: Image;
  mobileImage: Image;
  href: string;
}

interface Book {
  title: string;
  description?: string;
  image: Image;
}

interface Link {
  label?: string;
  href?: string;
  ariaLabel?: string;
  icon?: ReactElement;
}

interface MenuLink extends Link {
  links?: Array<Link>;
}

interface CallToAction {
  text?: string;
  href: string;
  icon?: Icon;
  targetBlank?: boolean;
}

interface HeroProps {
  title: string;
  subtitle: string;
  image: Image;
  mobileImage: Image;
}

interface ActivityProps {
  header?: Header;
  activities: Array<Activity>;
}

interface ToggleMenuProps {
  handleToggleMenuOnClick: MouseEventHandler<HTMLButtonElement>;
  isToggleMenuOpen: boolean;
}

interface NavbarProps {
  links?: Array<MenuLink>;
}

interface ProfileProps {
  image: Image;
  name: string;
  description?: string;
  positions?: Array<string>;
}

interface BookProps {
  header?: Header;
  books?: Array<Book>;
}

interface AboutProps {
  title: string;
  description: string;
}

interface InformationProps {
  header: Header;
  callToAction: CallToAction;
}

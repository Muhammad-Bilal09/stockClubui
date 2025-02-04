import { StaticImageData } from "next/image";

export type NavLinkProps = {
  href: string;
  text: string;
  onClick?: () => void;
};

export type ButtonProps = {
  href?: string;
  text: string;
  className?: string;
  backgroundClass?: string;
  onClick?: () => void;
};

export type ReportCardProps = {
  backgroundImage: string;
  heading: string;
  description: string;
  imageSrc: StaticImageData | string;
  altText?: string;
  imageFirst?: boolean;
  className?: string;
};

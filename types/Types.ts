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

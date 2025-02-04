import Link from "next/link";
import { NavLinkProps } from "@/types/Types";

const NavbarLink: React.FC<NavLinkProps> = ({ href, text, onClick }) => {
  return (
    <li className="text-cyan font-bold cursor-pointer">
      <Link href={href} onClick={onClick}>
        {text}
      </Link>
    </li>
  );
};

export default NavbarLink;

import React from "react";
import Link from "next/link";
import { ButtonProps } from "@/types/Types";

const Button: React.FC<ButtonProps> = ({
  href = "/",
  text,
  backgroundClass = "",
  className,
}) => {
  return (
    <div className={`${backgroundClass} `}>
      <Link href={href}>{text}</Link>
    </div>
  );
};

export default Button;

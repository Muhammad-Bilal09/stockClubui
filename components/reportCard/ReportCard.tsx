import { ReportCardProps } from "@/types/Types";
import Image from "next/image";

export default function ReportCard({
  backgroundImage,
  heading,
  description,
  imageSrc,
  altText = "Image",
  imageFirst = false,
  className = "",
}: ReportCardProps) {
  return (
    <div
      className={`p-6 flex justify-center ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 w-full">
        {imageFirst && (
          <div className="flex justify-center items-center transition-transform duration-500 hover:scale-105">
            <Image
              src={imageSrc}
              alt={altText}
              className="rounded-xl lg:w-80"
            />
          </div>
        )}

        <div className="flex-1 flex justify-center items-center text-center md:text-left">
          <p className="text-lg text-cyan lg:w-96">
            <span className="text-blue-600 font-semibold block">{heading}</span>
            {description}
          </p>
        </div>

        {!imageFirst && (
          <div className="flex justify-center items-center transition-transform duration-500 hover:scale-105">
            <Image
              src={imageSrc}
              alt={altText}
              className="rounded-xl lg:w-80"
            />
          </div>
        )}
      </div>
    </div>
  );
}

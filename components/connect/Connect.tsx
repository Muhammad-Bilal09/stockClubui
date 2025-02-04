import React from "react";
import Image from "next/image";
import connectImage from "@/public/assets/images/connect.svg";

const Connect = () => {
  return (
    <div
      className="flex flex-col sm:flex-col md:flex-row bg-blue p-6 items-center justify-center space-y-6 md:space-y-0 md:space-x-6 w-full"
      style={{
        backgroundImage: "url('/assets/images/connectBackground.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full flex flex-col sm:flex-col md:flex-row items-center sm:items-start justify-between">
        <div className="text-cyan text-center sm:text-center md:text-left w-full md:w-1/2 p-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Track your <span className="text-blue-800">net worth</span>{" "}
            automatically
          </h2>
          <p className="text-sm sm:text-base md:text-lg">
            Spend less time managing your personal finances. No need to update
            spreadsheets manually anymore.
          </p>
        </div>

        <div className="relative w-full sm:w-64 md:w-1/2 h-48 sm:h-56 md:h-72 flex justify-center">
          <Image
            src={connectImage}
            alt="House holding"
            layout="intrinsic"
            width={400}
            height={300}
            className="rounded-xl max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Connect;

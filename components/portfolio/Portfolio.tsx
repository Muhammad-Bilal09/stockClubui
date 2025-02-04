import React from "react";
import Image from "next/image";
import barCode from "@/public/assets/images/barcode.svg";
import twoPerson from "@/public/assets/images/twoPerson.svg";

const NetWorthTracker = () => {
  return (
    <div>
      <div
        className="flex max-sm:flex-col justify-center items-center text-white p-4 sm:p-6 shadow-lg w-full"
        style={{
          backgroundImage: "url('assets/images/cyanBackground.svg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundColor: "#00abe1",
        }}
      >
        <div className="rounded-lg max-sm:w-64 max-sm:h-72 sm:w-96 sm:h-100 border-8 sm:border-20 border-white">
          <div
            className="p-4 rounded-lg h-full"
            style={{
              backgroundImage: "url('/Rectangle.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Image className="mt-5" alt="bar code" src={barCode} />
          </div>
        </div>

        <div className="flex items-center sm:ml-4 text-left max-sm:mt-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5 bg-white bg-opacity-90 rounded-lg max-sm:w-72 sm:w-[730px]">
            <div>
              <Image
                src={twoPerson}
                alt="Illustration of two people talking"
                className="max-sm:w-40 lg:h-[360px]"
              />
            </div>
            <div className="flex items-center justify-center">
              <p className="text-sm sm:text-lg font-bold text-cyan leading-5 sm:leading-6 text-center sm:text-left p-3">
                Sign up today and manage your portfolio like a pro with a
                personalized assistant and access to a trusted tech community of
                1,200 members who connected $150M+ of total assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetWorthTracker;

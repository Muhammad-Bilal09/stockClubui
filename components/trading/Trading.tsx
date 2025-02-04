"use client";

import Image from "next/image";
import tradingImage from "@/public/assets/images/trading.svg";

export default function InvestorReports() {
  return (
    <div
      className="bg-purple p-6 flex justify-center"
      style={{
        backgroundImage: "url('assets/images/investBackground.svg')",
      }}
    >
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 w-full">
        <div className="flex justify-center items-center transition-transform duration-500 hover:scale-105">
          <Image
            src={tradingImage}
            alt="Investor"
            className="rounded-xl lg:w-80"
          />
        </div>

        <div className="flex-1 flex justify-center items-center text-center md:text-left">
          <p className="text-lg text-gray-600">
            <span className="text-blue-600 font-semibold block">
              Receive personalized investor reports
            </span>
            and understand how your trading activities contribute to your
            overall wealth.
          </p>
        </div>
      </div>
    </div>
  );
}

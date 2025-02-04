import Image from "next/image";
import investorImage from "@/public/assets/images/invester.svg";

export default function InvestorReports() {
  return (
    <div
      className="bg-yellow p-6 flex justify-center"
      style={{
        backgroundImage: "url('assets/images/tradingBackground.svg')",
      }}
    >
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 w-full">
        <div className="flex-1 flex justify-center items-center text-center md:text-left">
          <p className="text-lg text-gray-600">
            <span className="text-blue-600 font-semibold block">
              Automate monitoring of your trading accounts
            </span>
            24/7. Control your risks and manage your portfolio like a PRO.
          </p>
        </div>

        <div className="flex justify-center items-center transition-transform duration-500 hover:scale-105">
          <Image
            src={investorImage}
            alt="Investor"
            className="rounded-xl lg:w-80"
          />
        </div>
      </div>
    </div>
  );
}

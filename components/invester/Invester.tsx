import React from "react";
import ReportCard from "../reportCard/ReportCard";
import investorImage from "@/public/assets/images/invester.svg";

function Invester() {
  return (
    <div>
      <ReportCard
        backgroundImage="assets/images/tradingBackground.svg"
        heading="Automate monitoring of your trading accounts "
        description="24/7. Control your risks and manage your portfolio like a PRO."
        imageSrc={investorImage}
        altText="Investor"
        imageFirst={false}
        imageclass="transition-transform duration-500 scale-110"
        className="custom-style-2 bg-yellow"
      />
    </div>
  );
}

export default Invester;

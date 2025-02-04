import React from "react";

import tradingImage from "@/public/assets/images/trading.svg";
import ReportCard from "../reportCard/ReportCard";
function Trading() {
  return (
    <div>
      <ReportCard
        backgroundImage="assets/images/investBackground.svg"
        heading="Receive personalized investor reports "
        description="  and understand how your trading activities contribute to your overall wealth."
        imageSrc={tradingImage}
        altText="Investor"
        imageFirst={true}
        className="custom-style-2 bg-purple"
      />
    </div>
  );
}

export default Trading;

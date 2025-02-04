import React from "react";
import ReportCard from "../reportCard/ReportCard";
import connectImage from "@/public/assets/images/connect.svg";
function Connect() {
  return (
    <div>
      <ReportCard
        backgroundImage="/assets/images/connectBackground.svg"
        heading="Connect your brokerage accounts"
        description="and get access to trading ideas, aggregated stats and discussions in your tech investing community right away."
        imageSrc={connectImage}
        altText="Investor"
        imageFirst={false}
        className="custom-style-2 bg-blue"
      />
    </div>
  );
}

export default Connect;

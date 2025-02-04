import React from "react";

import ReportCard from "@/components/reportCard/ReportCard";
import trackImage from "@/public/assets/images/PortfolioStructure.svg";

function Track() {
  return (
    <div>
      <ReportCard
        backgroundImage="/assets/images/trackBackground.svg"
        heading="Track your net worth automatically"
        description="and spend less time managing your personal finances. No need to update spreadsheets manually anymore."
        imageSrc={trackImage}
        altText="Investor"
        imageFirst={true}
        className="custom-style-1 bg-green"
      />
    </div>
  );
}

export default Track;

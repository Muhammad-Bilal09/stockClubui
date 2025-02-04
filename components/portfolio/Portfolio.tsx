import React from "react";
import Image from "next/image";
import barCode from "@/public/assets/images/barcode.svg";
import twoPerson from "@/public/assets/images/twoPerson.svg";

const NetWorthTracker = () => {
  return (
    <div className="max-md:hidden">
      <div
        className="flex justify-center items-center  text-white p-6 shadow-lg w-full"
        style={{
          backgroundImage: "url('/Background (Icons).png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundColor: "#00abe1",
        }}
      >
        <div
          style={{
            width: "384px",
            height: "400px",
            borderRadius: "34px",
            border: "20px solid",
          }}
          className="rounded-lg"
        >
          <div
            className="p-4 rounded-lg "
            style={{
              backgroundImage: "url('/Rectangle.jpg')",
              backgroundSize: "auto",
              backgroundPosition: "center",
            }}
          >
            <Image className="mt-5 w-full " src={barCode} alt="change" />
          </div>
        </div>

        <div className="flex items-center ml-2 text-left">
          {" "}
          <div
            style={{ width: "730px" }}
            className="ml-2 flex gap-5 bg-white bg-opacity-90 p-4 rounded-lg"
          >
            {" "}
            <div>
              <Image
                src={twoPerson}
                alt="Illustration of two people talking"
                style={{ width: "258px", position: "relative", right: "83px" }}
              />
            </div>
            <div className="flex items-center justify-center ">
              <p
                style={{ color: "rgba(18, 115, 152, 1)" }}
                className="text-lg font-bold w-80 leading-6"
              >
                <span style={{ color: "rgb(24 102 132)" }}>Sign up today</span>{" "}
                and manage your portfolio like a pro with a personalized
                assistant and access to a trusted tech community of 1,200
                members who connected $150M+ of total assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetWorthTracker;

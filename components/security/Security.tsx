import React from "react";
import LogoOne from "@/public/assets/images/LogoOne (1).svg";
import LogoTwo from "@/public/assets/images/LogoTwo.svg";
import LogoThree from "@/public/assets/images/LogoThree.svg";
import Image from "next/image";

const SecuritySection = () => {
  return (
    <div
      className="bg-skycyan py-12 px-6 text-white text-center"
      style={{
        backgroundImage: "url('assets/images/cyanBackground.svg')",
      }}
    >
      <h2 className="text-2xl font-bold mb-8">SECURITY IS OUR PRIORITY</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg">
          <Image src={LogoOne} alt="AWS Logo" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Cloud Infrastructure</h3>
          <p className="mt-4 text-sm">
            Our application is built on the same reliable, scalable
            infrastructure used to power AMAZON.com’s global web properties. We
            ensure that the data can only be accessed by authorized roles and
            services with audited access.
          </p>
        </div>
        <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg">
          <Image src={LogoTwo} alt="Plaid Logo" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Secure Broker Connection</h3>
          <p className="mt-4 text-sm">
            Brokerage Account Linking is done through our partner Plaid which
            handles credential validation (including multi-factor
            authentication) for each institution it supports and provides your
            account transaction history and holdings structure to StockClubs
            using secure access tokens.
          </p>
        </div>
        <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg">
          <Image
            src={LogoThree}
            alt="AES Encryption Icon"
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Data Encryption</h3>
          <p className="mt-4 text-sm">
            The combination of the Advanced Encryption Standard (AES-256) and
            Transport Layer Security (TLS) keeps your personal information safe.
            We encrypt data in transit between our services and at rest.
          </p>
        </div>
      </div>
      <button className="bg-yellow text-gray-900 font-semibold px-6 py-3 rounded-lg mt-8">
        Learn More About Security
      </button>
    </div>
  );
};

export default SecuritySection;

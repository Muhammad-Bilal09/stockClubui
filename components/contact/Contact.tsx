"use client";

import { useState } from "react";
import Image from "next/image";
import ContactImage from "@/public/assets/images/contactimage.svg";
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <div
        className="bg-darkcyan"
        style={{
          backgroundImage: "url('assets/images/contactBackground.svg')",
        }}
      >
        <div className="text-center p-7">
          <h1 className="text-white font-semibold text-2xl">CONTACT US</h1>
          <p className="text-white">
            We are here to answer any question you might have. We look forward
            to hearing from you!
          </p>
        </div>
        <div className="flex flex-col md:flex-row  items-center justify-center min-h-screen bg-blue-900 text-white p-6">
          <div className="md:flex flex-col items-center lg:w-1/2">
            <div className="w-96 h-96  bg-blue-700 rounded-lg flex items-center justify-center">
              <Image className="mt-5" alt="code" src={ContactImage} />
            </div>
          </div>
          <div className="bg-cyan p-8 max-sm:mt-9 rounded-lg shadow-lg w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-1/2 p-3 rounded-lg text-gray-800"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 p-3 rounded-lg text-gray-800"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded-lg text-gray-800"
                required
              />
              <textarea
                placeholder="Write a message"
                className="p-3 rounded-lg text-gray-800 h-24"
                required
              />
              <button className="bg-yellow text-gray-900 font-semibold px-6 py-3 rounded-lg mt-8">
                Submite
              </button>
            </form>
            {submitted && (
              <p className="text-center text-sm mt-4">Thanks for submitting!</p>
            )}
          </div>
        </div>
        <div className="text-center text-white py-2">
          <h1> &copy; ©2025 by Smartine Inc..</h1>
          <p>2010 El Camino Real #1349, Santa Clara, CA 95050</p>
        </div>
      </div>
    </>
  );
}

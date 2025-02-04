import React from "react";
import Button from "../button/Button";
import Image from "next/image";
import person from "@/public/assets/images/person.svg";
import Buttons from "@/public/assets/images/Buttons.svg";

function HeroSection() {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid md:grid-cols-2 gap-8 md:mx-[80px] items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-cyan">
              FAANG INVESTING COMMUNITY
            </h1>
            <p className="text-gray-400">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that revolutionized the way people bought, sold, and
              rented properties.
            </p>
          </div>
          <div>
            <div className="md:hidden">
              <Image
                src={Buttons}
                alt="Login Button"
                width={100}
                height={100}
                className="rounded-2xl shadow-lg p-8 w-full text-center"
              />
            </div>
            <div
              className="max-sm:hidden flex items-center justify-center
            p-4 rounded-2xl"
              style={{
                backgroundImage: "url('/assets/images/loginbackground.svg')",
                backgroundSize: "cover",
                backgroundPosition: "start",
              }}
            >
              <div className=" bg-white rounded-2xl shadow-lg p-8 w-full text-center">
                <h2 className="text-2xl font-bold text-cyan mb-6">
                  Welcome Back
                </h2>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border rounded-md outline-none focus:ring-2"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-3 border rounded-md outline-none focus:ring-2"
                    required
                  />
                  <div className="flex justify-end">
                    <a
                      href="#"
                      className="text-cyan-500 text-sm hover:underline"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <Button
                    backgroundClass="w-full bg-cyan py-3 rounded-md text-white font-bold"
                    text="Login"
                  />
                </form>
                <p className="mt-4 text-sm">
                  Don’t have an account?
                  <a
                    href="#"
                    className="text-cyan font-semibold hover:underline"
                  >
                    Create One
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image src={person} alt="person image" className="rounded-xl" />
      </div>
    </>
  );
}

export default HeroSection;

import React from "react";
import Header from "./Header";
import heroimg from "../assets/img/webp/heroimg.webp";
import refrece from "../assets/img/svg/fontisto_spinner-refresh.svg";
const Hero = () => {
  return (
    <>
      <section className="bg-black">
        <Header />
        <div className="container m-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start md:pt-6 md:py-20">
            <div className="lg:w-1/2">
              <p
                className="font-konexy text-white font-normal text-4xl sm:text-5xl xl:text-7xl relative after:content-[''] after:h-[90%] after:w-1.5 after:bg-[#6022EA] after:absolute after:left-[-11px] after:top-2 xl:after:top-3"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="2000"
              >
                WordPress <span className="block">Development</span> Agency
              </p>
              <p
                className="font-gilroyBold text-lg sm:text-2xl font-normal text-white sm:mt-5 my-3 sm:mb-7"
                data-aos="fade-up"
                data-aos-duration="1800"
                data-aos-delay="2000"
              >
                for Enterprise + Friendly Team
              </p>
              <p
                className="font-gilroyBold text-sm sm:text-base text-white opacity-70 lg:pe-20"
                data-aos="fade-up"
                data-aos-duration="2500"
                data-aos-delay="2000"
              >
                Vipe Studio is a WordPress Agency for development - a long-term
                partner for any WordPress service. Websites and,online shops
                development, maintenance and customization is what we do best.
              </p>
              <div
                className="flex gap-4 sm:gap-[34px] mt-7"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="2000"
              >
                <button className="font-gilroyNormal font-semibold text-white text-sm sm:text-lg bg-[#6022EA] shadow-[0px 4px 20px 0px rgba(96, 34, 234, 0.20)] px-6 py-2 rounded-full hover:bg-white hover:text-[#6022EA] transition-all duration-300 ease-linear">
                  Get Started
                </button>
                <button className="font-gilroyNormal font-normal text-sm sm:text-base text-white opacity-70 flex gap-2 sm:gap-3.5 items-center hover:opacity-100 transition-all duration-300 ease-linear">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M16 0C7.16429 0 0 7.16429 0 16C0 24.8357 7.16429 32 16 32C24.8357 32 32 24.8357 32 16C32 7.16429 24.8357 0 16 0ZM21.1464 16.2464L13.3464 21.9214C13.3037 21.9522 13.2533 21.9705 13.2008 21.9744C13.1482 21.9784 13.0957 21.9678 13.0488 21.9438C13.0019 21.9198 12.9626 21.8834 12.9351 21.8385C12.9075 21.7936 12.8929 21.7419 12.8929 21.6893V10.3464C12.8927 10.2937 12.9071 10.2419 12.9346 10.1968C12.962 10.1518 13.0014 10.1152 13.0484 10.0912C13.0954 10.0671 13.1481 10.0566 13.2007 10.0606C13.2533 10.0647 13.3037 10.0833 13.3464 10.1143L21.1464 15.7857C21.1833 15.8118 21.2133 15.8463 21.2341 15.8864C21.2548 15.9265 21.2657 15.9709 21.2657 16.0161C21.2657 16.0612 21.2548 16.1057 21.2341 16.1458C21.2133 16.1858 21.1833 16.2204 21.1464 16.2464Z"
                      fill="white"
                    />
                  </svg>
                  What is Vipe? (1min)
                </button>
              </div>
            </div>
            <div className="md:w-8/12 lg:w-1/2 relative min-[433px]: z-[1] mt-8 sm:after:content-[''] sm:after:w-44 sm:after:h-44 sm:after:bg-gradient-to-r from-[#6022EA] to-[#FA00FF] sm:after:absolute sm:after:top-[300px] sm:after:left-0 sm:after:blur-[100px] sm:after:rounded-full sm:after:z-[-1] sm:before:content-[''] sm:before:w-44 sm:before:h-44 sm:before:bg-gradient-to-l sm:before:absolute sm:before:top-0 sm:before:right-0 2xl:before:right-[-160px] sm:before:blur-[100px] sm:before:rounded-full sm:before:z-[-1] ">
              <img
                src={heroimg}
                alt="heroimg"
                className="2xl:absolute 2xl:right-[-140px]"
              />
            </div>
          </div>
        </div>
        <section
          className="bg-[#0D0D0D] mt-4 md:mt-32"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1500"
          data-aos-delay="2000"
        >
          <div className="md:py-16 py-12 container m-auto flex flex-col md:flex-row justify-between">
            <div className="md:w-2/5">
              <h5 className="font-konexy font-normal text-2xl sm:text-4xl text-white">
                Tell us more....
              </h5>
              <p className="font-gilroyNormal font-normal text-sm text-white mt-4">
                Lectus vitae est ultrices sed. Sit aliquam commodo hac donec
                augue in quis. Magna vel orci sem neque fringilla et lectus
                laoreet.
              </p>
            </div>
            <div className="md:w-1/2 lg:w-2/5 mt-4 md:mt-4">
              <div className="border border-solid border-[#3F3D46] bg-[#2A262F] px-4 py-2.5 sm:px-8 sm:py-5 rounded-full flex">
                <input
                  type="text"
                  placeholder="What do you need assistance with?"
                  className="bg-transparent w-full border-0 outline-0 font-gilroyNormal font-normal text-sm sm:text-base text-white opacity-70 placeholder:font-gilroyNormal placeholder:text-base sm:placeholder:text-base placeholder:text-white placeholder:opacity-70"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L16.514 16.506L21 21ZM19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z"
                    stroke="white"
                    stroke-width="2.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div className="flex justify-between mt-3">
                <div className="flex items-center">
                  <img src={refrece} alt="refrece" />
                  <p className="font-gilroyNormal font-normal text-sm sm:text-base text-white">
                    or send us an inquire?
                  </p>
                </div>
                <p className="font-gilroyNormal font-normal text-sm sm:text-base text-white">
                  Learn more about...
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Hero;

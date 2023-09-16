import React from "react";
import aglie from "../assets/img/webp/agile.webp";
const Angile = () => {
  return (
    <>
      <section className="py-12 lg:mb-10">
        <div className="lg:mb-5 container m-auto">
          <div className="flex flex-wrap items-center justify-center xl:justify-between">
            <div
              className="md:w-1/2 xl:w-2/5"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-center"
              data-aos-duration="1200"
            >
              <img src={aglie} alt="aglie" className="w-100" />
            </div>
            <div
              className="md:w-10/12 xl:w-7/12"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-center"
              data-aos-duration="1600"
              data-aos-delay="200"
            >
              <p className="font-konexy font-normal text-2xl sm:text-5xl fs_40 text-black mb-4 mt-6 lg:mt-0">
                <span className="text-[#6022EA]">Agile WordPress </span>
                Development Project management
              </p>
              <p className="font-gilroyNormal font-normal text-sm sm:text-base mb-4">
                Suspendisse consequat egestas arcu et et. Viverra quis euismod
                neque luctus bibendum. Fringilla in nibh fringilla vulputate in.
                Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum.
                Lacus tortor sollicitudin risus eget euismod in bibendum turpis.
              </p>
              <button className="bg-[#6022EA] py-[10px] px-6 rounded-[80px] font-semibold text-white text-sm sm:text-base border border-solid border-transparent hover:bg-white hover:text-[#6022EA] transition-all duration-300 ease-linear hover:border hover:border-solid hover:border-[#6022EA]">
                Explore
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Angile;

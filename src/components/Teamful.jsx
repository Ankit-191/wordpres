import React from "react";
import team_start from "../assets/img/webp/teamfull.webp";
const Teamful = () => {
  return (
    <>
      <section className="bg-[#f6f6f6] py-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center flex-col-reverse lg:flex-row">
            <div className="lg:w-1/2 w-full">
              <h2
                className="font-konexy font-normal md:text-5xl text-2xl text-black pt-5 lg:pt-0"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                Team Full of Stars
              </h2>
              <p
                className="text-base font-gilroyNormal font-normal text-black pt-3 sm:pb-8 pb-3 xl:w-9/12"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Suspendisse consequat egestas arcu et et. Viverra quis euismod
                neque luctus bibendum. Fringilla in nibh fringilla vulputate in.
                Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum.
                Lacus tortor sollicitudin risus eget euismod in bibendum turpis.
              </p>
              <button
                className="bg-[#6022EA] py-[10px] px-6 rounded-[80px] font-semibold text-white text-base border border-solid border-transparent hover:bg-white hover:text-[#6022EA] transition-all duration-300 ease-linear hover:border hover:border-solid hover:border-[#6022EA]"
                data-aos="fade-up"
                data-aos-duration="2500"
              >
                Explore
              </button>
            </div>
            <div className="lg:w-1/2 w-full sm:w-10/12 sm:px-3">
              <div className="xl:translate-y-[100px]">
                <img className="w-full" src={team_start} alt="team_members" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Teamful;

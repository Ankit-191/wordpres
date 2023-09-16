import React from "react";

const Integer = ({ integer }) => {
  return (
    <>
      <section className="lg:py-28 py-12 bg-[#FEFEFE]">
        <div className="container m-auto">
          <p
            className="font-konexy font-normal text-3xl md:text-5xl text-black mb-4 md:mb-14"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Integer et nisl non
          </p>
          <div className="flex flex-wrap justify-center">
            {integer.map((PPC) => {
              return (
                <div
                  xl={4}
                  lg={6}
                  key={PPC.id}
                  className="xl:w-4/12 sm:w-3/6 px-2 lg:px-4 mt-4"
                  data-aos="zoom-in-down"
                  data-aos-duration="1600"
                >
                  <div className="bg-white border border-solid border-[#E5E5E5] lg:p-9 p-4 rounded-2xl hover:shadow-[0_20px_60px_0_#E5E9F6] transition-all duration-300 ease-linear flex flex-col items-center h-full">
                    <img src={PPC.svg} alt="" />
                    <p className="font-inter font-semibold text-xl sm:text-2xl text-center mt-3 lg:mt-12">
                      {PPC.heading}
                    </p>
                    <p className="font-gilroyNormal font-normal text-sm sm:text-base text-center text-black opacity-70 my-3 lg:my-4 pt-1">
                      {PPC.para}
                    </p>
                    <a
                      href=""
                      className="font-gilroyMedium font-semibold text-sm sm:text-base text-[#6022EA]"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Integer;

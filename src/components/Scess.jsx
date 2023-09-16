import React from "react";
import success from "../assets/img/webp/success.webp";
import ppc from "../assets/img/webp/ppc.webp";
const Scess = () => {
  const vipeppc = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];
  return (
    <>
      <section className="overflow-hidden pb-44 lg:pb-56 mt-12 lg:mt-36">
        <div className="container mx-auto">
          <div className="lg:my-5 pb-4 flex flex-wrap items-center justify-center">
            <div
              className="sm:w-1/2 lg:w-2/6"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1500"
            >
              <img src={success} alt="" className="w-full lg:pe-6" />
            </div>
            <div className="w-full lg:w-8/12 mt-7 lg:mt-0">
              <p className="font-gilroyNormal font-normal text-base text-[#868687]">
                HAVE YOU SEEN OUR MASCOT?
              </p>
              <p className="font-konexy font-normal text-3xl sm:text-5xl text-black pb-2 lg:pb-3">
                Success Guides
              </p>
              <div className=" overflow-x-auto">
                <div className="mb-2 w-[600px] ">
                  <button className="font-gilroyNormal font-semibold text-base text-[#6022EA] px-4 py-2 rounded-full border border-solid border-[#6022EA] hover:bg-[#6022EA] hover:text-white mt-2 mt-sm-0 transition-all duration-300 ease-linear">
                    Category-1
                  </button>
                  <button className="font-gilroyNormal font-semibold text-base text-[#6022EA] px-4 py-2 rounded-full border border-solid border-[#6022EA] hover:bg-[#6022EA] hover:text-white ms-2 mt-2 mt-sm-0 transition-all duration-300 ease-linear">
                    Category-2
                  </button>
                  <button className="font-gilroyNormal font-semibold text-base text-[#6022EA] px-4 py-2 rounded-full border border-solid border-[#6022EA] hover:bg-[#6022EA] hover:text-white ms-2 mt-2 mt-sm-0 transition-all duration-300 ease-linear">
                    Category-3
                  </button>
                  <button className="font-gilroyNormal font-semibold text-base text-[#6022EA] px-4 py-2 rounded-full border border-solid border-[#6022EA] hover:bg-[#6022EA] hover:text-white ms-2 mt-2 mt-sm-0 transition-all duration-300 ease-linear">
                    Category-4
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap mt-4 justify-center">
                {vipeppc.map((PPC) => {
                  return (
                    <div
                      sm={6}
                      md={4}
                      key={PPC.id}
                      className="px-3 sm:w-1/2 md:w-4/12"
                      data-aos="flip-down"
                      data-aos-duration="2500"
                    >
                      <div className="border border-solid border-[#E3E3E3] rounded-2xl bg-white shadow-[12px_48px_60px_0_#e5e9f666] p-4 mt-3 ">
                        <img src={ppc} alt="vipe PCP" className="w-full" />
                        <p className="font-gilroyNormal font-semibold text-2xl text-black mt-3 mb-2">
                          Sit diam metus
                        </p>
                        <p className="font-gilroyNormal font-normal text-base text-black mb-2 opacity-70">
                          Arcu amet, consectetur vel pellentesque mattis ipsum
                          sed mattis sed.
                        </p>
                        <p className="font-gilroyNormal font-semibold text-base text-[#6022EA] cursor-pointer">
                          Read More....
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Scess;

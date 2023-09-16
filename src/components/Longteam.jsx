import React from "react";
import propy from "../assets/img/webp/propy.webp";
import ciela from "../assets/img/webp/ciela.webp";
import revuele from "../assets/img/webp/revuele.webp";
import spark from "../assets/img/webp/spark.webp";
import Slider from "react-slick";
const Longteam = () => {
  const WordPress = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="bg-[#F6F6F6] py-12">
        <div className="container m-auto">
          <p
            className="font-konexy font-normal text-2xl md:text-5xl text-black mb-3 sm:mb-5"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            Long Term <span className="md:block">WordPress Partner</span>
          </p>
          <p
            className="font-gilroyNormal font-normal text-base sm:text-base sm:mb-6 mb-3"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            Our motto is the long-term partnership – we will not only develop
            your perfect website, but
            <span className="md:block">
              will be behind you through the whole process. They already trusted
              us:
            </span>
          </p>
          <Slider {...WordPress} className="pt-2 overflow-hidden">
            <div>
              <img src={propy} alt="propy" width={179} />
            </div>
            <div>
              <img src={ciela} alt="ciela" width={162} />
            </div>
            <div>
              <img src={revuele} alt="revuele" width={191} />
            </div>
            <div>
              <img src={ciela} alt="ciela" width={162} />
            </div>
            <div>
              <img src={spark} alt="spark" width={170} />
            </div>
            <div>
              <img src={ciela} alt="ciela" width={162} />
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Longteam;

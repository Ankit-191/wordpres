import React from "react";
import Slider from "react-slick";
import news from "../assets/img/webp/news.webp";
import finance from "../assets/img/webp/finace.webp";
import life from "../assets/img/webp/life.webp";
import topics from "../assets/img/webp/topics.webp";
const Featured = () => {
  const Featured = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 500,
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
      <section className="lg:py-24 py-12 bg-[#F6F6F6]">
        <div className="container mx-auto">
          <p
            className="font-konexy font-normal text-black text-3xl md:text-5xl"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Featured on
          </p>
          <Slider {...Featured} className="md:pt-16 pt-4 overflow-hidden">
            <div>
              <img src={news} alt="yahoonews" width={171} />
            </div>
            <div>
              <img src={finance} alt="yahoofinance" width={171} />
            </div>
            <div>
              <img src={news} alt="yahoonews" width={171} />
            </div>
            <div>
              <img src={topics} alt="tranding topics" width={171} />
            </div>
            <div>
              <img src={life} alt="yahoolife" width={171} />
            </div>
            <div>
              <img src={topics} alt="tranding topics" width={171} />
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Featured;

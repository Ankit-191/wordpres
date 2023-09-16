import React from "react";
import footer_links from "../assets/img/svg/arrowright.svg";
import call_icon from "../assets/img/svg/phonecall.svg";
import message_icon from "../assets/img/svg/message.svg";
import home_icon from "../assets/img/svg/address.svg";
import github from "../assets/img/svg/github.svg";
import linkdin from "../assets/img/svg/linkdin.svg";
import twitter from "../assets/img/svg/twiter.svg";
import facebook from "../assets/img/svg/facebook.svg";
import instagram from "../assets/img/svg/instagram.svg";
import wikipedia from "../assets/img/svg/wordpress.svg";
import search from "../assets/img/svg/searchfooter.svg";
const Footer = () => {
  return (
    <>
      <section className="bg-black">
        <div className="container m-auto">
          <div className="bg-gradient-to-r from-[#5F21E9] to-[#FA00FF] lg:flex justify-between items-center sm:pt-6 sm:pe-12 sm:pb-10 sm:ps-10 p-4 rounded-2xl translate-y-[-140px]">
            <div>
              <p className="font-konexy font-normal text-3xl md:text-5xl text-white mb-4">
                Have you
              </p>
              <p className="font-gilroyNormal font-semibold text-xl md:text-2xl text-white">
                read our study about Speed and Performance in
                <span className="lg:block"> WordPres?</span>
              </p>
            </div>
            <button className="font-inter font-semibold text-base text-[#6022EA] hover:text-[#FA00FF] transition-all duration-300 ease-linear  bg-white px-12 py-4 rounded-full lg:mt-0 mt-4">
              Check It Out
            </button>
          </div>
        </div>
      </section>
      <section className="bg-black pb-12 mt-[-85px] md:mt-[-50px]">
        <div className="container m-auto">
          <div className="flex justify-end pb-6 md:pb-14">
            <div className="bg-white w-full md:w-6/12 lg:w-4/12 py-3 px-5 rounded-[80px] flex justify-between">
              <input
                className="bg-transparent font-gilroyNormal font-normal text-[#313131] opacity-70 text-base w-full outline-none placeholder:text-base placeholder:font-gilroyNormal placeholder:text-[#313131] placeholder:opacity-70"
                type="text"
                placeholder="Search here...."
              />
              <img src={search} alt="search_icon" />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div
              className="sm:w-6/12 w-full lg:w-3/12"
              data-aos="zoom-in-down"
              data-aos-duration="1200"
            >
              <h3 className="text-white text-base font-normal font-gilroyNormal pb-4">
                Services
              </h3>
              <ul>
                <li className="flex font-gilroyNormal pb-3 text-sm cursor-pointer hover:translate-x-1 transition-all duration-300 ease-linear font-normal text-white">
                  <img className="me-1" src={footer_links} alt="arrow" />
                  WordPress Development
                </li>
                <li className="flex font-gilroyNormal pb-3 text-sm cursor-pointer hover:translate-x-1 transition-all duration-300 ease-linear font-normal text-white">
                  <img className="me-1" src={footer_links} alt="arrow" />
                  WooCommerce Development
                </li>
                <li className="flex font-gilroyNormal pb-3 text-sm cursor-pointer hover:translate-x-1 transition-all duration-300 ease-linear font-normal text-white">
                  <img className="me-1" src={footer_links} alt="arrow" />
                  WordPress Maintenance
                </li>
                <li className="flex font-gilroyNormal pb-3 text-sm cursor-pointer hover:translate-x-1 transition-all duration-300 ease-linear font-normal text-white">
                  <img className="me-1" src={footer_links} alt="arrow" />
                  WSpeed Optimization
                </li>
                <li className="flex font-gilroyNormal pb-3 text-sm cursor-pointer hover:translate-x-1 transition-all duration-300 ease-linear font-normal text-white">
                  <img className="me-1" src={footer_links} alt="arrow" />
                  Dedicated WordPress Developer
                </li>
                <li className="flex font-gilroyNormal pb-3 text-sm cursor-pointer hover:translate-x-1 transition-all duration-300 ease-linear font-normal text-white">
                  <img className="me-1" src={footer_links} alt="arrow" />
                  WHeadless WordPress Development
                </li>
                <li className="flex font-gilroyNormal text-sm cursor-pointer hover:translate-x-1 transition-all duration-300 ease-linear font-normal text-white">
                  <img className="me-1" src={footer_links} alt="arrow" />
                  White Label Development
                </li>
              </ul>
            </div>
            <div
              className="sm:w-6/12 w-full lg:w-3/12 px-2 mt-6 sm:mt-0"
              data-aos="zoom-in-down"
              data-aos-duration="1900"
            >
              <h3 className="text-white text-base font-normal font-gilroyNormal pb-4">
                Services
              </h3>
              <ul>
                <li className="flex font-gilroyNormal pb-3 text-sm cursor-pointer hover:translate-x-1 transition-all duration-300 ease-linear font-normal text-white">
                  <img className="me-1" src={footer_links} alt="arrow" />
                  WordPress Hosting
                </li>
                <li className="flex font-gilroyNormal pb-3 text-sm cursor-pointer hover:translate-x-1 transition-all duration-300 ease-linear font-normal text-white">
                  <img className="me-1" src={footer_links} alt="arrow" />
                  PSD, XD, Figma to WordPress Conversion
                </li>
                <li className="flex font-gilroyNormal pb-3 text-sm cursor-pointer hover:translate-x-1 transition-all duration-300 ease-linear font-normal text-white">
                  <img className="me-1" src={footer_links} alt="arrow" />
                  Custom WordPress Theme
                </li>
                <li className="flex font-gilroyNormal pb-3 text-sm cursor-pointer hover:translate-x-1 transition-all duration-300 ease-linear font-normal text-white">
                  <img className="me-1" src={footer_links} alt="arrow" />
                  Custom WordPress Plugins
                </li>
                <li className="flex font-gilroyNormal pb-3 text-sm cursor-pointer hover:translate-x-1 transition-all duration-300 ease-linear font-normal text-white">
                  <img className="me-1" src={footer_links} alt="arrow" />
                  CMS to WordPress
                </li>
                <li className="flex font-gilroyNormal text-sm cursor-pointer hover:translate-x-1 transition-all duration-300 ease-linear font-normal text-white">
                  <img className="me-1" src={footer_links} alt="arrow" />
                  WordPress Malware Removal
                </li>
              </ul>
            </div>

            <div
              className="sm:w-6/12 w-11/12 lg:w-3/12 px-2 mt-6 lg:mt-0"
              data-aos="zoom-in-down"
              data-aos-duration="2400"
            >
              <h3 className="text-white text-base font-normal font-gilroyNormal pb-3">
                Latest Articles
              </h3>

              <ul>
                <li className="flex font-gilroyNormal pb-3 text-sm font-normal text-white">
                  7 WordPress Plugins to Create an Effective Newsletter
                  03.01.2022
                </li>
                <li className="flex font-gilroyNormal pb-3 text-sm font-normal text-white">
                  What’s the Perfect Blog Post Length for Your WordPress Site’s
                  SEO? 02.01.2022
                </li>
                <li className="flex font-gilroyNormal pb-3 text-sm font-normal text-white">
                  5 Reasons the Future of WordPress Is Headless 01.01.2022
                </li>
                <li className="flex font-gilroyNormal text-sm font-normal text-white">
                  Viptor Says: Vipe Studio’s WordPress Developers Wrap Up the
                  Amazingly Successful 2021 30.12.2021
                </li>
              </ul>
            </div>
            <div
              className="sm:w-6/12 w-full lg:w-3/12 px-2 mt-6 lg:mt-0"
              data-aos="zoom-in-down"
              data-aos-duration="3000"
            >
              <h3 className="text-white text-base font-normal font-gilroyNormal pb-3">
                Latest Articles
              </h3>
              <ul>
                <li className="flex font-gilroyNormal pb-3 text-sm font-normal text-white">
                  <img className="me-2" src={call_icon} alt="call_icon" />
                  EU: +359 988 993 128
                </li>
                <li className="flex font-gilroyNormal pb-3 text-sm font-normal text-white">
                  <img className="me-2" src={call_icon} alt="call_icon" />
                  US: +1 (1 888) 266-6917
                </li>
                <li className="flex font-gilroyNormal pb-3 text-sm font-normal text-white">
                  <img className="me-2" src={message_icon} alt="call_icon" />
                  office@vipestudio.com
                </li>
                <li className="flex font-gilroyNormal text-sm font-normal text-white">
                  <img className="me-2" src={home_icon} alt="call_icon" />
                  14 Srebarna, Sofia 1407, Bulgaria
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="!text-[#4c4c4c] my-6 lg:mb-8 lg:mt-16" />
        <div className="container m-auto">
          <div className="flex flex-wrap items-center sm:justify-between">
            <div className="lg:w-3/12 w-full sm:w-5/12">
              <p className="text-center sm:text-start font-gilroyNormal text-white text-sm font-normal">
                © Vipe Studio 2016-2022
              </p>
              <p className="text-center sm:text-start font-gilroyNormal text-white text-sm font-normal pt-2.5">
                Privacy | Careers |Media |Client Area
              </p>
            </div>
            <div className="lg:w-4/12 w-full sm:w-7/12">
              <div className="flex flex-wrap gap-4 justify-center sm:justify-end mt-6 sm:mt-0">
                <div>
                  <a href="https://github.com/" target="blank">
                    <img
                      src={github}
                      alt="github"
                      className="hover:translate-y-[-4px] transition-all duration-200 ease-linear"
                    />
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/login" target="blank">
                    <img
                      src={linkdin}
                      alt="linkdin"
                      className="hover:translate-y-[-4px] transition-all duration-200 ease-linear"
                    />
                  </a>
                </div>
                <div>
                  <a href="https://twitter.com/?lang=en" target="blank">
                    <img
                      src={twitter}
                      alt="twitter"
                      className="hover:translate-y-[-4px] transition-all duration-200 ease-linear"
                    />
                  </a>
                </div>
                <div>
                  <a href="https://www.facebook.com/" target="blank">
                    <img
                      src={facebook}
                      alt="facebook"
                      className="hover:translate-y-[-4px] transition-all duration-200 ease-linear"
                    />
                  </a>
                </div>
                <div>
                  <a href="https://www.instagram.com/" target="blank">
                    <img
                      src={instagram}
                      alt="instagram"
                      className="hover:translate-y-[-4px] transition-all duration-200 ease-linear"
                    />
                  </a>
                </div>
                <div>
                  <a href="https://wordpress.org/download/" target="blank">
                    <img
                      src={wikipedia}
                      alt="wikipedia"
                      className="hover:translate-y-[-4px] transition-all duration-200 ease-linear"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

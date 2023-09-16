import React from "react";
const Preloader = () => {
  setTimeout(() => {
    document.getElementById("none").classList.add("hidden");
    document.body.style.overflow = "unset";
  }, 2000);
  return (
    <>
      <div
        id="none"
        className="bg-black min-h-full w-full fixed z-50 top-0 start-0 flex items-center justify-center h-ful"
      >
        <div class="loader">
          <div class="loader-inner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;

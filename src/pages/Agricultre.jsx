import React from "react";
import Footer from "../Footer";

const Agricultre = () => {
  return (
    <div>
      <div className="h-full w-full mt-[4rem]">
        <img
          src="/current1.png"
          alt="current_product"
          className="h-full w-full object-contain"
        />
        <img
          src="/current2.png"
          alt="current_product"
          className="h-full w-full object-contain"
        />
        <img
          src="/current3.png"
          alt="current_product"
          className="h-full w-full object-contain"
        />
        <img
          src="/current4.png"
          alt="current_product"
          className="h-full w-full object-contain"
        />
        <img
          src="/current5.png"
          alt="current_product"
          className="h-full w-full object-contain"
        />
        <img
          src="/current6.png"
          alt="current_product"
          className="h-full w-full object-contain"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Agricultre;

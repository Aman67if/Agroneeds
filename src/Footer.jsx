import React from "react";
import Address from "./Address";
import Policies from "./Policies";
import Aboutcompany from "./Aboutcompany";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-green-700">
      <div className="min-h-[90vh] xl:min-h-[50vh] w-full p-6 border-gray-400 border-b-2 xl:flex ">
        <div className="address h-[45vh] w-full xl:mt-4">
          <Address />
        </div>
        <div className="policies h-[35vh] w-full mt-4">
          <Policies />
        </div>
        <div className="keyInfoAndAboutCompany h-[45vh] w-full mt-4">
          <Aboutcompany />
        </div>
      </div>
      <div className="min-h-20 w-full mt-4">
        <div>
          <div className="flex flex-col">
            <h4 className="text-white h-fit w-fit m-auto text-[0.95rem]">
              Copyright © 2022-2023 Agroneeds, Inc. .
            </h4>
            <Link href="">
              <h4 className="text-blue-900 h-fit w-fit m-auto border-blue-900 border-b-2 text-[0.95rem]">
                Privacy & Terms
              </h4>
            </Link>
          </div>
          <div className="h-fit w-full flex gap-6 items-center justify-center mt-4 pb-4">
            <img src="/facebook.svg" alt="logo" className="h-[2.5rem] w-auto" />
            <img src="/twitter.svg" alt="logo" className="h-[2rem] w-auto" />
            <img src="/linkedin.svg" alt="logo" className="h-[2.2rem] w-auto" />
            <img src="/youtube.svg" alt="logo" className="h-[2.4rem] w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

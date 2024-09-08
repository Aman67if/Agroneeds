import React from "react";
import BankDetails from "../BankDetails";
import Footer from "../Footer";

const Payment = () => {
  return (
    <>
      <div className="h-[70vh] w-[95%] mt-[5rem] m-auto pt-[1rem] bg-green-700/60 backdrop-blur-lg border border-white/20 shadow-lg rounded-lg">
        <h2 className="h-[4rem] w-[13rem] text-xl text-center font-semibold m-auto text-white">
          Agroneeds Co. Payment Policy
        </h2>
        <BankDetails />
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </>
  );
};

export default Payment;

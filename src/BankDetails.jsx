import React from "react";

const BankDetails = () => {
  return (
    <div>
      <div className="h-[50vh] w-[90vw] mt-4 m-auto bg-white/50 backdrop-blur-lg border-2 border-white/20 shadow-lg flex items-center justify-center rounded-2xl overflow-hidden">
        <div className="h-full w-[50%] border-black border-r-2 pt-2 flex flex-col gap-[50px] text-xl font-semibold text-center">
          <h4 className="">Account Holder Name : </h4>
          <h4 className="">Bank Name :</h4>
          <h4 className="">Bank Branch :</h4>
          <h4 className="">Account No. :</h4>
          <h4 className="">IFSC Code :</h4>
        </div>
        <div className="h-full w-[50%] pt-2 flex flex-col gap-[50px] text-xl font-semibold text-center">
          <h4 className="">Account Holder Name : </h4>
          <h4 className="">Bank Name :</h4>
          <h4 className="">Bank Branch :</h4>
          <h4 className="">Account No. :</h4>
          <h4 className="">IFSC Code :</h4>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;

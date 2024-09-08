import React from "react";

const Address = () => {
  return (
    <div>
      {/* Address of the office */}

      <h3 className="text-white font-semibold text-[1.2rem]">
        Registered Office:
      </h3>
      <h4 className="text-white w-[68%] text-[0.95rem]">
        khaprikala, Dongargaon, Dist - Rajnandgao (C.G.)
      </h4>
      <h4 className="text-white text-[0.95rem]">Pin No. 491441</h4>

      {/* Office Timings  */}

      <h4 className="text-white font-semibold text-[1.2rem] mt-4">
        Office Timing:
      </h4>
      <h4 className="text-white w-[78%] text-[0.95rem]">
        Monday To Saturday 10:00 AM To 6:00 PM
      </h4>

      {/* Contact Details  */}

      <h4 className="text-white w-[48%] text-[0.95rem]">
        Phone1: XXXXXXXXX Phone2: XXXX-XXXXX
      </h4>
      <h3 className="text-white font-semibold text-[1.2rem] mt-4">Email:</h3>
      <h4 className="text-white w-[70%] text-[0.95rem]">
        agroneedscg@zohomail.in
      </h4>
    </div>
  );
};

export default Address;

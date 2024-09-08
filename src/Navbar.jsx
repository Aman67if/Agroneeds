import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let openOrClosed = 0;
  const menuRef = useRef();
  const { contextSafe } = useGSAP();
  const menuOpenAndClose = contextSafe(() => {
    if (openOrClosed == 0) {
      openOrClosed = 1;
      document.querySelector(".menuImg").src = "/close.svg";
      document.querySelector(".mobileMenu").style.display = "block";
      gsap.to(menuRef.current, {
        height: "55vh",
        opacity: "1",
        duration: "0.3",
        ease: "circ.inOut",
      });
    } else {
      openOrClosed = 0;
      document.querySelector(".menuImg").src = "/menu.svg";
      document.querySelector(".mobileMenu").style.display = "hidden";
      gsap.to(menuRef.current, {
        height: "1vh",
        opacity: "0",
        duration: "0.4",
        ease: "circ.inOut",
      });
    }
  });

  return (
    <>
      <div className="h-16 w-full flex items-center justify-between px-3 xl:px-8 bg-green-700 fixed top-0 left-0 z-10">
        <div className="logo h-12 w-auto">
          <img
            src="/logo.png"
            alt="logo"
            className="h-[2.8rem] xl:h-[3.1rem] w-auto object-contain cursor-pointer"
          />
        </div>
        <div className="hidden xl:block">
          <div className="menuPage h-10 w-[40rem] bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg  flex items-center justify-center gap-[30px] rounded-3xl">
            <Link to="/">
              <h4 className="cursor-pointer font-medium text-white">HOME</h4>
            </Link>
            <Link to="/about">
              <h4 className="cursor-pointer font-medium text-white">ABOUT</h4>
            </Link>
            <div className="group">
              <h4 className="cursor-pointer font-medium text-white h-[2.5rem] grid place-content-center">
                PRODUCT
              </h4>
              <div className="h-[5rem] w-[10rem] rounded absolute bg-green-700 backdrop-blur-lg border border-white/20 shadow-xl top-[2.5rem] p-2 left-[13rem] hidden group-hover:block">
                <Link to="/agriculture">
                  <h4 className="text-white font-medium text-[0.9rem] cursor-pointer">
                    Agriculture
                  </h4>
                </Link>
                <Link to="/soilmanagement">
                  <h4 className="text-white font-medium text-[0.9rem] cursor-pointer">
                    Soil Managenment
                  </h4>
                </Link>
                <Link to="/upcoming">
                  <h4 className="text-white font-medium text-[0.9rem] cursor-pointer">
                    Upcoming Products
                  </h4>
                </Link>
              </div>
            </div>
            <Link to="/contact">
              <h4 className="cursor-pointer font-medium text-white">
                CONTACT US
              </h4>
            </Link>
            <Link to="login">
              <h4 className="cursor-pointer font-medium text-white">LOGIN</h4>
            </Link>
            <Link to="join">
              <h4 className="cursor-pointer font-medium text-white">JOIN US</h4>
            </Link>
          </div>
        </div>
        <div className="block xl:hidden relative">
          <div
            onClick={menuOpenAndClose}
            className="menuCircle bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg h-[3rem] w-[3rem] flex items-center justify-center rounded-full"
          >
            <img
              src="/menu.svg"
              alt="menu"
              className="menuImg h-[1.6rem] w-[2rem]"
            />
            <div className="mobileMenu hidden">
              <div
                ref={menuRef}
                className="h-[0vh] w-[100vw] opacity-0 bg-green-800/90 backdrop-blur-3xl border border-white/20 shadow-lg absolute top-[3.4rem] right-[-0.8rem] rounded-lg grid place-items-center overflow-hidden"
              >
                <Link
                  to="/"
                  className="cursor-pointer font-medium h-[2.5rem] w-[80%] grid place-content-center rounded-xl bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg text-white"
                >
                  HOME
                </Link>
                <Link
                  to="/about"
                  className="cursor-pointer font-medium h-[2.5rem] w-[80%] grid place-content-center rounded-xl bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg text-white"
                >
                  ABOUT
                </Link>
                <Link
                  to="/allproducts"
                  className="cursor-pointer font-medium h-[2.5rem] w-[80%] grid place-content-center rounded-xl bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg text-white"
                >
                  PRODUCT
                </Link>
                <Link
                  to="/contact"
                  className="cursor-pointer font-medium h-[2.5rem] w-[80%] grid place-content-center rounded-xl bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg text-white"
                >
                  CONTACT US
                </Link>
                <Link
                  to="/login"
                  className="cursor-pointer font-medium h-[2.5rem] w-[80%] grid place-content-center rounded-xl bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg text-white"
                >
                  LOGIN
                </Link>
                <Link
                  to="join"
                  className="cursor-pointer font-medium h-[2.5rem] w-[80%] grid place-content-center rounded-xl bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg text-white"
                >
                  JOIN US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

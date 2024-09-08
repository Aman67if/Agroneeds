import React from "react";
import { Link } from "react-router-dom";

const LogTemplate = ({greeting, accountType, account, heading, path, button, name, password, description, haveAccount}) => {
  return (
    <div className="h-[85.4vh] xl:h-[91.1vh] w-full flex items-center justify-center mt-[4rem] bg-green-500">
      <div className="h-[58vh] xl:h-[70vh] w-[90%] xl:w-[70%] bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl xl:flex xl:items-center justify-center">
        <div className="hidden xl:block xl:h-full xl:w-[50%]">
          <div className="h-full w-full flex items-center justify-center">
            <div className="h-[70%] w-[70%] bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl grid place-content-center gap-[40px]">
              <h3 className="h-[2rem] w-[10rem] m-auto mt-4 grid place-content-center text-2xl font-semibold text-green-950">
                {greeting}
              </h3>
              <p className="h-[2rem] w-[90%] m-auto mt-4 grid place-content-center text-[0.9rem] font-semibold text-center text-green-950">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                quae velit doloribus, sint excepturi culpa rem laboriosam
                maiores ea doloremque, labore temporibus ipsam minima?
              </p>
              <h4 className={`${haveAccount} h-[2rem] w-[90%] m-auto mt-4 grid place-content-center text-[0.9rem] font-semibold text-center text-black`}>
                {accountType} Have An Account 
                <Link
                  to={`/${path}`}
                  className="text-blue-600 border-blue-600 border-b-2 h-[1.4rem] w-[3rem] m-auto"
                >
                  {account}
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="h-full w-full xl:w-[50%]">
          <h4 className="h-[2rem] w-[12rem] m-auto mt-[2rem] xl:mt-[6rem] grid place-content-center text-2xl font-semibold text-green-900">
            {heading}
          </h4>
          <div className="h-[75%] xl:h-[70%] w-full flex flex-col items-center justify-center gap-[30px] ">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="NAME"
              className={`${name} h-[2.7rem] w-[80%] pl-4 text-[0.8rem] rounded-lg bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg focus:outline-none focus:border-transparent`}
            />
            <input
              type="email"
              name="User"
              id="User"
              placeholder="EMAIL"
              className="h-[2.7rem] w-[80%] pl-4 text-[0.8rem] rounded-lg bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg focus:outline-none focus:border-transparent"
            />
            <input
              type="password"
              name="Pass"
              id="Pass"
              placeholder="PASSWORD"
              className={`${password} h-[2.7rem] w-[80%] pl-4 text-[0.8rem] rounded-lg bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg focus:outline-none focus:border-transparent`}
            />
            <textarea
              type="text"
              name="description"
              id="description"
              placeholder="BRIEFLY DESCRIBE YOUR CONCERN........"
              className={`${description} h-[6rem] w-[80%] pl-4 pt-2 text-[0.8rem] rounded-lg bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg focus:outline-none focus:border-transparent`}
            />
            <button className="h-[2.7rem] w-[10rem] bg-green-800/60 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl text-lg text-white font-semibold">
              {button}
            </button>
          </div>
          <h4 className={`${haveAccount} xl:hidden h-[2rem] w-[90%] m-auto grid place-content-center text-[0.9rem] font-semibold text-center text-black`}>
            {accountType} Have An Account
            <Link
              to={`/${path}`}
              className="text-blue-600 border-blue-600 border-b-2 h-[1.4rem] w-[4rem] m-auto"
            >
              {account}
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default LogTemplate;

import React from "react";
import LogTemplate from "../LogTemplate";

const Login = () => {
  return (
    <LogTemplate greeting={"Welcome Back"} accountType={"Don't"} account={"Join Us"} heading={"LOGIN"} path={'join'} button={'Login'} name={'hidden'} password={""} description={"hidden"} haveAccount={''}/>
  );
};

export default Login;

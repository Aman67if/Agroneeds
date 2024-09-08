import React from 'react'
import LogTemplate from '../LogTemplate'

const join = () => {
  return (
    <LogTemplate greeting={"Welcome"} accountType={"Already"} account={"Log in"} heading={"JOIN US"} path={"login"} button={'Join'} name={""} password={""} description={"hidden"} haveAccount={''}/>
  )
}

export default join
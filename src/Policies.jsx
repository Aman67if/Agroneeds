import React from 'react'
import { Link } from 'react-router-dom'

const Policies = () => {
  return (
    <div>
        <h2 className='font-extrabold text-2xl text-white pb-4'>POLICIES</h2>
        <div className='leading-7'>
        <Link to="" className='text-white text-[0.95rem]'><h4>Website Terms And Conditions</h4></Link>
        <Link to="" className='text-white text-[0.95rem]'><h4>Privacy Policy</h4></Link>
        <Link to="/payment" className='text-white text-[0.95rem]'><h4>Mode Of Payment</h4></Link>
        <Link to="" className='text-white text-[0.95rem]'><h4>Cancellation, Return, Exchange, Refund Policy</h4></Link>
        <Link to="" className='text-white text-[0.95rem]'><h4>Consumer Grievance Redressal Policy</h4></Link>
        <Link to="" className='text-white text-[0.95rem]'><h4>Associate Terms And Conditions</h4></Link>
        <Link to="" className='text-white text-[0.95rem]'><h4>Delivery And Shipment Policy</h4></Link>
        </div>
    </div>
  )
}

export default Policies
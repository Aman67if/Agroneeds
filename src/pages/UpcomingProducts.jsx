import React from 'react'
import Footer from '../Footer'

const UpcomingProducts = () => {
  return (
    <div>
      <div className="h-full w-full mt-[4rem]">
        <img
          src="/upcoming1.png"
          alt="upcoming"
          className="h-full w-full object-contain"
        />
        <img
          src="/upcoming2.png"
          alt="upcoming"
          className="h-full w-full object-contain"
        />
      </div>
      <Footer />
    </div>
  )
}

export default UpcomingProducts
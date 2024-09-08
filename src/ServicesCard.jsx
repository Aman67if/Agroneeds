import React from 'react'

const ServicesCard = ({title,description,description2}) => {
  return (
    <div className='min-h-[20rem] w-[95%] xl:w-[32%] mt-4 m-auto flex flex-col items-center text-center px-6 pb-4 overflow-hidden rounded-lg bg-green-900/40 backdrop-blur-lg border border-white/20 shadow-lg'>
        <h4 className='text-white font-extrabold text-2xl mt-4'>{title}</h4>
        <p className='text-white mt-6 text-[1.1rem]'>{description}</p>
        <p className='text-white mt-6 text-[1.1rem]'>{description2}</p>
    </div>
  )
}

export default ServicesCard
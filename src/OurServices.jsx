import React from 'react'
import ServicesCard from './ServicesCard'

const OurServices = () => {
  return (
    <div className='min-h-full w-full'>
        <h4 className='h-fit w-fit font-medium text-green-600 text-3xl xl:text-5xl xl:mt-[4rem] m-auto border-green-600 border-b-4'>OUR SERVICES</h4>
        <div className='min-h-[80vh] w-[95%] mt-4 mb-[8rem] xl:mt-14 m-auto pb-4 bg-green-700/30 backdrop-blur-lg border border-white/20 shadow-lg rounded-lg overflow-hidden xl:flex xl:flex-wrap'>
            <ServicesCard title={"Brand Patnership"} description={'Franchise holders will operate under the "Agroneeds" brand, benefiting from our established reputation and commitment to quality in the organic fertilizer industry.'} description2={"The franchisee will have the right to use the Agroneeds name, logo, and branding materials in all marketing and business operations."}/>
            <ServicesCard title={"Product Supply"} description={"Agroneeds will provide a consistent supply of premium organic fertilizers at Wholesale cost to our franchise partners."} description2={"The range of products available includes compost, vermicompost, bio-fertilizers, and specialized blends tailored for various crops."}/>
            <ServicesCard title={"Office Setup"} description={'Franchise holders will have the opportunity to open an "Agroneeds" office in their region, which will serve as the local hub for sales, customer service, and distribution.'} description2={"Agroneeds will offer support in setting up the office, including branding, layout design, and initial marketing strategies."}/>
            <ServicesCard title={"Training and Support"} description={"Agroneeds provides comprehensive training programs for franchise holders, covering product knowledge, sales techniques, customer service, and business management"} description2={"Ongoing support will be available, including marketing assistance, technical advice, and regular updates on new products and industry trends."}/>
            <ServicesCard title={"Revenue Model"} description={"Franchisees will generate revenue by selling Agroneeds products at retail prices to local farmers, gardeners, and agricultural businesses."} description2={"Additional revenue streams may include offering soil testing services, consulting on organic farming practices, and selling complementary products."}/>
            <ServicesCard title={"Marketing and Promotion"} description={"Agroneeds will support franchisees with national and regional marketing campaigns to raise brand awareness and drive customer traffic."} description2={"Franchise holders are encouraged to engage in local marketing activities, such as participating in agricultural fairs, conducting workshops, and building relationships with local farmers."}/>
        </div>
    </div>
  )
}

export default OurServices

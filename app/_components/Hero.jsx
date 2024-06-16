import React from 'react'
import heroImage from "../../assets/hero.png"
import Image from 'next/image'

const Hero = () => {
  return (
  //   <section id="hero">
  //   {/* <!-- hero container --> */}
  //   <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
  //     {/* <!-- content container --> */}
  //     <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
  //       <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">Get Your Inspection</h1>
  //       <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">Build your brand's recognition and get detailed insights on how your
  //         links are performing.</p>
  //         <div className="mx-auto lg:mx-0">
  //           <a href="#" className="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70">Get Started</a>
  //         </div>
  //     </div>
  //     {/* <!-- image --> */}
  //     <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
  //       <Image src={heroImage} alt="hero"/>
  //     </div>
  //   </div>
  // </section>
  <section id="hero" className="bg-curve-light-mode bg-no-repeat bg-contain bg-bottom">
      {/* <!-- hero container --> */}
      <div className="container mx-auto px-6 text-center md:pt-5 pb-52">
        <Image src={heroImage} alt="hero" className="mx-auto"/>
        <h1 className="max-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal md:text-4xl">
          Get your inspection today
        </h1>
        <p className="max-w-sm mx-auto mb-10 text-sm md:max-w-xl md:text-lg">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="p-3 rounded-full w-52 bg-primary text-white hover:scale-95">Get Started</button>
      </div>
    </section>
  )
}

export default Hero

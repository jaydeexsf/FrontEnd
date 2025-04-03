import React, { useContext, useEffect, useState } from 'react'
import CV from '../../assets/resources/JMCV.pdf'
// import { ModeContext } from '../../components/ModeContext'
// import { set } from 'mongoose';

export const Intro = () => {

  // const { portfolioData } = useContext(ModeContext);

  // const [introData, setintroData] = useState(portfolioData.intro)
  
  // useEffect(()=> {
  //     if(portfolioData) {
  //         setintroData(portfolioData.intro)
  //     }
  // }, [portfolioData])
  // console.log(introData)
  
  return (
    <div className='flex flex-col gap-8 md:gap-10 w-full  sm:min-h-[420px] max-h-[450px] md:h-[70vh] py-8'>
        <div className="text-sm">Hi, my name is </div>
        <div className="text-secondary-secondary-1 font-semibold text-3xl md:text-5xl ">
          Johannes Moloantoa
        </div>
        <div className='md:text-5xl font-bold text-3xl'>
        I Build Stuff For The Web
        </div>
        <div className="md:text-sm text-[12px] text-tertiary-tertiary-2 w-full md:w-[50vw]">
        I'm a dedicated full-stack developer from South Africa with over <strong className='text-secondary-secondary-3'>3 years</strong> of expertise in building modern web applications. I excel in <strong className='text-secondary-secondary-3'>ReactJS</strong> and <strong>Tailwind CSS</strong>, with practical experience in <strong className='text-secondary-secondary-3'>NodeJS</strong>, ExpressJS, and MongoDB. Let's team up to create something remarkable.
        </div>
        <div>
           <a href={CV} download> <button  className='text-secondary-secondary-2 text-[12px] md:text-sm hover:bg-secondary-secondary-2 hover:text-primary-dark-bg-1 transition-all duration-300 hover:cursor-pointer border border-secondary-secondary-2 py-[6px] px-4  md:py-[8px] md:px-6'>Dowload CV</button></a>
        </div>
    </div>
  )
}


// I'm a full stack developer. Currently developing Websites with the MERN Stack. I enjoy working on both the client and server side. Let's build something amazing together!
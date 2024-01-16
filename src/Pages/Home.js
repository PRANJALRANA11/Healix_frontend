import React from 'react'
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";
import { motion } from "framer-motion";
import {TypeAnimation} from 'react-type-animation';
import Slider from '../Components/Slider';
import Services from '../Components/Services';

export default function Home() {
    const { login, register } = useKindeAuth();
  return (
    <div>
        <div className="flex">
      <div className="w-[60%] h-screen bg-[#4f4faf] text-white">
        <h1 className="pl-20 text-4xl mt-10 font-semibold font-poppins">Healix
       
        </h1>
        {/* Add Tailwind CSS styles to your content */}
        <motion.h1 className="pl-20 pt-60 text-1xl font-poppins"
         animate={{ y: 20, opacity: 1 }}
         initial={{ y: -40, opacity: 0 }}
         transition={{ repeat: Infinity, type: "tween", duration: 3, repeatDelay:8,  ease: "easeInOut", }}>
          <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Empowering mental well-being through an AI-based therapy system for Depression',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Empowering mental well-being through an AI-based therapy system for Anxiety',
        1000,
        'Empowering mental well-being through an AI-based therapy system for Support',
        1000,
        'Empowering mental well-being through an AI-based therapy system for Stress',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
        
        </motion.h1>
        <Slider/>
       
      </div>
      <div className="w-[40%] fixed right-0 h-screen bg-black">
        <h1 className='text-white text-5xl font-bold mt-52 ml-44'>Get Started</h1>
        <button className='bg-[#3c46ff] w-60 ml-16 mt-20 mr-10 h-12 rounded-full text-white hover:bg-[#4950d4] ' onClick={register} type="button">Register</button>
        <button className='bg-[#3c46ff] w-60 h-12 mt-20 rounded-full text-white hover:bg-[#4950d4] ' onClick={login} type="button">Log In</button>
        <div>
          <img src='Healix.png' className='w-40 h-40 ml-60 mt-20'  />
        </div>
      </div>
    </div>
    <Services/>
    </div>
  )
}

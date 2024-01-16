import React from 'react'
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Slider() {
  return (
    <>
       <div className='fixed left-[26rem] top-[35rem]'>
       <Link
              activeClass="active"
              to="Section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
            <motion.i  animate={{ y: 20 }} transition={{ repeat: Infinity,duration:1.5 }} class="fa-solid fa-chevron-down hover:cursor-pointer " style={{"color": "#ffffff","fontSize":"3rem"}}></motion.i>
            </Link>
        </div>
    </>
  )
}

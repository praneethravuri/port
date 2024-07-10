"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { DiPython, DiMongodb } from "react-icons/di";
import { FaCuttlefish, FaDocker, FaReact, FaNodeJs, FaGit, FaJs, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiExpress, SiFlask, SiTailwindcss } from "react-icons/si";

const slides = [
    { icon: <DiPython /> },
    { icon: <FaCuttlefish /> },
    { icon: <FaJs /> },
    { icon: <SiTypescript /> },
    { icon: <FaDatabase /> },
    { icon: <DiMongodb /> },
    { icon: <FaGit /> },
    { icon: <FaDocker /> },
    { icon: <SiNextdotjs /> },
    { icon: <SiExpress /> },
    { icon: <FaNodeJs /> },
    { icon: <SiFlask /> },
    { icon: <SiTailwindcss /> },
    { icon: <FaReact /> },
];

const TextSlider = () => {
    const duplicatedSlides = [...slides, ...slides];
    return (
        <div className="relative w-full overflow-hidden p-4 mx-auto hidden sm:block border-b-2 border-white bg-text-primary" style={{ width: "100%" }}>
            <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r  before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l  after:to-transparent after:filter after:blur-3"></div>
            <motion.div
                className="flex"
                animate={{
                    x: ['0%', '-100%'],
                    transition: {
                        ease: 'linear',
                        duration: 15,
                        repeat: Infinity,
                    }
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${100 / slides.length}%` }}>
                        <div className="flex items-center justify-center h-full">
                            {React.cloneElement(slide.icon, { 
                                className: "text-3xl sm:mr-5 sm:text-xl md:text-xl lg:text-xl text-black" 
                            })}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default TextSlider;
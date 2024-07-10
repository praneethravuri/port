import React from 'react';
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import Link from 'next/link';

const SocialLinks = () => {
    return (
        <div className="flex flex-col items-center h-full justify-center">
            <div className="flex flex-col justify-center sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0 h-full my-auto border-b-2 border-white w-full">
                <Link href="https://github.com/praneethravuri" target='_blank' className='transition duration-300 ease-in-out hover:text-text-primary flex items-center justify-center'>
                    <BsGithub className="text-4xl" />
                </Link>
                <Link href="https://www.linkedin.com/in/prav25" target='_blank' className='transition duration-300 ease-in-out hover:text-text-primary flex items-center justify-center'>
                    <GrLinkedin className="text-4xl" />
                </Link>
            </div>
            <div className="flex items-center justify-center h-full w-full">
                <Link 
                    href="https://drive.google.com/file/d/1f2JMA1AWkstHzQg94QZNgl9sE4fgB9VH/view?usp=sharing" 
                    target='_blank' 
                    className='font-bold sm:text-4xl text-2xl transition duration-300 ease-in-out hover:text-text-primary sm:transform sm:rotate-0 transform -rotate-90 flex items-center justify-center'
                >
                    Résumé
                </Link>
            </div>
        </div>
    );
}

export default SocialLinks;

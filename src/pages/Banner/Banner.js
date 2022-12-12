import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from "typewriter-effect";
import { FaDownload } from "react-icons/fa";
import pic from '../../assets/pic (1).png';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Banner = () => {
    return (
        <div className='container mx-auto px-3'>
            {/* Banner section */}
            <section className="container flex flex-col-reverse mx-auto md:flex-row lg:flex-row justify-between items-center ">
                <div className="w-[60%]">
                    <p className='text text-4xl font-bold text-sky-700'>Hi, I'm</p>
                    <h1 className="text-5xl font-bold text-slate-700">
                        <Typewriter
                            cursor
                            cursorColor="red"
                            options={{
                                strings: [
                                    '<span><span style="color: #4c00b0 ">Bijoy Chandro Das</span></span>',
                                    '<span><span style="color: #4c00b0 ">Software Developer</span></span>',
                                    '<span><span style="color: #4c00b0 ">MERN Stack Developer</span></span>',

                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <p className="text-slate-700 my-5 text-justify">
                        I am a Passionate and Results-oriented Software Engineer .I pursued a Bachelor's degree in Computer Science and Engineering from Stamford University Bangladesh. I have working with rest API , Node JS, Express JS JavaScript and React JS . I am constantly striving to learn new technologies and look to ways to better myself in this rapidly changing industry.
                    </p>
                    <p className='flex items-center my-3 p-3 '>
                        <a className='mr-5 text-3xl text-blue-700' href='https://github.com/Iambijoy656'>
                            <FaGithub />
                        </a>
                        <a class='text-3xl text-blue-700' href='https://github.com/Iambijoy656'>
                            <FaLinkedin />
                        </a>
                    </p>
                    <a to="Bijoy_Chandro_Das_Resume.pdf" href='https://drive.google.com/uc?export=download&id=1jRw86er37HkF7bDZP0-Wy10RC-uV0J6r' download>
                        <button className=" border-2 border-gray-200 px-5 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-red-600 duration-500 flex items-center gap-1">
                            <FaDownload /> Download CV
                        </button>
                    </a>
                </div>
                <div className="w-full md:w-[40%]  mt-2 mb-5 md:mt-8 ">
                    <img className=' mx-auto rounded-none  md:rounded-full md:w-72 md:h-72 bg-gray-100' src={pic} alt="" />
                </div>
            </section>

        </div>
    );
};

export default Banner;
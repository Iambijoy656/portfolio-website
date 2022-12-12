import React from "react";
import { FaReact } from "react-icons/fa";

const Services = () => {
    return (
        <div data-aos="zoom-in-down"
            data-aos-duration="1000" className="pt-40 max-w-screen-xl mx-auto px-5 md:px-0 text-center my-10">
            <p className="font-bold text-4xl text-sky-600">What I Do For My Client's</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
                <div className="  bg-white  rounded-md shadow-xl">
                    <div className=" text-center p-10 flex flex-col items-center">
                        <div>
                            <FaReact className="text-8xl text-blue-500"></FaReact>
                        </div>
                        <h2 className="text-2xl font-bold mt-6">React.js Development</h2>
                        <p className="mt-5">
                            The most populer and most wanted JavaScript library, that allows
                            you to create dynamic user interfaces that are both cost-effective
                            and attractive.
                        </p>
                    </div>
                </div>
                <div className=" bg-white  rounded-md shadow-xl">
                    <div className=" text-center p-10 flex flex-col items-center">
                        <div>
                            <FaReact className="text-8xl text-blue-500"></FaReact>
                        </div>
                        <h2 className="text-2xl font-bold mt-6">Front-end Development</h2>
                        <p className="mt-5">
                            By using cutting-edge frontend technologies and React.js as a
                            foundation, i can deliver scalable and easy to maintain SPA(Single
                            Page Applications) projects.
                        </p>
                    </div>
                </div>
                <div className="  bg-white  rounded-md shadow-xl">
                    <div className=" text-center p-10 flex flex-col items-center">
                        <div>
                            <FaReact className="text-8xl text-blue-500"></FaReact>
                        </div>
                        <h2 className="text-2xl font-bold mt-6">MERN Stake Development</h2>
                        <p className="mt-5">
                            The four technologies MongoDB, Express, React and Node together in
                            one stack make it an ideal option for developing robust web
                            applications for businesses big and small.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;

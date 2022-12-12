import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="mt-20 bg-gray-100">
            <footer className="footer footer-center p-10  text-base-content rounded ">
                <div>
                    <h1 className="text-3xl font-bold ">Bijoy Chandro Das</h1>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com/KBWorigin/">
                            <FaFacebook className="text-3xl text-gray-500 hover:text-white"></FaFacebook>
                        </a>

                        <a href="https://www.linkedin.com/in/khaled-bin-wahid-446820b5/">
                            <FaLinkedin className="text-3xl text-gray-500 hover:text-white"></FaLinkedin>
                        </a>

                        <a href="https://github.com/risaadodx">
                            <FaGithub className="text-3xl text-gray-500 hover:text-white"></FaGithub>
                        </a>
                    </div>
                </div>
                <div>
                    <p className="">
                        Copyright © 2022 - All right reserved by Bijoy Chandro Das.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

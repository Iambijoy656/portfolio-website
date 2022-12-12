import React from 'react';
import JotformEmbed from "react-jotform-embed";

const Contact = () => {
    return (
        <section
            data-aos="zoom-in-down"
            data-aos-duration="1000">
            <h1 className='text-center text-4xl text-sky-600 font-bold'>Contact</h1>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  text-gray-800">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                    </div>
                    <img src="https://khaledbinwahid.com/static/media/contact.a34ac61d2f966e4b0f1e5200e18f9349.svg" alt="" className="p-6 " />
                </div>
                <JotformEmbed src="https://form.jotform.com/223442578320453" />
            </div>
        </section>
    );
};

export default Contact;
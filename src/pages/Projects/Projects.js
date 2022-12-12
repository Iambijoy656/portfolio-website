import React from 'react';
import { FaReact } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import image1 from "../../assets/projects-pic/image1.png";
import image2 from "../../assets/projects-pic/image2.png";
import image3 from "../../assets/projects-pic/image3.png";


const Projects = () => {
    return (
        <div className=' my-48'>
            <h2 className='text-4xl text-sky-500 text-center font-bold mb-10'>Project</h2>


            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Nov 2022 - Nov 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaReact />}
                >
                    <div class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                        <img class="object-cover w-full h-64" src={image1} alt="Article" />

                        <div class="p-6">
                            <div>
                                <span class="text-base  font-semibold text-blue-600 uppercase dark:text-blue-400">Books Cart</span>
                                <Link href="#" class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">Used Books Buy/Sell Service</Link>


                                <button className="btn btn-sm hover:btn-success my-5 mr-2">
                                    <a href="https://books-cart-b3ccf.web.app/" target='_blank'>Live View</a>
                                </button>
                                <button className="btn btn-sm hover:btn-success my-5">
                                    <Link to='/bookscartpage'>Details</Link>
                                </button>

                                <div className="card-actions grid grid-cols-3 md:grid-cols-5">
                                    <div className="badge badge-outline">React.js</div>
                                    <div className="badge badge-outline">Tailwind</div>
                                    <div className="badge badge-outline">Firebase</div>
                                    <div className="badge badge-outline">Express</div>
                                    <div className="badge badge-outline">MongoDB</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Nov 2022 - Nov 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaReact />}
                >
                    <div class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                        <img class="object-cover w-full h-64" src={image2} alt="Article" />

                        <div class="p-6">
                            <div>
                                <span class="text-base  font-semibold text-blue-600 uppercase dark:text-blue-400">One Studio</span>
                                <Link href="#" class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">It is a Personal Photography site. Photographers provide many services through this site</Link>


                                <button className="btn btn-sm hover:btn-success my-5 mr-2">
                                    <a href="https://one-studio-5fe46.web.app/" target='_blank'>Live View</a>
                                </button>
                                <button className="btn btn-sm hover:btn-success my-5">
                                    <Link to='/onestudiopage'>Details</Link>
                                </button>

                                <div className="card-actions grid grid-cols-3 md:grid-cols-5">
                                    <div className="badge badge-outline">React.js</div>
                                    <div className="badge badge-outline">Tailwind</div>
                                    <div className="badge badge-outline">Firebase</div>
                                    <div className="badge badge-outline">Express</div>
                                    <div className="badge badge-outline">MongoDB</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Oct 2022 - Oct 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaReact />}
                >
                    <div class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                        <img class="object-cover w-full h-64" src={image3} alt="Article" />

                        <div class="p-6">
                            <div>
                                <span class="text-base  font-semibold text-blue-600 uppercase dark:text-blue-400">E-Learning</span>
                                <Link href="#" class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">It is a Personal Photography site. Photographers provide many services through this site</Link>


                                <button className="btn btn-sm hover:btn-success my-5 mr-2">
                                    <a href="https://e-learning-4a147.web.app/" target='_blank'>Live View</a>
                                </button>
                                <button className="btn btn-sm hover:btn-success my-5">
                                    <Link to='/elearningpage'>Details</Link>
                                </button>

                                <div className="card-actions grid grid-cols-3 md:grid-cols-5">
                                    <div className="badge badge-outline">React.js</div>
                                    <div className="badge badge-outline">Tailwind</div>
                                    <div className="badge badge-outline">Firebase</div>
                                    <div className="badge badge-outline">Express</div>
                                    <div className="badge badge-outline">MongoDB</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </VerticalTimelineElement>



            </VerticalTimeline>
        </div>
    );
};

export default Projects;
import React from 'react';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import img1 from '../../../assets/bookscart/img1.png';
import img2 from '../../../assets/bookscart/img2.png';
import img3 from '../../../assets/bookscart/img3.png';


const BookCartsDetails = () => {
    return (
        <div>

            <div class="md:flex items-start justify-center  2xl:px-20 md:px-6 px-4 pt-24">
                <div class="xl:w-2/6 lg:w-2/5 w-full lg:w-80 md:block mr-6">
                    <PhotoProvider>
                        <PhotoView src={img1}>
                            <img class="w-full" alt="image of a girl posing" src={img1} />
                        </PhotoView>
                    </PhotoProvider>
                    <PhotoProvider>
                        <PhotoView src={img2}>
                            <img class="mt-6 w-full" alt="image of a girl posing" src={img2} />
                        </PhotoView>
                    </PhotoProvider>
                    <PhotoProvider>
                        <PhotoView src={img3}>
                            <img class="mt-6 w-full" alt="image of a girl posing" src={img3} />
                        </PhotoView>
                    </PhotoProvider>

                </div>

                <div class="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">

                    <h2 className='text-7xl font-bold'>Books Cart</h2>
                    <div>
                        <p class=" text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7 text-justify">Books Cart React Template – Books Cart is absolutely as smart as the name suggests. It is designed to build eCommerce sites that can deal with Used Books.Book-Cart is a clean-cut template having stunning color combination.

                            Designed with eye-catching graphics and lots of amazing features, this is just irresistible.</p>
                        <p class=" text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7 text-justify">
                            Designed with eye-catching graphics and lots of amazing features, this is just irresistible. It is Responsive, Retina ready & Multi-Device supported.</p>
                        <h4 className='text-4xl font-semibold mt-10 mb-4'>Features:</h4>
                        <ul className='text-gray-600'>
                            <li>1.Responsive Unique Layout</li>
                            <li>2.Beautiful Dashboard</li>
                            <li>3.Used Tailwind Css for creating this beautiful website</li>
                            <li>4.Used toaster to hot toast.</li>
                            <li>5.Used Firebase Login (Email, Password, Google)</li>
                            <li>6.Used React hooks,React Query, Api for getting Data</li>
                            <li>7.Data Stored in MongoDb</li>
                            <li>8.Used Express and Node to Create Server API</li>
                        </ul>
                        <div className=' flex gap-2 mt-4 text-red-500 justify-center'>
                            <a href='https://books-cart-b3ccf.web.app/' target='_blank' className='border  lg:p-2 p-1  rounded-lg uppercase font-bold shadow-lg shadow-white hover:text-orange-500'>Live Link</a>
                            <a href='https://github.com/Iambijoy656/used-book_cart-client-site' target='_blank' className='border hover:text-orange-500 lg:p-2 p-1  rounded-lg uppercase font-bold shadow-lg shadow-white'>Client Code</a>
                            <a href='https://github.com/Iambijoy656/used-books_cart-server-site' target='_blank' className='border hover:text-orange-500 lg:p-2 p-1 rounded-lg uppercase font-bold shadow-lg shadow-white'>Server Code</a>


                        </div>
                    </div>
                    <div>
                        <div class="border-t border-b py-4 mt-7 border-gray-200">
                            <h3 className=' text-black font-semibold text-4xl mt-4 mb-4'>Technology:</h3>
                            <div className='flex gap-2 flex-wrap'>
                                <p className='border rounded-lg shadow-lg shadow-white  p-4 text-orange-500 uppercase font-bold'>ReactJS</p>
                                <p className='border rounded-lg shadow-lg shadow-white  p-4 text-orange-500 uppercase font-bold'>React Router</p>
                                <p className='border rounded-lg shadow-lg shadow-white  p-4 text-orange-500 uppercase font-bold'>MongoBD</p>
                                <p className='border rounded-lg shadow-lg shadow-white  p-4 text-orange-500 uppercase font-bold'>NodeJS</p>
                                <p className='border rounded-lg shadow-lg shadow-white  p-4 text-orange-500 uppercase font-bold'>Express JS</p>
                                <p className='border rounded-lg shadow-lg shadow-white  p-4 text-orange-500 uppercase font-bold'>Firebase</p>
                                <p className='border rounded-lg shadow-lg shadow-white  p-4 text-orange-500 uppercase font-bold'>Tsilwind</p>
                                <p className='border rounded-lg shadow-lg shadow-white  p-4 text-orange-500 uppercase font-bold'>Vercel</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>




    );
};

export default BookCartsDetails;
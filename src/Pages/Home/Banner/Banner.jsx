/* eslint-disable no-unused-vars */
import React from 'react';
import img1 from '../../../assets/images/images/banner/1.jpg';
import img2 from '../../../assets/images/images/banner/3.jpg';
import img3 from '../../../assets/images/images/banner/4.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-[500px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-md" />
                <div className="flex items-center rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] absolute  left-0 top-0 bottom-0">
                    <div className="text-white space-y-7 pl-14 w-1/2 ">
                        <h2 className="text-5xl font-bold"> <span className="text-pink-500">Simplify Learning</span> <br /> with an AI-Powered LMS</h2>
                        <p>Enable learning everywhere through an easy-to-use and personalized enterprise LMS that seamlessly blends an engaging learner and effective admin experience</p>
                        <div >
                            <button className="btn btn-error mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5 bg-red-400 hover:bg-red-600 text-white">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-red-400 hover:bg-red-600 text-white">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="flex rounded-xl items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] absolute  left-0 top-0 bottom-0">
                    <div className="text-white space-y-7 pl-14 w-1/2 ">
                        <h2 className="text-5xl font-bold"> <span className="text-green-500">Simplify Learning</span><br /> with an AI-Powered LMS</h2>
                        <p>Enable learning everywhere through an easy-to-use and personalized enterprise LMS that seamlessly blends an engaging learner and effective admin experience</p>
                        <div >
                            <button className="btn btn-error mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5 bg-red-400">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-red-400">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="flex items-center rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] absolute  left-0 top-0 bottom-0">
                    <div className="text-white space-y-7 pl-14 w-1/2 ">
                        <h2 className="text-5xl font-bold"> <span className="text-pink-500">Simplify Learning</span> <br /> with an AI-Powered LMS</h2>
                        <p>Enable learning everywhere through an easy-to-use and personalized enterprise LMS that seamlessly blends an engaging learner and effective admin experience</p>
                        <div >
                            <button className="btn btn-error mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5 bg-red-400">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-red-400">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;
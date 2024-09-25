import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Fire from '../assets/images/png/fire.png';

const CenterSlider = () => {
    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "150px",
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    centerPadding: '50px',
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '0px',
                },
            },
        ],
    };

    return (
        <div className='bg-black py-12'>
            <div className="max-w-[1140px] mx-auto px-6 relative">
                <Slider {...settings}>
                    <div className="slide transition-transform flex items-center justify-center transform duration-300">
                        <img className='w-full h-full mx-4 px-4 mt-14 rounded-lg' src={Fire} alt="fire" />
                    </div>
                    <div className="slide transition-transform flex items-center justify-center transform duration-300">
                        <img className='w-full h-full mx-4 px-4 mt-14 rounded-lg' src={Fire} alt="fire" />
                    </div>
                    <div className="slide transition-transform flex items-center justify-center transform duration-300">
                        <img className='w-full h-full mx-4 px-4 mt-14 rounded-lg' src={Fire} alt="fire" />
                    </div>
                    <div className="slide transition-transform flex items-center justify-center transform duration-300">
                        <img className='w-full h-full mx-4 px-4 mt-14 rounded-lg' src={Fire} alt="fire" />
                    </div>
                    <div className="slide transition-transform flex items-center justify-center transform duration-300">
                        <img className='w-full h-full mx-4 px-4 mt-14 rounded-lg' src={Fire} alt="fire" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default CenterSlider;

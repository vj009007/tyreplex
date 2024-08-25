import React from 'react';
import { brands } from './../data/brands'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

function Deal() {
    const settings = {
        dots: false,
        arrows: true,
        speed: 500,
        infinite: true,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };
  return (
    <div className="my-6">
        <div className="bg-white md:p-5 p-3 rounded-lg">
            <h5 className="px-4 text-base font-semibold">Deals in</h5>
            <Slider {...settings} className='review-slider arrowStyle mt-4'>
            {brands.map((item, index) => {
                 return(
                    <Link to={item.link} key={index} className='border border-solid border-[#dee2e6] p-3 rounded-lg bg-white shadow-md'>
                        <div className="flex flex-col items-center gap-2">
                            <div className={`brand-logo ${item.logoClass}`}></div>
                            <p>{item.name}</p>
                        </div>
                    </Link>
                 )
            })}
        </Slider>
        </div>
    </div>
  )
}

export default Deal
import React from 'react'
import { reviews } from '../data/reviews.js';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ReviewList() {
    const settings = {
        dots: false,
        arrows: true,
        speed: 500,
        infinite: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
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
                    slidesToShow: 1,
                }
            }
        ]
    };
  return (
    <div>
        <h5 className='px-4 text-base font-semibold mt-8'>2278 Google Reviews</h5>
        <Slider {...settings} className='review-slider arrowStyle mt-4'>
            {reviews.map((review, index) => {
                const firstLetter = review.name.charAt(0).toUpperCase();
                 return(
                    <div key={index} className='border border-solid border-[#dee2e6] p-3 rounded-lg bg-white'>
                        <div className="flex items-center gap-2">
                            <div className='w-10 h-10 items-center justify-center text-base leading-none rounded-3xl text-white bg-green-700 inline-flex'>{firstLetter}</div>
                            <h3 className='text-base font-semibold text-gray-800'>{review.name}</h3>
                        </div>
                        <p className='text-sm font-normal mt-3'>{review.description}</p>
                    </div>
                 )
            })}
        </Slider>
    </div>
  )
}

export default ReviewList

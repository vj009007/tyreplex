import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ShieldCheck, MapPin, Clock1 } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function Banner() {

    const officeImages = [
        "https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300",
        "https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300",
        "https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300",
        "https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300",
    ];

    const settings = {
        dots: false,
        arrows: false,
        speed: 400,
        infinite: true,
        autoplay: true,
        slidesToShow: 2.2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
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

    const getDirection = () => {
        window.open("https://tyreplex.com/r/df64b", "_blank");
    };

    return (
        <div>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 items-center">
                <div>
                    <div className="inline-flex items-center gap-4">
                        <h1 className='text-2xl inline-block font-semibold'>SHREE HEMKUNT TYRES AND SERVICES</h1>
                        <div className="text-[#4CA72C] gap-1 inline-flex">
                            <ShieldCheck className='w-4' />Verified
                        </div>
                    </div>
                    <p className='flex items-start gap-6 text-sm mt-5 text-gray-500'>
                        <MapPin className='min-w-6 h-6 mt-2' />
                        <span className='max-w-[450px]'>PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014</span>
                    </p>
                    <p className='flex items-start gap-6 text-sm mt-2  text-gray-500'>
                        <Clock1 className='min-w-6 h-6' />
                        <span>Open - Monday to Sunday - 10:00AM to 8:00PM</span>
                    </p>
                    <button className="mt-5 w-auto rounded-md px-8 py-3 text-sm font-semibold text-[#ed1c24] shadow-sm flex items-start justify-center gap-2 border border-solid border-[#ed1c24] hover:bg-[#ed1c24] hover:text-white" onClick={getDirection}> Get Directions </button>
                </div>
                <div>
                    <Slider {...settings} className='banner-slider mt-4'>
                        {officeImages.map((item, index) => (
                            <img src={item} alt="images" key={index} />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Banner;

import React, { useState } from 'react';
import { dealer } from './../data/delears';
import { Link } from 'react-router-dom';
import { ChevronDown , Star , ShieldCheck } from 'lucide-react';

function Dealer() {
  const [visibleItems, setVisibleItems] = useState(8);

  const handleViewMore = () => {
    setVisibleItems((prevItems) => prevItems + 8); 
  };

  return (
    <div className="my-6 dealer-section">
      <div className="bg-white md:p-5 p-3 rounded-lg">
        <h5 className="px-2 text-base font-semibold">Tyres sold by this Dealer</h5>
        <div className='flex items-end gap-4'>

        </div>
        <div className='mt-4 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
          {dealer.slice(0, visibleItems).map((item, index) => (
            <Link to={item.link} className="relative block rounded-xl overflow-hidden border border-solid border-[#dee2e6] shadow-md" key={index}>
                <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute top-0 right-0 py-[2px] pb-0 px-2 rounded-b-md z-10 bg-yellow-400 flex gap-2 text-sm">
                    <ShieldCheck className='w-4' /> {item.warranty}
                </div>
                <div className="brand-logo"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                    <h1 className="text-lg font-semibold text-white">{item.title}</h1>

                    <div className='flex items-center gap-2 text-white mt-2 text-sm'>
                        <p className='bg-green-600 p-1 py-0 rounded-md w-auto max-w-max text-white flex gap-1 items-center'><Star className='text-xs w-4 text-white' /> {item.rating}</p> {item.reviewsCount}
                    </div>
                    {item.offerText ? <p className='text-xs text-[#4CA72C] mt-2'>Offer available</p> : <p className='text-xs text-red-600 mt-2'>No offer acailable</p>}
                    <p className="mt-2 text-sm text-white bg-slate-900 w-max px-2 py-1 rounded-md">
                        {item.price}
                    </p>
                    <p className='mt-2 text-sm text-white'>{item.feature}</p>
                </div>
            </Link>
          ))}
        </div>
        {visibleItems < dealer.length && ( 
          <button
            onClick={handleViewMore}
            className='mt-5 mx-auto w-auto rounded-md px-3 py-2 pb-1 text-sm font-semibold text-[#ed1c24] shadow-sm flex items-start justify-center gap-2 border border-solid border-[#ed1c24] hover:bg-[#ed1c24] hover:text-white'
          >
            View More <ChevronDown className='w-5' />
          </button>
        )}
      </div>
    </div>
  );
}

export default Dealer;

import React from 'react';
import { serviceList } from '../data/services';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="my-6">
      <div className="bg-white md:p-5 p-3 rounded-lg">
        <h5 className="px-2 text-base font-semibold">Services offered by this dealer</h5>
        <div className='mt-4 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
          {serviceList.map((item, index) => (
            <div key={index} className='border border-solid border-[#dee2e6] p-3 py-6 rounded-lg bg-white shadow-md'>
              <div className="flex flex-col items-center gap-2">
                <img src={item.imageUrl} alt={item.title} /> 
                <h3 className='text-lg font-medium mt-2'>{item.title}</h3>
                <Link
                  className='mt-2 w-auto rounded-md bg-[#ed1c24] px-3 py-2 text-sm font-semibold text-white shadow-sm inline-flex items-start justify-center gap-2 border border-solid border-[#ed1c24] hover:bg-transparent hover:text-[#ed1c24]'
                  to={item.link}
                >
                  {item.dataLbl}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

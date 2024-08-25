import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/TP-logo.png"

export function Footer() {
  return (
    <section className="relative overflow-hidden pt-10 pb-4 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          <div className="">
            <div className="flex  flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Link>
                    <img src={logo} alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="">
              <ul>
                <li className="mb-4">
                  <Link className=" text-base font-medium text-gray-900 hover:text-[#ed1c24]" to="#">
                    Who We Are
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className=" text-base font-medium text-gray-900 hover:text-[#ed1c24]" to="#">
                    Are you a Tyre Dealer?
                  </Link>
                </li>
              </ul>
          </div>
          <div className="">
              <ul>
                <li className="mb-4">
                  <Link className=" text-base font-medium text-gray-900 hover:text-[#ed1c24]" to="#">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className=" text-base font-medium text-gray-900 hover:text-[#ed1c24]" to="#">
                    Terms of use
                  </Link>
                </li>
              </ul>
          </div>
          <div className="">
              <ul>
                <li className="mb-4">
                  <Link className=" text-base font-medium text-gray-900 hover:text-[#ed1c24]" to="#">
                    Contact Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className=" text-base font-medium text-gray-900 hover:text-[#ed1c24]" to="#">
                    Career
                  </Link>
                </li>
                <li>
                  <Link className=" text-base font-medium text-gray-900 hover:text-[#ed1c24]" to="#">
                    Shipping & Return Policy
                  </Link>
                </li>
              </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-8">
        <p className='text-sm font-medium leading-5 text-center py-3 border-t border-solid border-black md:mx-'>©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </section>
  )
}

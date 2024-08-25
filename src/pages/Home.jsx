import React from 'react'
import ReviewList from '../components/ReviewList'
import Deal from '../components/Deal'
import Services from '../components/Services'
import Dealer from '../components/Dealer'
import Breadcrumb from '../components/breadcrumb.jsx';
import Payment from '../components/Paymant'
import NewsLatter from '../components/NewsLetter.jsx'
import { ToastContainer, toast } from 'react-toastify';
import Banner from '../components/Banner.jsx'


function Home() {
  return (
    
    <div className='container px-4 mx-auto my-6'>
      <ToastContainer />
      <div className="bg-white md:p-5 p-3 rounded-lg">
          <Banner />
          <ReviewList />
      </div>
      <Deal />
      <Services />
      <Dealer />
      <Breadcrumb />
      <Payment />
      <NewsLatter />
    </div>
  )
}

export default Home
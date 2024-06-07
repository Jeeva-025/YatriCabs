import React from 'react';
import { FaHandHolding } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { FaCarRear } from "react-icons/fa6";
import './Facilities.css'

const Facilities = () => {
  return (
    <div>
        <div className='featurescontainer'>
            <div className='features1'>
             <FaHandHolding className='badge'/>
             <h2 className='Banner'>RETURN FARE, NOT FAIR!</h2>
             <div className='tabItem'>Why Pay For Retum Joumey When You Ana Traveling One-Way? Now Dat Discounted AC Tox At Just Half Of The Round Trip Cost For Your One-Way Travel</div>
            </div>
            <div className='features2'>
            <SlLocationPin className='badge'/>
            <h2 className='Banner'>GPS BASED BILLING SYSTEM</h2>
            <div className='tabItem'>Since the OFS Doto Coptures The Actual Distance And Tima Traveled Reduce The Chance Of Kilometer Tampering Or Discrepancies in Billing</div>
            </div>
            <div className='features3'>
            < FaCarRear className='badge'/>
            <h2 className='Banner'>NOW AVAILABLE ROUTES ARE!</h2>
            <div className='tabItem'>Lucknow Gorakhpur Voranasi Allchabad Barcity</div>
            </div>
    </div>
    <div className='serviceItem'>
        <div className='Card'>
          <h2>WHY CHOOSE AC BUS OR AC TRAIN FOR YOUR <span> ONE-WAY JOURNEY?</span></h2>
          <p>Our Oneway Cab Service is Cheaper Than AC Bus And 2 Tier AC Train Ticket Fares, It Reduces Your Travel Time And You Travel At Your Own Private Space Also To Enjoy Your Journey. Our One Way Taxi Will Come At Your Doorstep And Take You To Your Desired Destination. So Book You Oneway Cab From Lucknow To Gorakhpur Or Varanasi To Bareilly.</p>
          <h5>Read More....</h5>
        </div>
        <div className='imageGallery'>

        </div>
    </div>
    <div className='footer'>
      <h2 >WHY CHOOSE ONE WAY CAB?</h2>
      <div className='statsContainer'>
        <div className='pageActive'>
            <ul>
                <li>Instant Booking & Confirmation</li>
                <li>Confirmed Booking Immediately</li>
                <li>No Return Fare For One-Way Trip</li>
                <li>Clean & Professional Cab Services</li>
                <li>Transparent Billing With GPS Based Billing System</li>
                </ul>
        </div>
        <div className='imgpageActive'></div>
        <div className='pageActive'>
        <ul>
                <li>Pick-Up From Your House</li>
                <li>Dedicated Cab Just You</li>
                <li>Drop To Your Desirodi Destination</li>
                <li>Completed More Than 20.000 One WayTrips</li>
                <li>Multiple Payment Option Including Credit Card</li>
                
                </ul>
        </div>
      </div>
      <h3>DISCOVER AFFORDABLE TRAVEL WITH OUR SEAMLESS INTERCITY CAR RENTALS IN INDIA-WHERE EXCELLENCE MEETS AFFORDABILITY WITH STANDARDIZED RATES IN EVERY CITY. UNLEASH YOUR JOURNEY!</h3>
    </div>
    </div>

  )
}

export default Facilities
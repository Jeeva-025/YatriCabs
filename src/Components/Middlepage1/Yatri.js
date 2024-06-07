import React from 'react';
import './yatri.css';

const Yatri = () => {
  return (
    <div>
      <div className='playstore'></div>
    <div className='background'>
      <div className='carimages'></div>
      <div className='text-content'>
        <div className='heading'>WHY <span className='spantag'>YATRI?</span></div>
        <div className='content'>
            <h2>FAST RESPONSE TIME</h2>
            <p>Avail Best Car Rental Service In Lucknow With Driver For Local Or Outstation Within The Moment Of Your Call For Best Car Hire Experience.</p>
        </div>
        <div className='content'>
            <h2>VAST FLEET</h2>
            <p>We Have All Kinds Of Car On Rent Available like Sedan, Suv, Muv, Premium Sedan, Tampo Traveller Etc As Per Ur Requirement</p>
        </div>
        <div className='content'>
            <h2>EASY TO ORDER</h2>
            <p>Easily Book Cab Online With Our Website Or Call Our Customer Support Team.</p>
        </div>
        <div className='content'>
            <h2>GREAT TARIFFS</h2>
            <p>Rent A Car Our Car Hire Tariff Are Very Low When Compare To Other Operators in Lucknow</p>
        </div>
      </div>
    </div>
    <div className='detailscar'>
      <div className='detailscontainer'>
        <h4 className='topicswrapper'>CAR TYPE</h4>
        <ul className='listitems'>
          <li>AC Sedans</li>
          <li>AC Hatchbacks</li>
          <li>AC SUV</li>
        </ul>
      </div>
      <div className='detailscontainer'>
      <h4 className='topicswrapper'>MODEL INCLUDES</h4>
        <ul className='listitems'>
          <li>Etios, Amaze, Drive etc.</li>
          <li>Wagon R, Celerio, Micra etc.</li>
          <li>Ertiga, Xylo etc.</li>
        </ul>
      </div>
      <div className='detailscontainer'>
      <h4 className='topicswrapper'>PASSENGERS</h4>
        <ul className='listitems'>
          <li>4 Pax</li>
          <li>4 Pax</li>
          <li>6-7 Pax</li>
        </ul>
      </div>
      <div className='detailscontainer'>
      <h4 className='topicswrapper'>IDEAL FOR</h4>
        <ul className='listitems'>
          <li>Comfortable trips with small families</li>
          <li>Budget trips over shot distance </li>
          <li>Premium trips with large families</li>
        </ul>
      </div>
      <div className='detailscontainer'>
      <h4 className='topicswrapper'>FARE</h4>
        <ul className='listitems' >
          <li>Rs.11/KM</li>
          <li>Rs.11/KM</li>
          <li>Rs.13/KM</li>
        </ul>
      </div>
      
    </div>
    </div>
  );
}

export default Yatri;

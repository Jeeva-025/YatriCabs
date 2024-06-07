import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoXCircle } from "react-icons/go";
import './Airport.css'; // Import CSS for styling
import { useState } from 'react';
import { GoArrowSwitch } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";

function Airport() {
  const navigate = useNavigate();

  const[airport, setAirport]=useState(true);


  const [selectedButton, setSelectedButton] = useState('airport');
  const handleButtonClick = (buttonName) => {
    if (selectedButton !== buttonName) {
      setSelectedButton(buttonName);
      switch (buttonName) {
        case 'outstation':
          navigate('/outstation');
          break;
        case 'local':
          navigate('/local');
          break;
        case 'airport':
          navigate('/airport');
          break;
        default:
          break;
      }
    }
  };
  

  return (
    <div className="Overall-container">
      <div className="left-container">
        <h1>INDIA'S <span> LEADING ONE-WAY INTER-CITY</span> CAB SERVICE PROVIDER</h1>
      </div>
      <div className="right-container">

    <div className="home-container">

      <div className='button-container'>
      <button
          className='header-buttons'
          onClick={() => navigate('/outstation')}
        >
          Outstation
        </button>
        <button
          className='header-buttons'
          onClick={() => navigate('/local')}
        >
          Local
        </button>
        <button
          className={`header-buttons ${selectedButton === 'airport' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('airport')}
        >
          Airport
        </button>
      </div>


      


      <div className='location-container'>
      <div style={{display:"flex", alignItems:"center"}}>
      <input type="text" placeholder="FROM" className="text-input" />
      <GoXCircle className='Circle'/>
      </div>

      

      <div style={{display:"flex", alignItems:"center"}}>
      <input type="text" placeholder="TRIP" className="text-input" />
      <GoXCircle className='Circle'/>
      </div>

      </div>
      <div className='date-conatiner'>
      <input type="date" placeholder="PICK UP DATE" className="date-input" />
      <div style={{display:"flex", alignItems:"center"}}>
      <input type="text" placeholder="PICK UP AT" className="date-input" />
      <CiLocationOn/>
      </div>

      </div>
      <div className='bottom-button'>
      <button id='lastone' className='last-buttons' onClick={() => navigate('/airport')}>EXPLORE CABS</button>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Airport;

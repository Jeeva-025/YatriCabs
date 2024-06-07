import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoXCircle } from "react-icons/go";
import './Local.css'; // Import CSS for styling
import { useState } from 'react';
import { GoArrowSwitch } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";


function Local() {
  const navigate = useNavigate();

  const[oneWay, setOneWay]=useState(true);

  
  const [selectedButton, setSelectedButton] = useState('local');
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
  
 console.log(oneWay);
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
          onClick={() =>  navigate('/outstation')}
        >
          Outstation
        </button>
        <button
          className={`header-buttons ${selectedButton === 'local' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('local')}
        >
          Local
        </button>
        <button
          className='header-buttons'
          onClick={() => navigate('/airport')}
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
      <input type="text" placeholder="TO" className="text-input" />
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

export default Local;

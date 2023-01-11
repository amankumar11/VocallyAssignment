import React from 'react'
import pickup_service from '../images/pickup_service.png';
import '../styles/Service.css';

const Service = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 service-section'>
        <div className='grid1-item'>
            <img src={pickup_service} style={{width: '60%'}}/>
        </div>
        <div className='grid1-item'>
            <div className='service-heading'>
                <h1 style={{color: '#b5b8b9'}}>Focused on</h1>
                <h1 style={{color: '#b5b8b9'}}>Time Saving</h1>
                <p style={{color: '#b5b8b9'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <a href="#" className="flex whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 px-2 h-10 items-center service-btn" style={{border: '1px solid #b5b8b9', borderRadius: '25px', color:'#b5b8b9', width:'280px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px', fontWeight: 'bold'}}>Download the Mobile App</a>
            </div>

        </div>
    </div>
  )
}

export default Service
import React from 'react'
import '../styles/Landing.css'
import landing_illustration from '../images/landing_illustration.png';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import Form from './Form';


const Landing = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 landing-section'>
        <div className='grid1-item'>
            <div className='landing-heading'>
                <h1 style={{color: '#b5b8b9'}}>Vehicle Maintenance</h1>
                <h1 style={{color: '#b5b8b9'}}>From The Comfort of</h1>
                <h1 style={{color: '#b5b8b9'}}>Your Home</h1>
                <p style={{color: '#b5b8b9'}}>Open Auto soothes the hassle of maintaining your vehicle and helps</p>
                <p style={{color: '#b5b8b9'}}>you deal with unexpected repairs worry-free.</p>
            </div>
            <Form/>
        </div>
        <div className='grid1-item landing-illustration'>
            <img src={landing_illustration} style={{width: '90%'}}/>
            <div className='social-icons' style={{width: '100%'}}>
                <div  className='justify-end' style={{display: 'flex', flexDirection: 'row', marginRight: '40px'}}>
                    <div style={{margin: '0px 8px', fontSize: '20px', color: '#b5b8b9'}}><FaFacebookF/></div>
                    <div style={{margin: '0px 8px', fontSize: '20px', color: '#b5b8b9'}}><FaTwitter/></div>
                    <div style={{margin: '0px 8px', fontSize: '20px', color: '#b5b8b9'}}><FaYoutube/></div>
                    <div style={{margin: '0px 8px', fontSize: '20px', color: '#b5b8b9'}}><FaLinkedin/></div>
                    <div style={{margin: '0px 8px', fontSize: '20px', color: '#b5b8b9'}}><FaInstagram/></div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Landing
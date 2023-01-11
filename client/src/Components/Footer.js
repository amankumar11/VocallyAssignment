import React from 'react'
import '../styles/Footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 footer-section'>
        <div className='grid1-item footer-heading-section'>
            <h1>OPENAUTO</h1>
            <p>Open Auto @ all rights reserved</p>
        </div>
        <div className='grid1-item footer-social-section'>
            <div className='call-mail justify-end'>
                <a href="#" class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 px-8">
                    <svg class="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <span class="ml-3" style={{color: '#b5b8b9'}}>+769 586 4558</span>
                </a>
                <a href="#" class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 px-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#b5b8b9" class="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <span class="ml-3" style={{color: '#b5b8b9'}}>service@openauto.ca</span>
                </a>
            </div>
            <div className='social-icons' style={{width: '100%'}}>
                <div  className='justify-end' style={{display: 'flex', flexDirection: 'row'}}>
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

export default Footer
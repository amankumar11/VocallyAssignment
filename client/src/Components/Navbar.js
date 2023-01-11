import React from 'react'

const Navbar = () => {
  return (
    <div className="relative" style={{backgroundColor: '#131a23'}}>
        <div className="mx-auto max-w-8xl px-16">
            <div className="flex items-center justify-between border-gray-100 py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start ">
                    {/* <a href="#">
                        <span className="sr-only" style={{color: 'black'}}>OPENAUTO</span>
                    </a> */}
                    <h1 style={{fontSize: '25px', color:'white'}}>OPENAUTO</h1>
                </div>
                
                
                <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
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
                    <a href="#" className="flex whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 px-8 h-10 items-center" style={{border: '1px solid #b5b8b9', borderRadius: '25px', color:'#b5b8b9'}}>Download the Mobile App</a>
                </div>
            </div>
        </div>
        </div>

  )
}

export default Navbar
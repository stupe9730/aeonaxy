import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import { faBars, faHouse, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react'

const Home = () => {
    return <>
        <div className='text-center my-5'>
            <p className='lg:text-5xl md:text-4xl mt-16 md:mt-20 text-2xl  font-bold'>What can we help you with?</p>
            <div className='w-[50%] relative mx-auto md:my-12 my-9'>
                <input type="text" className="w-full md:my-3 -z-10 border-2 bg-transparent rounded-full md:py-4 py-2 pl-10 pr-4 outline-none" placeholder="Search Your Articles" />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
                </div>
            </div>
            <div className='flex sm:flex-row flex-col  gap-2 mx-5 sm:mx-0  sm:gap-10 my-3  w-100  justify-center'>
                <div className='flex gap-2'>
                    <img className='h-6 w-6' src="https://assets-global.website-files.com/63edad313f5509b3dce3a01e/65a94158badfee4b19d31c42_Group%20175.png" alt="" />
                    <p>Setting up Your First event</p>
                </div>
                <div className='flex gap-2 '>
                    <img className='h-6 w-6' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIt6rg0JU805IuTSjIB_X0jK-jFaA7x2F9VG0fZAKS7gidUkFEkmTqcSAmhwsNRmfJLzg&usqp=CAU" alt="" />
                    <p>Troubleshooting availability</p>
                </div>
            </div>
            <div className='flex sm:flex-row flex-col  gap-2 mx-5 sm:mx-0  sm:gap-10 my-3  w-100  justify-center'>
                <div className='flex gap-2'>
                    <img className='h-6 w-6' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMTsxbeQ40LIt5ZaZBSns1tOPlPxjeiWDQJxF3MHN-SM-xOKLXHmpfaDy2QHgAh1F6Rs&usqp=CAU" alt="" />
                    <p>Schedule with video conferencing</p>
                </div>
                <div className='flex gap-2'>
                    <img className='h-6 w-6' src="https://help.calendly.com/hc/article_attachments/5381314133399" alt="" />
                    <p>Embed options overview</p>
                </div>
            </div>
            <div className='flex sm:flex-row flex-col  gap-2 mx-5 sm:mx-0  sm:gap-10 my-3  w-100  justify-center'>
                <div className='flex gap-2'>
                    <img className='h-6 w-6' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjMFJH8O2fOzGMm8EscAYGH_d7DeKRA7vO2xoUw4XcEB7QPqcMTlDxT2qPFlCT99aimM4&usqp=CAU" alt="" />
                    <p>Automate Task With Workflows</p>
                </div>
                <div className='flex gap-2'>
                    <img className='h-6 w-6' src="https://help.calendly.com/hc/article_attachments/5381387969431" alt="" />
                    <p>Using Calendly for Chrome</p>
                </div>
            </div>

        </div>
    </>
}

export default Home
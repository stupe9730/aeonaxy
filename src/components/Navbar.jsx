import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
    const [responsive, setResponsive] = useState(false)
    return <>
        <div className='flex sticky bg-white z-10  top-0  items-center justify-between md:mx-2  '>

            <dir className=" w-40 ">
                <div className='flex items-center  gap-2 p-0'>
                    <img className='ps-0' src="https://mms.businesswire.com/media/20220302005343/en/1376587/22/Calendly_Primary_Logo_2_%282%29.jpg" alt="" />
                    <div className='text-nowrap border-l-2 font-bold p-2'>  Help Center</div>
                </div>
            </dir>
            <div className='lg:hidden cursor-pointer  me-6 text-2xl'>
                <FontAwesomeIcon onClick={e => setResponsive(!responsive)} icon={faBars} />
            </div>
            <div className={` gap-2 lg:flex ${responsive ? "lg:flex   lg:static z-10 lg:flex-row lg:bg-white bg-sky-300 right-0  flex-col absolute top-[80%] md:top-[15%] justify-end w-full" : "hidden"} `}>
                <div className='flex items-center lg:hover:bg-white  hover:bg-sky-400 py-4  lg:mx-4  lg:my-0 cursor-pointer gap-1'>
                    <a className='px-3' href="#developers-section">Developers</a><br />
                    <FontAwesomeIcon icon={faUpRightFromSquare} />
                </div>
                <div className='flex items-center lg:hover:bg-white  hover:bg-sky-400 py-4  lg:mx-4  lg:my-0 cursor-pointer gap-1'>
                    <a className='px-3' href="#Reaport Abuse">Reaport Abuse</a><br />
                    <FontAwesomeIcon icon={faUpRightFromSquare} />
                </div>
                <div className='flex items-center lg:hover:bg-white  hover:bg-sky-400 py-4  lg:mx-4  lg:my-0 cursor-pointer gap-1'>
                    <a className=' px-3' href="#Reaport Abuse">Reaport Abuse</a><br />
                </div>
                <div className='flex items-center  py-5 px-3  gap-5  lg:my-0 '>
                    <button className='btn btn-white lg:hover:bg-white  hover:bg-sky-400 py-2 px-4 '>Log In</button>
                    <button className='btn btn-white lg:hover:bg-white  hover:bg-sky-400 py-2 px-4  '>Sign UP</button>
                </div>
            </div>
        </div>
    </>
}

export default Navbar
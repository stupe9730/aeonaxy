import React from 'react'
import { faDiceTwo, faIndent, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBars, faHouse, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return <>
        <div className=' border-dotted border-2 mx-10 my-20'></div>
        <div className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-12 mx-10  h-96 mt-24">
            <div className='col-span-3'>
                <p className='text-3xl  font-bold'>Easy</p>
                <span className='text-3xl text-blue-600 font-bold'>ahead</span>
                <p className='my-8' >We take the work out of connecting with others so you can accomplish more.</p>


                <div className='flex gap-2 my-10 '>
                    <img height={100} width={100} src="https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo.jpg" alt="" />
                    <img height={100} width={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMiT4S_xrWhmcDNTYUoV00v0LilSJItwgbEL2dAwv9&s" alt="" />
                </div>
                <div className='flex gap-3 my-16 '>
                    <a href="#faTwitter"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                    <a href="#faFacebookF"><FontAwesomeIcon icon={faFacebookF} size="2x" /></a>
                    <a href="#faInstagram"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                    <a href="#faLinkedin"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                    <a href="#faYoutube"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
                </div>
            </div>
            <div className='col-span-3 my-5 md:my-0 md:ms-16 '>
                <p className='text-2xl font-bold'>About</p>
                <li className='list-none my-6'>
                    <ol className='my-3 text-gray-600' ><a href="#About">About Calendly</a></ol>
                    <ol className='my-3 text-gray-600' ><a href="#Contact">Contact Sales</a></ol>
                    <ol className='my-3 text-gray-600' ><a href="#Newsroom">Newsroom</a></ol>
                    <ol className='my-3 text-gray-600' ><a href="#Careers">Careers</a></ol>
                    <ol className='my-3 text-gray-600' ><a href="#Security">Security</a></ol>
                </li>
                <li className='list-none my-6'>
                    <p className='text-2xl font-bold'>Support</p>
                    <ol className='my-3 text-gray-600' ><a href="#About">About Calendly</a></ol>
                    <ol className='my-3 text-gray-600' ><a href="#Security">Security</a></ol>
                </li>
            </div>
            <div className='col-span-3 my-5 md:my-0 md:ms-16 '>
                <p className='text-2xl font-bold'>Solutions</p>
                <li className='list-none my-6'>
                    <ol className='my-3 text-gray-600' ><a href="#Customer">Customer Success</a></ol>
                    <ol className='my-3 text-gray-600' ><a href="#Sales">Sales</a></ol>
                    <ol className='my-3 text-gray-600' ><a href="#Recruiting">Recruiting</a></ol>
                    <ol className='my-3 text-gray-600' ><a href="#Information">Information Technology</a></ol>
                    <ol className='my-3 text-gray-600' ><a href="#Marketing">Marketing</a></ol>
                </li>
                <li className='list-none my-6'>
                    <p className='text-2xl font-bold'>Add-One</p>
                    <ol className='my-3 text-gray-600' ><a href="#Download">Download For Chrome</a></ol>
                    <ol className='my-3 text-gray-600' ><a href="#Download">Download for Firefox</a></ol>
                </li>
            </div>
            <div className='col-span-3 my-5 md:my-0 md:ms-16 '>
                <p className='text-2xl font-bold'>Popular Features</p>
                <li className='list-none my-6'>
                    <ol className='my-3 text-gray-600' ><a href="#Embed"></a>Embed Calendly</ol>
                    <ol className='my-3 text-gray-600' ><a href="#Availability">Availability</a></ol>
                    <ol className='my-3 text-gray-600' ><a href="#Sending">Sending Notifications</a></ol>
                    <ol className='my-3 text-gray-600' ><a href="#Using">Using Calendly Mobile</a></ol>
                </li>
                <li className='list-none my-6'>
                    <p className='text-2xl font-bold'>Developers</p>
                    <ol className='my-3 text-gray-600' ><a href="#Developer">Developer Tools</a></ol>
                </li>
            </div>
        </div>
        {/* <div className='flex mx-10 my-7 justify-between'>
            <p className='my-4 text-gray-400'>Copyright Calndly 2022</p>
            <p className='my-4 text-gray-400'>Calendly Status</p>
            <p className='my-4 text-gray-400'>Privacy / Terms and Calditions</p>

        </div> */}
    </>
}

export default Footer
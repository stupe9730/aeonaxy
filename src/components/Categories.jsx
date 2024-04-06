import React from 'react'

const Categories = () => {
    return <>
        <div className='mt-16'>
            <p className='text-3xl font-bold text-center'>Categories</p>
            <div className="grid mx-5 gap-2 md:gap-2 lg:gap-10   grid-grid-12 md:grid-cols-3">
                <div className="shadow-md relative text-center border-2   my-5 hover:border-blue-600 rounded-md">
                    <div className='bg-blue-600 text-white px-2 border-blue-600 border-2 rounded-tr-sm rounded-bl-md absolute right-0'>New</div>
                    <div className='flex justify-center my-2'>
                        <img className='h-20 w-20  ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrqCi7249M3KJF3jDTr2v1JtrXmH8sctzVJvseTC7gUWHerybWiNPeRZ8Ms8aIYImcNU&usqp=CAU" alt="" />
                    </div>
                    <h1 className='text-2xl text-center my-3'>Get Started</h1>
                    <p>Learn the basics,connect you calendar,and discover features that will make scheduling easier</p>
                </div>
                <div className="shadow-md text-center border-2 p-3 my-5 hover:border-blue-600 rounded-md">
                    <div className='flex justify-center my-2'>
                        <img className='h-20 w-20  ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgV7v6gju9lUAhvPKl5-kXM_ro4P_xbrbsnKqR10PNeYvnQTQdkjzy05jq3fnVG8qQg-s&usqp=CAU" alt="" />

                    </div>
                    <h1 className='text-2xl text-center my-3'>Using Calendly</h1>
                    <p>Availability, Event Type Settings, and Mylti-user features</p>
                </div>
                <div className="shadow-md text-center border-2 p-3 my-5 hover:border-blue-600 rounded-md">
                    <div className='flex justify-center my-2'>
                        <img className='h-20 w-20  ' src="https://theme.zdassets.com/theme_assets/1024340/362a71d943ca65bf32588394dd0b3ce0741ca1dd.svg" alt="" />

                    </div>
                    <h1 className='text-2xl text-center my-3'>Calendly For Mobile</h1>
                    <p>Mobile App for iOS & Android</p>
                </div>

            </div>
            <div className="grid gap-2 md:gap-2 lg:gap-10 mx-5  grid-grid-12 md:grid-cols-3">
                <div className="shadow-md text-center border-2 p-3 my-5 hover:border-blue-600 rounded-md">
                    <div className='flex justify-center my-2'>
                        <img className='h-20 w-20  ' src="https://theme.zdassets.com/theme_assets/1024340/fc29797cd48f0341c6d6410bf3e0dd245ce72140.svg" alt="" />

                    </div>
                    <h1 className='text-2xl text-center my-3    '>Integration & Automations</h1>
                    <p>Includes Calendar Connections, Calendl Integrations, Workflows, and Embed Options</p>
                </div>
                <div className="shadow-md text-center border-2 p-3 my-5 hover:border-blue-600 rounded-md">
                    <div className='flex justify-center my-2'>
                        <img className='h-20 w-20  ' src="https://cdn-icons-png.freepik.com/512/8392/8392147.png" alt="" />

                    </div>
                    <h1 className='text-2xl text-center my-3'>Account Settings</h1>
                    <p>Includes Billing, Security, SAML/SCIM setup and account options.</p>
                </div>
                <div className="shadow-md text-center border-2 p-3 my-5 hover:border-blue-600 rounded-md">
                    <div className='flex justify-center my-2'>
                        <img className='h-20 w-20  ' src="https://theme.zdassets.com/theme_assets/1024340/455f2c607b0e8adfef191786d74c8b1ba1fcb0ba.svg" alt="" />

                    </div>
                    <h1 className='text-2xl text-center my-2'>Video Tutorials</h1>
                    <p>Watch these short videos to learn about getting started with Calendly</p>
                </div>

            </div>
        </div>
    </>
}

export default Categories
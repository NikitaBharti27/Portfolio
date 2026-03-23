import { socialMedia } from '@/data'
import MagicButton from '@/ui/MagicButton'
import { a, div } from 'motion/react-client'
import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10 lg:mb-10' id="contact">
        <div className='flex flex-col items-center'>
             <h1 className='heading lg:max-w-[45vw]'>
                Ready to take <span className='text-purple'>your</span> digital presence to the next level? <br />
             </h1>
             <p className='text-white-200 md:mt-10 my-5'>Reach out to me and let&apos;s create something amazing together.
             </p>
             <a href="#contact">
                <MagicButton 
                title="Contact Me"
                icon={<FaLocationArrow/>}
                position='right'
                />
            </a>
        </div>
        <div className='flex mt-15 md:flex-row md:gap-3 flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'> Copyright © 2026 Nikita Bharti</p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <a key={profile.id} href={profile.link} target="_blank" rel="noopener noreferrer">
                        <div key={profile.id} className='w-10 h-10 cursor-pointer flex items-center justify-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                            <img src={profile.img} alt={profile.img} width={20} height={20}/>
                        </div>   
                    </a> 
                ))}
            </div>  
        </div>
    </footer>
  )
}

export default Footer
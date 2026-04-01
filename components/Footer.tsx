import { socialMedia } from '@/data'
import MagicButton from '@/ui/MagicButton'
import { a, div } from 'motion/react-client'
import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10 lg:mb-10' id="contact">
        <div className='flex flex-col items-center'>
             <h2 className='heading-2 lg:max-w-[45vw] text-center'>
                Ready to take <span className='text-primary'>your</span> digital presence to the next level?
             </h2>
             <p className='text-muted-foreground md:mt-10 my-5 text-center'>Reach out to me and let&apos;s create something amazing together.
             </p>
             <a href="#contact">
                <MagicButton 
                title="Contact Me"
                icon={<FaLocationArrow/>}
                position='right'
                />
            </a>
        </div>
        <div className='flex mt-15 md:flex-row md:gap-3 flex-col justify-between items-center border-t border-border/50 pt-10'>
            <p className='md:text-base text-sm md:font-normal font-light text-muted-foreground'> Copyright © 2026 Nikita Bharti</p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <a key={profile.id} href={profile.link} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110 active:scale-95">
                        <div className='w-10 h-10 cursor-pointer flex items-center justify-center glass rounded-lg transition-colors hover:bg-foreground/5'>
                            <img src={profile.img} alt={profile.img} width={20} height={20} className="invert dark:invert-0 transition-all" />
                        </div>   
                    </a> 
                ))}
            </div>  
        </div>
    </footer>
  )
}

export default Footer
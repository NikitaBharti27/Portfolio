import React from 'react'
import { BentoGrid, BentoGridItem } from './BentoGrid'
import { gridItems } from '@/data'
import { TextGenerateEffect } from './text-generate-effect'
import { CardBody, CardContainer, CardItem } from "@/ui/3D-card";

const Grid = () => {
  return (
    <section id='about'>
        <TextGenerateEffect duration={1}  
                    words="About Me" className='text-center text-[30px] md:text-3xl lg:text-4xl mt-20'  />
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-5">
            {/* Left Side: Description */}
            <div className="flex-1 max-w-2xl">
                <TextGenerateEffect 
                    duration={1.5} 
                    filter={true} 
                    words="I engineer scalable, real-time, and AI-driven full-stack applications that bridge the gap between complex logic and seamless user experiences." 
                    className='text-left text-[20px] md:text-2xl lg:text-3xl mt-5 text-white/70 transition'  
                />
                <p className='text-left text-lg mt-6 text-neutral-300'>
                    I&apos;m a Computer Science engineering student at Lovely Professional University with an 8.19 CGPA. As a Full-Stack Developer, I specialize in the MERN stack, Next.js, TypeScript, and AWS cloud deployment. I thrive on building production-ready systems—from architecting real-time delivery tracking platforms like Unimart using Socket.IO to engineering voice-first AI educational tools like Study Solutions. Backed by a strong foundation in Data Structures and Algorithms with 200+ LeetCode problems solved and a Gold Badge in Java from HackerRank, I focus on writing clean, optimized code that delivers impactful results.
                </p>
                
                <div className="mt-8 flex gap-4">
                   <a 
                    href="https://drive.google.com/file/d/1lQLjT3A_I6wXmGYB9vUIB5xWN1g-_2pF/view" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                        <button className="px-6 py-2 bg-primary text-white/90 rounded-lg font-bold cursor-pointer hover:bg-black-100 border hover:border-primary transition-colors duration-300">
                            Download CV
                        </button>
                    </a>
                    <a href="mailto:kumarpankaj301005@gmail.com">
                        <button className="px-6 py-2 border border-white/20 text-white rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                            Contact Me
                        </button>
                    </a>
                </div>
            </div>

            {/* Right Side: 3D Photo Container */}
            <div className="flex-1 flex justify-center items-center">
                <CardContainer className="inter-var">
                    <CardBody className="relative group/card w-full max-w-[350px] aspect-[3/4] flex items-center justify-center">
                        {/* Decorative Blue Background Frame */}
                        <div className="absolute inset-0 translate-x-6 translate-y-6 border-2 border-orange-500/50 rounded-xl z-0" />

                        <CardItem translateZ="100" className="w-full h-full relative z-10">
                            <img
                                src="/pankaj2.png" 
                                alt="Pankaj Kumar"
                                className="rounded-xl object-cover object-top w-full h-full shadow-2xl transition-all duration-500"
                            />
                        </CardItem>
                    </CardBody>
                </CardContainer>
            </div>
        </div>
            

        <BentoGrid className='w-full py-20'>
            {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName,spareImg}) => (
                <BentoGridItem
                    id ={id}
                    key={id}
                    title = {title}
                    description = {description}
                    className= {className}
                    img = {img}
                    imgClassName = {imgClassName}
                    titleClassName = {titleClassName}
                    spareImg = {spareImg}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid
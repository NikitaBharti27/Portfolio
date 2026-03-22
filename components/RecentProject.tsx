import { projects } from '@/data'
import { ThreeDCardDemo } from '@/ui/3D-Container'
import React from 'react'

const RecentProject = () => {
    return (
        <section className='py-20' id="projects">
            <h2 className='text-center text-[2.5rem] leading-10 font-bold'>
                A small selection of {' '}
                <span className='text-purple'>
                    recent project
                </span>
            </h2>
            <div className='flex flex-wrap justify-center lg:gap-x-40 lg:gap-y-8  mt-1  '>
                {projects.map(({ id, title, des, img, iconLists, link }) => (

                    <div
                        key={id}
                    >
                        <ThreeDCardDemo
                            id={id}
                            title={title}
                            des={des}
                            img={img}
                            iconLists={iconLists}
                            link={link}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default RecentProject
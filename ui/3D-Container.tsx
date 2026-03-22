"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/ui/3D-card";
import { div, li } from "motion/react-client";

export function ThreeDCardDemo({
  id, title, des, img, iconLists, link
}: {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card   dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10  dark:border-white/20 border-black/10 w-[90vw] sm:w-[30rem] h-auto rounded-xl p-6 border  bg-black-100">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {des}
        </CardItem>
        <CardItem translateZ="100" className=" mt-4 relative w-full h-full overflow-hidden rounded-3xl  pt-2"
          style={{
            background: '#020024',
            backgroundColor: 'linear-gradient(81deg,rgba(2, 0, 36, 1) 0%, rgba(32, 32, 46, 1) 56%, rgba(59, 58, 79, 1) 100%)'
          }}>
          <img
            src={img}
            height="1000"
            width="1000"
            className="h-full w-full object-contain rounded-xl group-hover/card:shadow-xl "
            alt={title}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <div className="flex items-center ">
            {iconLists.map((icon, index) => (
              <div key={icon} className="border border-white/20 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                style={{
                  transform: `translateX(-${5 * index * 2}px)`
                }}
              >
                <img src={icon} alt={`icon-${index}`} className="p-2" />
              </div>
            ))}
          </div>
          <CardItem
            translateZ={20}
            as="a" // Use "a" directly
            href={link}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Visit
          </CardItem>

        </div>
      </CardBody>
    </CardContainer>
  );
}

import Image from "next/image";
import React, { JSX } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { TypewriterEffect } from "../components/typerEffect";


export default function ThreeDCardDemo(): JSX.Element {
  const words = [
    { text: "Hi," },
    { text: "I am Sufail Ahammed N.", className: "text-blue-500" },
  ];
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[84rem] h-auto rounded-xl p-6 border">
      <div className="card w-full p-6  rounded-lg  opacity-90">
      <div className="text-xl font-bold text-neutral-600 dark:text-white">
        <TypewriterEffect words={words} />
      </div>
      <p className="text-yellow-300 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Iam a Full - Stack Devoleper
      </p>
    </div>
        <CardItem translateZ={100} className="w-full mt-4 relative">
          <Image
            src="/image/bw.jpeg" // Correct usage with a leading slash
            alt="A descriptive alt text"
            width={1000}
            height={700} // Increased height
            className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          />
            <Link 
              className="button flex justify-center items-center absolute inset-0 m-auto" 
              href='https://wa.me/919562026070' 
              style={{ width: '20%', height: 'fit-content', transform: 'translateY(50%)' }}
            >
              Explore
            </Link>
      <div className="absolute right-5 mt-10 top-2/3 transform -translate-y-1/2 flex space-x-4 p-2 rounded-l-lg shadow-lg">
        <a href="https://www.linkedin.com/in/sufail-ahammed-n/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-yellow-500 transition duration-300">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v5.5h-3v-10h3v1.268c.878-.878 2.122-1.268 3.5-1.268 2.481 0 4.5 2.019 4.5 4.5v5.5z"/>
        </svg>
        </a>
        <a href="https://github.com/sufailn" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition duration-300">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.76-1.604-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.475 5.921.43.371.814 1.102.814 2.222 0 1.606-.014 2.898-.014 3.293 0 .319.218.694.825.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        </a>
        </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

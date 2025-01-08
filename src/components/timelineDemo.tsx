import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/Ttimeline";

export function TimelineDemo() {
const data = [
    {
        title: "2024",
        date: "Jun–Sep",
        content: (
            <div>

                <p className="text-white text-3xl  mb-10">
                    Completed MEAN Stack Developer internship at Inmakes, Kochi.
                    
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/angular-icon.webp"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="rounded-lg object md:h-44 lg:h-60 w-full"
                    />
                    <Image
                        src="/nodejs.svg"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="rounded-lg object md:h-44 lg:h-60 w-full"
                    />
                    <Image
                        src="/mongodb.svg"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="rounded-lg object md:h-44 lg:h-60 w-full"
                    />
                    <Image
                        src="/express-js.png"
                        alt="startup template"
                        width={200}
                        height={500}
                        className="rounded-lg object md:h-44 lg:h-60 w-full"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "2022-2024",
        content: (
            <div>
                <p className="text-white text-3xl  mb-10">
                
                    Master of Computer Application(MCA)
                    
                </p>
                <p className="text-white text-xs md:text-sm font-normal mb-8">
                APJ Abdul Kalam Technological University
                2022 – 2024 | Kozhikode, Indiat.
                </p>
            <p className="text-white text-xs md:text-sm font-normal mb-8">
                The Master of Computer Applications (MCA) is a postgraduate degree in computer application streams. It focuses on providing a comprehensive understanding of computer science, programming, and application development. The course covers various aspects of computational theory, programming languages, algorithm design, database management, networking, mobile technologies, and more. This program is designed to prepare students for advanced roles in the IT industry, equipping them with the skills needed to tackle complex problems and innovate in the field of technology.
            </p>
            </div>
        )      
    },
    {
        title: "2019 – 2022 ",
      content: (
            <div>
                <p className="text-white text-3xl  mb-10">
                Bachelor of Computer Application(BCA)
                
                </p>
                <p className="text-white text-xs md:text-sm font-normal mb-8">
                University of Calicut | Malappuram, India.
                </p>
                <p className="text-white text-xs md:text-sm font-normal mb-8">
                    The Bachelor of Computer Applications (BCA) program at the University of Calicut is designed to provide students with a solid foundation in computer science and its applications. The curriculum covers a wide range of topics including programming languages, software development, database management, networking, and web technologies. The program emphasizes practical skills and hands-on experience, preparing students for careers in the IT industry. The University of Calicut is known for its experienced faculty, state-of-the-art facilities, and a strong focus on research and innovation.
                </p>
            </div>
        ),
    },

];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

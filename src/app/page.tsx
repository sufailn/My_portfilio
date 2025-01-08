import React from "react";
import { FaHome, FaGraduationCap, FaTools, FaProjectDiagram, FaEnvelope, FaPhone } from "react-icons/fa";
import './styles.css'; // Import the CSS file
import ThreeDCardDemo from "../components/ThreeDCardDemo";
import { FloatingDock } from "../components/Nav";
import { TimelineDemo } from "@/components/timelineDemo";
export default function Home() {
  const links = [
    {
      title: "Home",
      icon: <FaHome />, // React Icon
      href: "#home",
    },
    {
      title: "Education",
      icon: <FaGraduationCap />, // React Icon
      href: "#education",
    },
    {
      title: "Skills",
      icon: <FaTools />, // React Icon
      href: "#skills",
    },
    {
      title: "Projects",
      icon: <FaProjectDiagram />, // React Icon
      href: "#projects",
    },
    {
      title: "Contact",
      icon: <FaEnvelope />, // React Icon
      href: "#contact",
    },
  ]

  return (


<div className="min-h-screen bg-[#021012] p-8 sm:p-20">
      
<ThreeDCardDemo />


    {/* About Me Section */}
    <section className="container mx-auto my-16 px-4 sm:px-6 lg:px-8">
      <section className="section__container text-center">
      
      <div className='creative__text--animation-1 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>
      I&apos;m
      <span className='creative-text block sm:inline' data-text='Sufail Ahammed.' style={{ '--i': 0 } as React.CSSProperties}>Sufail Ahammed.</span>
      <span className='block sm:inline' style={{ '--i': 1 } as React.CSSProperties} data-text='a Coder.'>a Coder.</span>
      <span className='creative-text block sm:inline' style={{ '--i': 2 } as React.CSSProperties} data-text='a Fullstack Developer'>a Fullstack Developer</span>
      <span className='block sm:inline' style={{ '--i': 3 } as React.CSSProperties} data-text='a Designer.'>a Designer.</span>
      </div>
      </section>
    </section>



      {/* Education Section */}
      <section id="education" className="mb-16">
      {/* <h2 className="text-2xl font-semibold text-white mb-4">Education</h2>
      <div className="space-y-6 border-l-4 border-yellow-300 pl-4">
        <div>
      <h3 className="text-xl font-medium text-yellow-300 mb-2">Master of Computer Application (MCA)</h3>
      <p className="text-gray-400">APJ Abdul Kalam Technological University</p>
      <p className="text-gray-400">2022 – 2024 | Kozhikode, India</p>
      <p className="text-gray-400">Specialization: Computer Applications</p>
      <p className="text-gray-400">Completed coursework in Full Stack Development, Cloud Computing, and Data Structures</p>
        </div>
        <div>
      <h3 className="text-xl font-medium text-yellow-300 mb-2">Bachelor of Computer Application (BCA)</h3>
      <p className="text-gray-400">University of Calicut</p>
      <p className="text-gray-400">2019 – 2022 | Malappuram, India</p>
      <p className="text-gray-400">Specialization: Computer Applications</p>
      <p className="text-gray-400">Top 10% of the class; Developed a project to optimize college admin processes, reducing manual work by 40%</p>
        </div>
      </div> */}
      </section>
<section  id="education" className="mb-16">
<TimelineDemo />
    
</section>


      {/* Skills Section */}
      <section className="mb-16">
      <h2 id="skills" className="text-2xl font-semibold text-white mb-4">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 ">
        <a href="https://angular.io/" target="_blank" className="flex flex-col items-center p-4 bg-red-400 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 transform hover:scale-105 ">
      <img src="angular-icon.webp" alt="Angular" className="w-16 h-16 mb-2 transition-transform duration-300 transform hover:scale-110" />
      <p className="text-lg font-medium">Angular</p>
        </a>
        <a href="https://reactjs.org/" target="_blank" className="flex flex-col items-center p-4 bg-blue-700 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 transform hover:scale-105 ">
      <img src="react.svg" alt="React" className="w-16 h-16 mb-2 transition-transform duration-300 transform hover:scale-110" />
      <p className="text-lg font-medium">React</p>
        </a>
        <a href="https://nextjs.org/" target="_blank" className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-300 transform hover:scale-105 ">
      <img src="next.svg" alt="Next.js" className="w-16 h-16 mb-2 transition-transform duration-300 transform hover:scale-110" />
      <p className="text-lg font-medium">Next.js</p>
        </a>
        <a href="https://nodejs.org/" target="_blank" className="flex flex-col items-center p-4 bg-green-400 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 transform hover:scale-105 ">
      <img src="nodejs.svg" alt="Node.js" className="w-16 h-16 mb-2 transition-transform duration-300 transform hover:scale-110" />
      <p className="text-lg font-medium">Node.js</p>
        </a>
        <a href="https://vercel.com/" target="_blank" className="flex flex-col items-center p-4 bg-black rounded-lg shadow-md hover:bg-gray-100 transition duration-300 transform hover:scale-105 ">
      <img src="vercel.svg" alt="Vercel" className="w-16 h-16 mb-2 transition-transform duration-300 transform hover:scale-110" />
      <p className="text-lg text-white font-medium">Vercel</p>
        </a>
        <a href="https://www.mongodb.com/" target="_blank" className="flex flex-col items-center p-4 bg-green-400 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 transform hover:scale-105 ">
      <img src="mongodb.svg" alt="MongoDB" className="w-16 h-16 mb-2 transition-transform duration-300 transform hover:scale-110" />
      <p className="text-lg font-medium">MongoDB</p>
        </a>
        <a href="" target="_blank" className="flex flex-col items-center p-4 bg-blue-800 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 transform hover:scale-105 ">
      <img src="tailwind-css-icon.webp" alt="MongoDB" className="w-16 h-16 mb-2 transition-transform duration-300 transform hover:scale-110" />
      <p className="text-lg font-medium">Tailwind</p>
        </a>
        <a href="" target="_blank" className="flex flex-col items-center p-4 bg-orange-300 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 transform hover:scale-105 ">
      <img src="html.svg" alt="MongoDB" className="w-16 h-16 mb-2 transition-transform duration-300 transform hover:scale-110" />
      <p className="text-lg font-medium">Html</p>
        </a>
      </div>
      </section>



     
        
            {/* Projects Section */}
            <section id="projects" className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-4">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
              name: "Legend Intermediate",
              description: "Designed and implemented responsive UI components using Tailwind CSS for an interactive product showcase.",
              image: "legend.svg",
              link: "https://www.legendfoods.ae/"
              },
              {
              name: "GlideAway Migration Service",
              description: "Designed and developed a responsive web page for a Visa Services business using HTML, Tailwind CSS, and custom styling.",
              image: "glideway.svg",
              link: "https://www.glidewaymigration.com/"
              },
              {
              name: "Doctor Appointment Management System",
              description: "The Doctor Appointment Management System, built with the MEAN stack, streamlines hospital appointment booking. It features three main sections: Appointments, Doctors, and Patients.",
              image: "doctor.svg",
              link: "https://github.com/sufailn/Doctor-Appointment-Management-System"
              },
              {
              name: "Bank App",
              description: "Developed a robust, secure banking application utilizing Angular, TypeScript, and JSON Server, enhancing user experience with a responsive Angular Material UI.",
              image: "bank.svg",
              link: "https://github.com/sufailn/Bank_app"
              },
              {
              name: "ToDoApp",
              description: "Developed a task management application using Angular, HTML, and CSS, enabling users to create, edit, prioritize, and track tasks with an intuitive interface, enhancing user experience and productivity. Implemented real-time collaboration features, allowing users to share tasks and receive updates, which improved team communication and task completion rates by 40%.",
              image: "todo.svg",
              link: "https://github.com/sufailn/ToDoApp"
              },
              {
              name: "Smart Licence",
              description: "Developed a vehicle safety system using Python (Flask), Dart (Flutter), and SQLYog with RFID-based authentication, reducing unauthorized access by 50%. Integrated alcohol detection sensors with Arduino, achieving a 100% detection rate in trials.",
              image: "license.svg",
              link: "https://github.com/sufailn/SmartLicence"
              },
            ].map((project, index) => (
              <div key={index} className="relative group perspective">
              <div className="relative w-full h-80 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180 cursor-pointer">
                <div className="absolute inset-0 backface-hidden p-4 bg-gray-800 rounded-lg shadow-md flex items-center justify-center opacity-75" style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'contain', backgroundPosition: 'right bottom', backgroundRepeat: 'no-repeat' }}>
                <h3 className="text-xl font-medium text-yellow-300 mb-2">{project.name}</h3>
                </div>
                <div className="absolute inset-0 backface-hidden p-4 bg-gray-700 rounded-lg shadow-md rotate-y-180 flex flex-col items-center justify-center">
                <div>
                  <h3 className="text-xl font-medium text-yellow-300 mb-2">{project.name}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-yellow-300 text-gray-800 rounded-lg hover:bg-yellow-400 transition duration-300">View Project</a>
                </div>
                </div>
              </div>
              </div>
            ))}
            </div>
            </section>



          {/* Contact Me Section */}
          {/* Footer Section */}
            <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
            <h3 className="text-lg font-semibold">Contact Me</h3>
            <p className="flex items-center"><FaEnvelope className="mr-2"/>sufailahammed316@gmail.com</p>
            <p className="flex items-center"><FaPhone className="mr-2"/>+91 9562026070</p>
            <p></p>
              </div>
                {/* <div className="flex flex-col rotate-90  items-center">
                <hr className="my-1 w-40 h-40 border-yellow-500" />
                </div> */}
             
               {/* Contact Form Section */}
            <section id="contact" className="mb-1">
            <h2 className="text-2xl font-semibold text-white mb-4">Send Message</h2>
            <form action="mailto:sufailahammed316@gmail.com" method="post" encType="text/plain" className="space-y-4">
              <div>
              <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full p-2 bg-gray-700 text-white rounded-lg" required />
              </div>
              <div>
              <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
              <textarea id="message" name="message" className="w-full p-2 bg-gray-700 text-white rounded-lg" required></textarea>
              </div>
              <button type="submit" className="flex items-center px-4 py-2 bg-yellow-300 text-gray-800 rounded-lg hover:bg-yellow-400 transition duration-300">
              <FaEnvelope className="mr-2" /> Send
              </button>
                  

            </form>
            
            </section>
             
            </div>
            <div  className="text-center"></div>
                <p className="text-center" >&copy; {new Date().getFullYear()} Sufail Ahammed. All rights reserved.</p>
            </footer>
            <div className="w-full h-screen">
  {/* Pass the links and classes to FloatingDock component */}
  <FloatingDock
    items={links}
    desktopClassName="fixed left-0 top-1/2 rotate-90"// Fixes the position to the left and centers it vertically
    mobileClassName="fixed  top-1/2 right-5"
  />
</div>

          
    </div>
  );
}



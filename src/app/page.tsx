import React from "react";
import { FaHome, FaGraduationCap, FaTools, FaProjectDiagram, FaEnvelope, FaPhone } from "react-icons/fa";
import Link from "next/link";
import './styles.css'; // Import the CSS file



export default function Home() {
  return (
    <div className="min-h-screen bg-[#021012] p-8 sm:p-20">
      {/* Header Section */}
      <div id="home" className="relative bg-cover bg-center opacity-85 h-96" style={{ backgroundImage: "url('/model_bw.png')" }}>
      <header className="absolute inset-0 flex flex-col items-center justify-center text-center mb-16">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 opacity-90 text-blue-400 hover:text-white">
      {/* Splitting each letter */}
      {"Sufail Ahammed N".split("").map((letter, index) => (
        <span
        key={index}
        className="inline-block animate-blinkPop"
        style={{ animationDelay: `${index * 0.25}s`, animationIterationCount: '1', marginRight: letter === ' ' ? '0.5rem' : '0' }}
        >
        {letter}
        </span>
      ))}
        </h1>
        <p className="text-xl sm:text-2xl text-yellow-500 font-bold hover:text-white">
        Full Stack Developer 
        </p>
        <Link className="button" href='https://wa.me/919562026070'>Explore</Link>
      </header>
      <div className="absolute right-5 mt-10 top-2/3 transform -translate-y-1/2 flex flex-col space-y-4 p-2 rounded-l-lg shadow-lg">
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
        <a href="https://www.instagram.com/sufail__ahmd" target="_blank" rel="noopener noreferrer" className="text-pink-800 hover:text-yellow-500 transition duration-300">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.281.058-2.418.27-3.29.542-.872.272-1.611.63-2.347 1.366-.736.736-1.094 1.475-1.366 2.347-.272.872-.484 2.009-.542 3.29-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.281.27 2.418.542 3.29.272.872.63 1.611 1.366 2.347.736.736 1.475 1.094 2.347 1.366.872.272 2.009.484 3.29.542 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.281-.058 2.418-.27 3.29-.542.872-.272 1.611-.63 2.347-1.366.736-.736 1.094-1.475 1.366-2.347.272-.872.484-2.009.542-3.29.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.281-.27-2.418-.542-3.29-.272-.872-.63-1.611-1.366-2.347-.736-.736-1.475-1.094-2.347-1.366-.872-.272-2.009-.484-3.29-.542-1.28-.058-1.688-.072-4.947-.072z"/>
        <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.324c-2.293 0-4.162-1.869-4.162-4.162s1.869-4.162 4.162-4.162 4.162 1.869 4.162 4.162-1.869 4.162-4.162 4.162z"/>
        <circle cx="18.406" cy="5.594" r="1.44"/>
        </svg>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition duration-300">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.928 2.205-4.928 4.928 0 .386.044.762.127 1.124-4.094-.205-7.725-2.165-10.148-5.144-.424.729-.666 1.577-.666 2.476 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.062c0 2.388 1.698 4.384 3.95 4.835-.413.112-.849.171-1.296.171-.317 0-.626-.031-.927-.088.627 1.956 2.444 3.379 4.6 3.419-1.68 1.318-3.809 2.104-6.115 2.104-.398 0-.79-.023-1.175-.069 2.179 1.397 4.768 2.212 7.548 2.212 9.057 0 14.01-7.507 14.01-14.01 0-.213-.005-.426-.014-.637.961-.694 1.796-1.562 2.457-2.549z"/>
      </svg>
        </a>
      </div>
      </div>

    {/* About Me Section */}
    <section className="container mx-auto my-16 px-4 sm:px-6 lg:px-8">
      <section className="section__container text-center">
      <div className='creative__text--animation-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>
        I&apos;m
        <span className='creative-text block sm:inline' data-text='Sufail Ahammed.' style={{ '--i': 0 } as React.CSSProperties}>Sufail Ahammed.</span>
        <span className='block sm:inline' style={{ '--i': 1 } as React.CSSProperties} data-text='a Coder.'>a Coder.</span>
        <span className='block sm:inline' style={{ '--i': 2 } as React.CSSProperties} data-text='a Full-stack Devoloper.'>a Full-stack Devoloper.</span>
        <span className='block sm:inline' style={{ '--i': 3 } as React.CSSProperties} data-text='a Designer.'>a Designer.</span>
      </div>
      </section>
    </section>

      {/* Education Section */}
      <section id="education" className="mb-16">
      <h2 className="text-2xl font-semibold text-white mb-4">Education</h2>
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
      </div>
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
            <div  className="text-center ml-5 pl-3"></div>
                <p className="ml-24">&copy; {new Date().getFullYear()} Sufail Ahammed. All rights reserved.</p>
            </footer>
          <nav className="fixed top-1/2 left-0 transform -translate-y-1/2 flex flex-col space-y-4 p-2 bg-gray-800 rounded-r-lg shadow-lg " style={{ zIndex: 1000 }}>
        <a href="#home" className="text-white hover:text-yellow-500 transition duration-300">
        <FaHome className="w-6 h-6" />
        </a>
        <a href="#education" className="text-white hover:text-yellow-500 transition duration-300">
        <FaGraduationCap className="w-6 h-6" />
        </a>
        <a href="#skills" className="text-white hover:text-yellow-500 transition duration-300">
        <FaTools className="w-6 h-6" />
        </a>
        <a href="#projects" className="text-white hover:text-yellow-500 transition duration-300">
        <FaProjectDiagram className="w-6 h-6" />
        </a>
        <a href="#contact" className="text-white hover:text-yellow-500 transition duration-300">
        <FaEnvelope className="w-6 h-6" />
        </a>
      </nav>      
    </div>
  );
}
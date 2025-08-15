"use client"
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import {BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { FaAtlassian, FaBars, FaTimes } from "react-icons/fa";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter()
  return (
    <>
    <header className="fixed top-0 left-0 w-full flex items-center justify-center px-6 py-4 z-50">
      <nav className="flex items-center justify-between w-full max-w-5xl bg-gray-600/20 pl-7 pr-7 pt-6 pb-6 rounded-lg backdrop-blur-lg shadow-lg">
        
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="px-4 py-2 rounded-md text-purple-400 hover:text-white transition duration-500 flex items-center space-x-4"
          >
            <FaAtlassian />
            <h1 className="text-xl font-serif font-bold">Portfolio</h1>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 rounded-md text-purple-400 hover:border-b border-purple-500 hover:text-white transition duration-500"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-purple-400 text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="absolute top-20 w-[90%] max-w-sm bg-gray-800/90 rounded-lg shadow-lg p-6 md:hidden">
          <div className="flex flex-col space-y-4">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block px-4 py-2 rounded-md text-purple-400 hover:text-white hover:bg-purple-500/20 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col items-center w-full space-y-2 text-center">
  <p className="text-sm text-gray-300/60">Hello, I am</p>
  <h1 className="text-5xl font-sans font-bold text-white">
    Muhammad <span className="text-purple-300">Araf</span>
  </h1>
    <h1 className="text-2xl font-serif font-bold mt-4 bg-gradient-to-r from-purple-100 to-purple-600 bg-clip-text text-transparent">
      Software Developer
    </h1>
</div>

        <div className="flex gap-4 items-center flex-col sm:flex-row w-full justify-center">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-purple-200  font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            
            Download Resume
          </a>
          <a
            className="rounded-full border border-solid  border-white/[.145] transition-colors flex items-center justify-center  hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>
        <div className="flex gap-4 items-center flex-row  justify-center w-full ">
          <FaGithub className="h-11 w-11 cursor-pointer p-2 hover:bg-white/10 transition duration-300 rounded-full"/>
          <BsLinkedin className="h-11 w-11 cursor-pointer p-2 hover:bg-white/10 transition duration-300 rounded-full"/>
        </div>
      </main>
      <div>
      </div>
    </div>
    <section className="min-h-screen w-full flex flex-col justify-center items-center mb-10" id="about">
      <h1 className="text-2xl text-purple-400 p-2 border-b-3 border-white font-sans font-bold tracking-wider">About Me :</h1>
      <div className=" text-white/70  w-[70%] text-lg mt-10">
            As a software developer with a passion for programming and problem-solving, I am eager to apply my skills in C++, Java, and JavaScript to create innovative solutions. With a solid foundation built through academic projects and self-learning, I am equipped to tackle challenges and deliver high-quality results. I have showcased my abilities through diverse projects and have applied my programming skills to solve real-world problems.
      </div>
    </section>

<section className="min-h-screen w-full flex flex-col justify-center items-center mt-10" id="skills">
  <h1 className="text-2xl text-purple-400 p-2 border-b-4 border-white font-sans font-bold tracking-wider">
    Skills
  </h1>

  <div className="text-white/70 w-[70%] text-lg mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div className="p-4">
      <div className="flex flex-col items-center gap-4">
        <p className="text-lg text-purple-200/70 font-bold">Programming Languages</p>
        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col items-center gap-2">
            <TbBrandCpp className="text-white w-20 h-20 bg-gray-500/20 rounded-lg p-3" />
            <p className="text-sm bg-white text-black px-3 py-1 rounded-lg">C++</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaJs className="text-white w-20 h-20 bg-gray-500/20 rounded-lg p-3" />
            <p className="text-sm bg-white text-black px-3 py-1 rounded-lg">JavaScript</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaJava className="text-white w-20 h-20 bg-gray-500/20 rounded-lg p-3" />
            <p className="text-sm bg-white text-black px-3 py-1 rounded-lg">Java</p>
          </div>
        </div>
      </div>
    </div>
    <div className="p-4">
      <div className="flex flex-col items-center gap-4">
        <p className="text-lg text-purple-200/70 font-bold">Backend Development</p>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col items-center gap-2">
            <FaNode className="text-white w-20 h-20 bg-gray-500/20 rounded-lg p-3" />
            <p className="text-sm bg-white text-black px-3 py-1 rounded-lg">Node.js</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <RiNextjsFill className="text-white w-20 h-20 bg-gray-500/20 rounded-lg p-3" />
            <p className="text-sm bg-white text-black px-3 py-1 rounded-lg">Next.js</p>
          </div>
        </div>
      </div>
    </div>
    <div className="p-4">
      <div className="flex flex-col items-center gap-4">
        <p className="text-lg text-purple-200/70 font-bold">Frontend Development</p>
        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col items-center gap-2">
            <FaHtml5 className="text-white w-20 h-20 bg-gray-500/20 rounded-lg p-3" />
            <p className="text-sm bg-white text-black px-3 py-1 rounded-lg">HTML</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaCss3 className="text-white w-20 h-20 bg-gray-500/20 rounded-lg p-3" />
            <p className="text-sm bg-white text-black px-3 py-1 rounded-lg">CSS</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <RiReactjsFill className="text-white w-20 h-20 bg-gray-500/20 rounded-lg p-3" />
            <p className="text-sm bg-white text-black px-3 py-1 rounded-lg">React.js</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <RiNextjsFill className="text-white w-20 h-20 bg-gray-500/20 rounded-lg p-3" />
            <p className="text-sm bg-white text-black px-3 py-1 rounded-lg">Next.js</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <RiTailwindCssLine className="text-white w-20 h-20 bg-gray-500/20 rounded-lg p-3" />
            <p className="text-sm bg-white text-black px-3 py-1 rounded-lg">Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
    <div className="p-4">
      <div className="flex flex-col items-center gap-4">
        <p className="text-lg text-purple-200/70 font-bold">Database</p>
        <div className="flex flex-col items-center gap-2">
          <SiMongodb className="text-white w-20 h-20 bg-gray-500/20 rounded-lg p-3" />
          <p className="text-sm bg-white text-black px-3 py-1 rounded-lg">MongoDB</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="min-h-screen w-full flex flex-col items-center mt-10 px-4 mb-20" id="projects">
  <h1 className="text-3xl font-bold mb-10">Projects</h1>

  <div className="w-full max-w-6xl bg-gray-600/10  rounded-xl shadow-lg overflow-hidden md:flex gap-8 p-6">
    <div className="w-full md:w-1/2 grid grid-cols-1 gap-4">
      <div className="bg-gray-600/15 p-4 rounded-lg flex items-center justify-center">
        <Image
          src="/noteApp.png"
          width={500}
          height={500}
          alt="Full-stack note app screenshot"
          className="rounded-md object-cover"
          priority
        />
      </div>
    </div>
    <div className="w-full md:w-1/2 flex flex-col justify-center">
      <h2 className="text-2xl font-semibold mb-3 text-purple-500 hover:underline cursor-pointer" onClick={()=>router.push("https://note-pvt.vercel.app")}>Note APP</h2>
      <p className="text-white/50 leading-relaxed">
        This is a full-stack note application built using NextJS for the backend and frontend.
        It features secure user authentication with JWT, supporting registration, login, logout, token management, 
        automatic token refresh, and blacklist handling for enhanced security. Users can perform CRUD operations.
        The App is hosted on a Vercel.
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {["NextJS", "JavaScript", "Tailwind", "GitHub" , "PostMan", "JWT", "API"].map((tech) => (
          <span
            key={tech}
            className="bg-gray-400/20 text-white/70 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
  <div className="w-full max-w-6xl bg-gray-600/10 rounded-xl shadow-lg overflow-hidden md:flex gap-8 p-6 mt-3">
    <div className="w-full md:w-1/2 grid grid-cols-1 gap-4">
      <div className="bg-gray-600/15 p-4 rounded-lg flex items-center justify-center">
        <Image
          src="/deenify.png"
          width={500}
          height={500}
          alt="Full-stack note app screenshot"
          className="rounded-md object-cover"
          priority
        />
      </div>
    </div>
    <div className="w-full md:w-1/2 flex flex-col justify-center">
      <h2 className="text-2xl font-semibold mb-3 text-purple-500 hover:underline cursor-pointer" onClick={()=>router.push("http://deeenify.vercel.app/")}>Deenify</h2>
      <p className="text-white/50 leading-relaxed">
        Developed by NextJS TypeScript. Deeenify is your AI companion for Islamic knowledge and emotional support.
        is offer a meaningful platform where users can explore Islamic teachings, seek guidance, and find comfort in their everyday lives.
        Whether you are searching for answers, emotional healing, or simply want to learn more about Islam, Deeenify is here to support you.
        The App is hosted on a Vercel.
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {["NextJS", "TypeScript", "Tailwind", "GitHub" ].map((tech) => (
          <span
            key={tech}
            className="bg-gray-400/20 text-white/70 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>
<div className=" w-full flex flex-col items-center mt-10 px-4 mb-20">
  <h1 className="text-3xl font-bold mb-10 flex items-center gap-2">
    Education <span>🎓</span>
  </h1>

  <div className="relative border-l-5 border-purple-500 pl-6 space-y-8 max-w-2xl w-full">
    
    <div className="bg-gray-600/10 rounded-xl shadow-lg p-6 relative">
      <div className="absolute -left-6 top-6 flex items-center justify-center w-12 h-12 rounded-full bg-gray-600/30 border-2 border-gray-600">
        🎓
      </div>
      <h2 className="text-xl font-bold text-red-400">Salim Habib University</h2>
      <p className="text-gray-300">Bachelor of Computer Science (BSCS)</p>
      <div className="flex items-center gap-2 mt-2 text-gray-500">
        <span>2024 - Present</span>
      </div>
    </div>

  </div>
</div>

<section className=" w-full flex flex-col items-center mt-10 px-4 mb-5" id="contact">
  <h1 className="text-3xl font-bold mb-10">Contact Me</h1>

  <div className="bg-gray-600/10 rounded-2xl shadow-lg p-6 w-full max-w-5xl flex flex-wrap gap-6 justify-center">
    
    <a
      href="mailto:arafmuhammad2008@gmail.com"
      className="flex items-center gap-3 bg-gray-500/15 rounded-xl shadow-md py-2 px-6 hover:shadow-lg transition"
    >
      <span className="text-purple-400">Email</span>
    </a>
    <a
      href="https://www.linkedin.com/in/muhammad-araf-b978b6333"
      target="_blank"
      className="flex items-center gap-3 bg-gray-500/15 rounded-xl shadow-md py-2 px-6 hover:shadow-lg transition"
    >
      <span className="text-purple-400">LinkedIn</span>
    </a>
    <a
      href="https://github.com/muhammad-araf"
      target="_blank"
        className="flex items-center gap-3 bg-gray-500/15 rounded-xl shadow-md py-2 px-6 hover:shadow-lg transition"
    >
      <span className="text-purple-400">GitHub</span>
    </a>
    <a
      href="https://wa.me/+923146337881"
      target="_blank"
        className="flex items-center gap-3 bg-gray-500/15 rounded-xl shadow-md py-2 px-6 hover:shadow-lg transition"
    >
      <span className="text-purple-400">WhatsApp</span>
    </a>
  </div>
</section>


    </>
  );
}

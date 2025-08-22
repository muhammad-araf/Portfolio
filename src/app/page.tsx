"use client"
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaHtml5, FaCss3, FaNode, FaAtlassian, FaBars, FaTimes, FaJs, FaJava } from "react-icons/fa";
import { RiReactjsFill, RiNextjsFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full flex items-center justify-center px-4 py-4 z-50"
      >
        <motion.nav
          variants={navVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-between w-full max-w-6xl bg-transparent pl-6 pr-6 pt-5 pb-5 rounded-xl backdrop-blur-lg shadow-xl "
        >
          <motion.div variants={itemVariants} className="flex items-center space-x-3">
            <Link
              href="/"
              className="px-4 py-2 rounded-md text-purple-300 hover:text-white transition duration-300 flex items-center space-x-3 group"
            >
              <FaAtlassian className="group-hover:scale-110 transition-transform duration-300" />
              <h1 className="text-lg md:text-xl font-serif font-bold tracking-tight">Portfolio</h1>
            </Link>
          </motion.div>
          <motion.div variants={navVariants} className="hidden md:flex items-center space-x-6">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <motion.div key={item} variants={itemVariants}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 rounded-md text-purple-300 hover:bg-purple-600/20 hover:text-white transition duration-300 font-medium text-sm md:text-base"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-purple-300 text-2xl hover:scale-110 transition-transform duration-300"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </motion.div>
        </motion.nav>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[95%] max-w-md bg-black/95 rounded-xl shadow-2xl p-6 md:hidden border border-gray-800"
            >
              <div className="flex flex-col space-y-3">
                {["About", "Skills", "Projects", "Contact"].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="block px-4 py-3 rounded-lg text-purple-300 text-base font-medium hover:text-white hover:bg-purple-600/30 transition duration-300"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-6 pb-20 gap-12 sm:p-10 bg-gradient-to-b from-purple-900/10 via-purple-900/40 to-[#7a07de52]
"
      >
        <main className="flex flex-col gap-10 row-start-2 items-center sm:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}  
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center w-full space-y-4 text-center"
          >
            <p className="text-sm text-pink-200 tracking-wider">Hi, I am</p>
            <h1 className="text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight">
              Muhammad <span className="text-purple-200">Araf</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-serif font-semibold mt-3 bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
              Software Developer

            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4 items-center flex-col sm:flex-row w-full justify-center"
          >
            <a
              className="rounded-full border border-purple-500 bg-purple-600 text-white font-medium text-sm h-10 px-6 hover:bg-purple-700 hover:scale-105 transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
              href="/Muhammad_Araf.pdf"
              download="Muhammad_Araf.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
            <a
              className="rounded-full border border-purple-500/50 text-purple-300 font-medium text-sm h-10 px-6 hover:bg-purple-600/20 hover:text-white hover:scale-105 transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
              href="/Muhammad_Araf.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4 items-center flex-row justify-center w-full"
          >

            <FaGithub className="h-10 w-10 p-2 cursor-pointer hover:bg-purple-600/20 hover:scale-110 transition-all duration-300 rounded-full text-white" />
            <BsLinkedin className="h-10 w-10 p-2 cursor-pointer hover:bg-purple-600/20 hover:scale-110 transition-all duration-300 rounded-full text-white" />
          </motion.div>
        </main>
      </motion.div>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="min-h-screen w-full flex flex-col justify-center items-center mb-10 "
        id="about"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-purple-400 p-3 border-b-4 border-purple-500 font-sans font-extrabold tracking-wider"
        >
          About Me
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/80 w-[90%] md:w-[70%] text-base md:text-lg mt-8 leading-relaxed text-center"
        >
          As a software developer with a passion for programming and problem-solving, I am eager to apply my skills in C++, Java, and JavaScript to create innovative solutions. With a solid foundation built through academic projects and self-learning, I am equipped to tackle challenges and deliver high-quality results. I have showcased my abilities through diverse projects and have applied my programming skills to solve real-world problems.
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="min-h-screen w-full flex flex-col justify-center items-center mt-10 "
        id="skills"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl text-purple-400 p-3 border-b-4 border-purple-500 font-sans font-extrabold tracking-wider"
        >
          Skills
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/80 w-[90%] md:w-[70%] text-base md:text-lg mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="p-4"
          >
            <div className="flex flex-col items-center gap-4">
              <p className="text-lg text-purple-300 font-bold">Programming Languages</p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: TbBrandCpp, name: "C++" },
                  { icon: FaJs, name: "JavaScript" },
                  { icon: FaJava, name: "Java" },
                ].map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <skill.icon className="text-white w-16 h-16 bg-gray-800 rounded-lg p-3" />
                    <p className="text-sm bg-purple-600/20 text-white px-3 py-1 rounded-lg">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="p-4"
          >
            <div className="flex flex-col items-center gap-4">
              <p className="text-lg text-purple-300 font-bold">Backend Development</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: FaNode, name: "Node.js" },
                  { icon: RiNextjsFill, name: "Next.js" },
                ].map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <skill.icon className="text-white w-16 h-16 bg-gray-800 rounded-lg p-3" />
                    <p className="text-sm bg-purple-600/20 text-white px-3 py-1 rounded-lg">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="p-4"
          >
            <div className="flex flex-col items-center gap-4">
              <p className="text-lg text-purple-300 font-bold">Frontend Development</p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: FaHtml5, name: "HTML" },
                  { icon: FaCss3, name: "CSS" },
                  { icon: RiReactjsFill, name: "React.js" },
                  { icon: RiNextjsFill, name: "Next.js" },
                  { icon: RiTailwindCssLine, name: "Tailwind CSS" },
                ].map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <skill.icon className="text-white w-16 h-16 bg-gray-800 rounded-lg p-3" />
                    <p className="text-sm bg-purple-600/20 text-white px-3 py-1 rounded-lg">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="p-4"
          >
            <div className="flex flex-col items-center gap-4">
              <p className="text-lg text-purple-300 font-bold">Database</p>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-2"
              >
                <SiMongodb className="text-white w-16 h-16 bg-gray-800 rounded-lg p-3" />
                <p className="text-sm bg-purple-600/20 text-white px-3 py-1 rounded-lg">MongoDB</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="min-h-screen w-full flex flex-col items-center mt-10 px-4 mb-20 "
        id="projects"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold mb-10 text-purple-400"
        >
          Projects
        </motion.h1>
        {[
          {
            title: "Note APP",
            url: "https://note-pvt.vercel.app",
            description:
              "This is a full-stack note application built using NextJS for the backend and frontend. It features secure user authentication with JWT, supporting registration, login, logout, token management, automatic token refresh, and blacklist handling for enhanced security. Users can perform CRUD operations. The App is hosted on a Vercel.",
            image: "/noteApp.png",
            tech: ["NextJS", "JavaScript", "Tailwind", "GitHub", "PostMan", "JWT", "API"],
          },
          {
            title: "Deenify",
            url: "http://deeenify.vercel.app/",
            description:
              "Developed by NextJS TypeScript. Deeenify is your AI companion for Islamic knowledge and emotional support. is offer a meaningful platform where users can explore Islamic teachings, seek guidance, and find comfort in their everyday lives. Whether you are searching for answers, emotional healing, or simply want to learn more about Islam, Deeenify is here to support you. The App is hosted on a Vercel.",
            image: "/deenify.png",
            tech: ["NextJS", "TypeScript", "Tailwind", "GitHub"],
          },
        ].map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="w-full max-w-6xl bg-gray-900/20 rounded-xl shadow-xl overflow-hidden md:flex gap-6 p-6 mb-6 "
          >
            <div className="w-full md:w-1/2 grid grid-cols-1 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800/10 p-4 rounded-lg flex items-center justify-center"
              >
                <Image
                  src={project.image}
                  width={500}
                  height={500}
                  alt={`${project.title} screenshot`}
                  className="rounded-md object-cover"
                  priority
                />
              </motion.div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
              <motion.h2
                whileHover={{ scale: 1.05 }}
                className="text-xl md:text-2xl font-semibold mb-3 text-purple-400 hover:underline cursor-pointer"
                onClick={() => router.push(project.url)}
              >
                {project.title}
              </motion.h2>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.1 }}
                    className="bg-purple-600/20 text-white/80 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.section>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full flex flex-col items-center mt-10 px-4 mb-20 "
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold mb-10 flex items-center gap-2 text-purple-400"
        >
          Education <span>🎓</span>
        </motion.h1>
        <div className="relative border-l-5 border-purple-500 pl-6 space-y-8 max-w-2xl w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/50 rounded-xl shadow-xl p-6 relative border border-gray-800"
          >
            <div className="absolute -left-6 top-6 flex items-center justify-center w-12 h-12 rounded-full bg-gray-600/30 border-2 border-purple-500/50">
              🎓
            </div>
            <h2 className="text-lg md:text-xl font-bold text-red-600">Salim Habib University</h2>
            <p className="text-gray-300 text-sm md:text-base">Bachelor of Computer Science (BSCS)</p>
            <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
              <span>2024 - Present</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full flex flex-col items-center mt-10 px-4 mb-20 bg-transparent"
        id="contact"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold mb-10 text-purple-400"
        >
          Contact Me
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-900/50 rounded-2xl shadow-xl p-6 w-full max-w-5xl flex flex-wrap gap-4 justify-center border border-gray-800"
        >
          {[
            { name: "Email", href: "mailto:arafmuhammad2008@gmail.com" },
            { name: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-araf-b978b6333" },
            { name: "GitHub", href: "https://github.com/muhammad-araf" },
            { name: "WhatsApp", href: "https://wa.me/+923146337881" },
          ].map((contact) => (
            <motion.a
              key={contact.name}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.2)" }}
              transition={{ duration: 0.3 }}
              href={contact.href}
              target="_blank"
              className="flex items-center gap-3 bg-gray-800 rounded-xl shadow-md py-2 px-6 text-purple-300 hover:text-white transition text-sm md:text-base"
            >
              <span>{contact.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}
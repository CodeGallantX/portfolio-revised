import { FaGithub, FaWhatsapp, FaInstagram, FaEnvelope, FaDiscord } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 items-center justify-center py-32 md:py-40 min-h-screen px-10 md:px-16 lg:px-20 xl:px-40 bg-white">
      <div className="h-3/4 md:h-auto w-2/3 md:w-10/12 mx-auto md:mx-0">
        <img
          src="/profile.jpg"
          alt="profile-pic"
          className="rounded-3xl md:rounded-xl object-cover"
        />
      </div>
      <div className="flex flex-col items-center md:items-start justify-center space-y-6">
        <h3 className="text-lg md:text-xl">Hello, I&apos;m Samuel John</h3>
        <p className="text-primary text-4xl lg:text-5xl font-bold">
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              7000,
              "Backend Developer",
              2000,
              "Data Analyst",
              2000,
              "AI/ML Engineer", 
              2000,
            ]}
            speed={50}
            wrapper="span"
            repeat={Infinity}
          />
        </p>
        <p className="text-lg text-left leading-loose">
        I build fast, responsive, and user-friendly web apps that work smoothly on any device. I focus on clean design, seamless interactions, and performance optimization. Beyond the frontend, I explore backend development and dive into data analysis, machine learning, and AI integration to create smarter, more efficient solutions.
        </p>
        <div className="flex flex-row space-x-6 items-start text-left justify-center">
          <a href="https://wa.me/08096044860" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-2xl text-gray-600" />
          </a>
          <a href="#">
            <FaInstagram className="text-2xl text-gray-600" />
          </a>
          <a href="#">
            <FaDiscord className="text-2xl text-gray-600" />
          </a>
          <a href="#">
            <FaEnvelope className="text-2xl text-gray-600" />
          </a>
          <a href="#">
            <FaGithub className="text-2xl text-gray-600" />
          </a>
        </div>
        <a
          href="#"
          className="bg-primary text-white rounded-lg py-3 px-6 scale-105 transition-all duration-300 text-lg md:text-xl"
        >
          Let&apos;s chat
        </a>
      </div>
    </section>
  );
}

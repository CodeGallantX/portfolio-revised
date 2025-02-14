import Header from "../components/HeaderComponent"
import TechStack from "../components/TechStack"
import Footer from "../components/Footer"

const About = () => {
  return (
    <div>
      <Header />
      <div className="py-40 min-h-screen px-10 md:px-16 lg:px-20 xl:px-40 bg-white space-y-20">
        <h1 className="text-center text-xl font-semibold">About Me</h1>
        <p className="text-center">”What defines a transformer is not the cog in its chest, but the spark that resides in their core“ – Alpha Trion</p>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start justify-center text-center">
          <div className="h-auto w-auto md:w-10/12">
            <img src="/profile.jpg" alt="profile-pic" className="rounded-3xl md:rounded-lg object-cover" />
          </div>
          <div className="flex flex-col items-start justify-center space-y-6 mt-10 md:mt-0">
            <h1 className="text-3xl md:text-5xl text-left">Hello, I&apos;m Samuel Ayobami John</h1>
            <p className="text-lg text-left">
              I craft seamless, high-performing web experiences with a keen eye for design and functionality.
              While frontend development is my core strength, I also explore backend development and AI to build smart, impactful solutions.
            </p>

            <div>
              <h1 className="text-left mb-2">Career Focus</h1>
              <p className="text-lg text-left">
                My passion lies in creating intuitive and dynamic web applications that make a difference.
                I blend innovation with practicality, leveraging both frontend expertise and backend knowledge to develop full-stack solutions
                that solve real-world problems.
              </p>
            </div>

            <div>
              <h1 className="text-left mb-2">Education</h1>
              <p className="text-lg text-left">
                I’m currently pursuing a Bachelor’s degree in Computer Science at Lagos State University of Science and Technology.
                This journey continues to sharpen my problem-solving skills and deepen my understanding of technology’s role in shaping the future.
              </p>
            </div>

            <div>
              <h1 className="text-left mb-2">Beyond Code</h1>
              <p className="text-lg text-left">
                Outside of coding, I love exploring creative ideas, mentoring aspiring developers, and diving into AI and research-driven projects
                that inspire change. I also enjoy great music and helping others unlock their full potential. Let’s connect! 😊
              </p>
            </div>
          </div>

        </section>
        <TechStack />
      </div>
      <Footer />
    </div>
  )
}

export default About;
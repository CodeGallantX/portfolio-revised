import Header from "../components/HeaderComponent"
import TechStack from "../components/TechStack"

const About = () => {
  return (
    <div>
      <Header />
      <div className="py-40 min-h-screen px-10 md:px-16 lg:px-20 xl:px-40 bg-white space-y-20">
        <h1 className="text-center text-xl font-semibold">About Me</h1>
        <em className="text-center">”What defines a transformer is not the cog in its chest, but the spark that resides in their core“ – Alpha Trion</em>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start justify-center text-center">
          <div className="h-auto w-auto md:w-10/12">
            <img src="/profile.jpg" alt="profile-pic" className="rounded-3xl md:rounded-lg object-cover" />
          </div>
          <div className="flex flex-col items-start justify-center space-y-6 mt-10 md:mt-0">
            <h1 className="text-3xl md:text-5xl text-left">Hello, I&apos;m Samuel Ayobami John</h1>
            <p className="text-lg text-left">I’m a skilled Frontend Developer with moderate backend expertise, focused on building fast, intuitive, and impactful web applications. I specialize in combining clean, modern designs with practical functionality to deliver seamless user experiences on any device.</p>

            <div>
              <h1 className="text-left mb-2">Career Focus</h1>
              <p className="text-lg text-left">I have solid expertise in frontend tools like React, Next.js, Tailwind CSS, and JavaScript. On the backend, I work with Python, Django, and Streamlit to craft full-stack solutions that deliver real value and create a lasting impact.</p>
            </div>
            <div>
              <h1 className="text-left mb-2">Education</h1>
              <p className="text-lg text-left">I’m currently pursuing a Bachelor’s degree in Computer Science at Lagos State University of Science and Technology. This academic journey not only strengthens my technical foundation but also hones my problem-solving skills to tackle real-world challenges.</p>
            </div>
            <div>
              <h1 className="text-left mb-2">Community Impact</h1>
              <p className="text-lg text-left">Giving back to the community is a big part of who I am. I’ve contributed to impactful projects like Donify and Cycle-It, which promote sharing and collaboration in local communities and address waste management for a cleaner environment.</p>
            </div>
            <div>
              <h1 className="text-left mb-2">Beyond Code</h1>
              <p className="text-lg text-left">When I’m not immersed in coding, I’m busy exploring creative ideas, mentoring others, and diving into research that drives meaningful change. I also enjoy listening to great music and helping people become the best version of themselves. Let’s connect! 😊</p>
            </div>

          </div>
        </section>
        <TechStack />
      </div>
    </div>
  )
}

export default About;
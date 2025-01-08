import { FaEnvelope, FaWhatsapp } from "react-icons/fa6"

const Footer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-10 md:px-16 lg:px-20 xl:px-40 py-32">
            <div>
                <h1 className="text-primary text-5xl font-bold leading-loose">Send a Message</h1>
                <p className="leading-loose text-lg">I&apos;m currently available to take on new projects, so feel free to send me a message about anything you&apos;d like me to work on.</p>
                <div className="mt-4 space-y-3">
                    <a href="#" className="flex flex-row items-center justify-start space-x-2 text-lg font-medium">
                        <FaEnvelope className="text-gray-600 text-2xl" />
                        <span>johnayobami77@proton.me</span>
                    </a>
                    <a href="#" className="flex flex-row items-center justify-start space-x-2 text-lg font-medium">
                        <FaWhatsapp className="text-gray-600 text-2xl" />
                        <span>+234 809 604 4860</span>
                    </a>
                </div>
            </div>
            <div>
                <form action="" className="space-y-3">
                    <fieldset className="flex flex-col items-start justify-center space-y-1 font-medium">
                        <label htmlFor="name" className="text-lg ml-2">Name</label>
                        <input type="text" id="name" className="w-full p-3 text-gray-700 shadow-sm focus:shadow-md border-2 border-solid border-gray-200 rounded-full outline-none focus:border-primary transition-all duration-300 ease-in-out" />
                    </fieldset>
                    <fieldset className="flex flex-col items-start justify-center space-y-1 font-medium">
                        <label htmlFor="email" className="text-lg ml-2">Email</label>
                        <input type="email" id="email" className="w-full p-3 text-gray-700 shadow-sm focus:shadow-md border-2 border-solid border-gray-200 rounded-full outline-none focus:border-primary transition-all duration-300 ease-in-out" />
                    </fieldset>

                    <fieldset className="flex flex-col items-start justify-center space-y-1 font-medium">
                        <label htmlFor="reason" className="text-lg font-medium ml-2">Reason for message</label>
                        <select name="" id="reason" className="w-full p-3 text-gray-700 shadow-sm focus:shadow-md border-2 border-solid border-gray-200 rounded-full outline-none focus:border-primary transition-all duration-300 ease-in-out">
                            <option value="">Select a reason</option>
                            <option value="job">I have a job for you</option>
                            <option value="collaboration">Let&apos;s build something together</option>
                            <option value="question">Just wanted to ask a thing or two</option>
                            <option value="feedback">I have some feedback for you</option>
                        </select>
                    </fieldset>

                    <fieldset className="flex flex-col items-start justify-center space-y-1">
                        <label htmlFor="reason" className="text-lg font-medium ml-2">Write your message here</label>
                        <textarea name="" id="reason" rows={4} placeholder="Hi John, I just wanted to..." className="w-full px-3 py-2 text-gray-700 shadow-sm focus:shadow-md border-2 border-solid border-gray-200 rounded-2xl outline-none focus:border-primary transition-all duration-300 ease-in-out">
                        </textarea>
                    </fieldset>
                    <button className="bg-primary py-3 px-8 rounded-full text-white text-lg mt-1">
                        Send Message
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Footer
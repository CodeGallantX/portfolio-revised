import { useState, useEffect } from "react";
import Header from "../components/HeaderComponent";
import Footer from "../components/Footer";
import projectsData from "../../data/projects.json";
import { FaGithub, FaLink } from "react-icons/fa6"

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            setProjects(projectsData);
        } catch (err) {
            setError("Failed to load projects");
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <div>
            <Header />
            <div className="py-20 pt-40 px-10 md:px-16 lg:px-20 xl:px-40">
                <h3 className="text-center font-bold text-3xl">Projects</h3>
                {isLoading ? (
                    <div className="spinner text-lg text-center">Loading...</div>
                ) : error ? (
                    <div className="bg-red-100 text-red-500 font-bold border-l-2 border-l-red-500 p-2">
                        {error}
                    </div>
                ) : projects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="relative group w-full max-w-lg flex flex-col items-start justify-start space-y-2 bg-zinc-50 p-4 rounded-2xl"
                            >
                                <div className="w-full h-full absolute border-2 border-primary/80 -right-4 -bottom-4 -translate-y-4 -translate-x-4 rounded-2xl opacity-0 -z-10 group-hover:opacity-100 group-hover:-translate-y-0 group-hover:-translate-x-0 transition-all duration-300 ease-in-out"></div>

                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="rounded-lg w-full max-w-md h-[180px]"
                                />
                                <div className="pl-2 space-y-3">

                                    <h2 className="text-2xl font-bold mt-1">{project.title}</h2>

                                    <p className="text-slate-700">{project.description}</p>

                                    <ul className="flex flex-wrap gap-4">
                                        {project.tech_stack.map((tool, idx) => (
                                            <li key={idx} className="bg-gray-100 p-1 text-sm">
                                                {tool}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="space-x-6 text-primary text-sm">
                                        <a
                                            href={project.github_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaGithub className="inline-block mr-1" />
                                            GitHub
                                        </a>
                                        <a
                                            href={project.demo_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        > <FaLink className="inline-block mr-1" />
                                            Visit Website
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>No projects available</div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Portfolio;

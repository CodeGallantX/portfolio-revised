import { useState, useEffect } from "react";
import Header from "../components/HeaderComponent";
import Footer from "../components/Footer";
import projectsData from "../../data/projects.json";

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
                                className="relative group w-full max-w-lg flex flex-col items-start justify-start space-y-4 bg-white py-1 px-2 rounded-xl"
                            >
                                <div className="w-full h-full absolute bg-primary/80 -right-4 -bottom-4 -translate-y-6 -translate-x-6 rounded-lg opacity-0 -z-10 group-hover:opacity-100 group-hover:-translate-y-0 group-hover:-translate-x-0 transition-all duration-300 ease-in-out"></div>
                                
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="rounded-lg"
                                />

                                <h2 className="text-3xl font-bold">{project.title}</h2>

                                <p>{project.description}</p>

                                <ul className="flex flex-wrap gap-4">
                                    {project.tech_stack.map((tool, idx) => (
                                        <li key={idx} className="bg-gray-100 p-1 text-sm">
                                            {tool}
                                        </li>
                                    ))}
                                </ul>

                                <div className="space-x-6 text-primary">
                                    <a
                                        href={project.github_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={project.demo_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Visit Website
                                    </a>
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

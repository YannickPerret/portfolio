import Image from 'next/image';
import Link from "next/link";

const Projects = () => {
    const projects = [
        {
            title: 'Projet 1',
            description: 'Description du projet 1.',
            image: '/images/project1.jpg',
            link: '#',
        },
        {
            title: 'Projet 2',
            description: 'Description du projet 2.',
            image: '/images/project2.jpg',
            link: '#',
        },
        {
            title: 'Projet 3',
            description: 'Description du projet 2.',
            image: '/images/project2.jpg',
            link: '#',
        },
        {
            title: 'Projet 4',
            description: 'Description du projet 2.',
            image: '/images/project2.jpg',
            link: '#',
        },
    ];

    return (
        <section id="projets" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-sky-700 mb-12">Mes Projets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                                <Link
                                    href={project.link}
                                    className="text-blue-500 hover:text-blue-700 font-semibold"
                                >
                                    Voir le projet &rarr;
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
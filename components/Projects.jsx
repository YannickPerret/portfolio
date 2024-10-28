'use client';
import Image from 'next/image';
import Link from "next/link";
import arcanastream from "@public/images/projects/arcanastream.png";
import coworking from "@public/images/projects/coworking.png";
import oneconseils from "@public/images/projects/oneconseils.png";
import invisiblecom from "@public/images/projects/Invisible.jpeg";
import sekoya from "@public/images/projects/sekoya.png";

const Projects = () => {
    const projects = [
        {
            title: 'Projet 1',
            description: 'Une application permettant de gérer les tâches quotidiennes avec une interface intuitive.',
            image: arcanastream,
            link: 'https://example.com/projet1',
            languages: ['React', 'Node.js', 'Tailwind CSS'],
        },
        {
            title: 'Projet 2',
            description: 'Un site e-commerce moderne avec intégration de paiement.',
            image: coworking,
            link: 'https://example.com/projet2',
            languages: ['Next.js', 'Stripe', 'MongoDB'],
        },
        {
            title: 'Projet 3',
            description: 'Un tableau de bord analytique pour suivre les performances en temps réel.',
            image: oneconseils,
            link: 'https://example.com/projet3',
            languages: ['Vue.js', 'Firebase', 'Sass'],
        },
        {
            title: 'Projet 4',
            description: 'Une application de chat en temps réel avec notifications.',
            image: invisiblecom,
            link: 'https://example.com/projet4',
            languages: ['Angular', 'Socket.io', 'Express'],
        },
        {
            title: 'Projet 5',
            description: 'Une plateforme pour les espaces de coworking.',
            image: sekoya,
            link: 'https://example.com/projet5',
            languages: ['React', 'Firebase', 'Material UI'],
        },
    ];

    return (
        <section id="projets" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-sky-700 mb-12">Mes Projets</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 auto-rows-fr">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl ${
                                index === 0 ? "md:col-span-1 md:row-span-2" : ""
                            }`}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={400}
                                className={`w-full ${index === 0 ? 'h-[50rem]' : 'h-96'} object-top object-cover transition-transform duration-300 ease-in-out group-hover:scale-110`}
                            />

                            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                                    <p className="text-white text-sm mb-4">{project.description}</p>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.languages.map((language, idx) => (
                                        <span key={idx} className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">
                                            {language}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    href={project.link}
                                    className="inline-block bg-sky-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-sky-400 transition-all duration-300"
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

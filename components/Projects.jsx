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
            title: 'Arcana Stream',
            description: 'Un Saas permettant de diffuser des vidéos en direct.',
            image: arcanastream,
            link: 'https://arcanastream.io',
            languages: ['Next.js', 'Tailwind CSS', 'AdonisJS', 'Redis', 'MySQL', 'FFmpeg', 'Gstreamer', 'SSE', 'CronJob', 'Stripe'],
            slug: 'arcana-stream',
        },
        {
            title: 'Coworking',
            description: 'Une extension de système à One-Conseils pour gérer leurs espaces de coworking, notamment les réservations.',
            image: coworking,
            link: 'https://coworking.oneconseils.ch',
            languages: ['Next.js', 'Tailwind CSS', 'AdonisJS', 'MySQL'],
            slug: 'coworking',
        },
        {
            title: 'One Conseils',
            description: 'Un site vitrine pour l\'entreprise One Conseils.',
            image: oneconseils,
            link: 'https://oneconseils.ch',
            languages: ['Next.js', 'Tailwind CSS', 'AdonisJS', 'MySQL'],
            slug: 'one-conseils',
        },
        {
            title: 'InvisibleCom',
            description: 'Un site vitrine pour une entreprise dans le domaine de la communication et du marketing, malheureusement l\'entreprise a fermé.',
            image: invisiblecom,
            link: null,
            languages: ['HTML5', 'CSS3', 'JavaScript'],
            slug: 'invisiblecom',
        },
        {
            title: 'Sekoya',
            description: 'Un site e-commerce pour une entreprise dans le domaine de la santé, vente de compléments alimentaires naturels.',
            image: sekoya,
            link: 'https://sekoya.swiss',
            languages: ['Shopify', 'Liquid', 'JavaScript', 'HTML5', 'CSS3'],
            slug: 'sekoya',
        },
    ];

    return (
        <section id="projets" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-sky-700 mb-12">Mes Projets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
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
                                className={`w-full h-[20rem] ${index === 0 ? 'md:h-[50rem]' : 'md:h-96'} object-top object-cover transition-transform duration-300 ease-in-out group-hover:scale-110`}
                            />

                            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between">
                                <div className={`flex flex-col justify-between h-auto`}>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                                        <p className="text-white text-sm mb-4">{project.description}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.languages.map((language, idx) => (
                                            <span key={idx}
                                                  className="bg-teal-800 text-white px-3 py-1 rounded-full text-sm">
                                            {language}
                                        </span>
                                        ))}
                                    </div>

                                </div>


                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className="inline-block bg-sky-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-sky-400 transition-all duration-300">
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

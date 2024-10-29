'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import projectsData from "@datas/projects.json";

const ShowProject = ({ project }) => {
    return (
        <section id="show-project" className="py-4 bg-gray-100">
            <div className="relative w-full h-[45rem]">
                <Image
                    src={project.mainImage}
                    alt={`Image principale du projet ${project.title}`}
                    layout="fill"
                    className="object-cover object-top w-full h-full"
                />
            </div>
            <div className="container mx-auto px-6">
                <div>
                    <Link href={`/#projects`} scroll={true}
                          className="inline-block text-black py-3 px-6 rounded transition duration-300 hover:underline">
                        {'<'} Retour à la liste des projets
                    </Link>
                </div>
                <h1 className="text-5xl font-bold text-sky-700 mb-8 text-center">{project.title}</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-4xl font-semibold text-gray-800 mb-6">{project.subtitle}</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            {project.description}
                        </p>
                    </div>
                    <div className="lg:col-span-1">
                        <div className="bg-gray-200 p-6 rounded-lg">
                            <h3 className="text-2xl font-bold mb-4 text-black">Informations</h3>
                            <p className="font-semibold text-gray-700">Client :</p>
                            <p className="mb-4 text-gray-600">{project.client}</p>
                            <p className="font-semibold text-gray-700">Secteur d&apos;activités :</p>
                            <p className="mb-4 text-gray-600">{project.sectors.join(', ')}</p>
                            <p className="font-semibold text-gray-700">Année :</p>
                            <p className="text-gray-600">{project.year}</p>
                            <p className="font-semibold text-gray-700">Langages utilisés :</p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.languages.map((language, index) => (
                                    <span key={index} className="bg-teal-800 text-white px-3 py-1 rounded-full text-sm">
                                        {language}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">Images du projet</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {project.images.map((image, index) => (
                            <div key={index} className="w-full h-64 relative">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={600}
                                    height={600}
                                    className="object-top object-cover rounded-lg shadow-md"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-16">
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">Détails du projet</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{project.approach}</p>
                </div>
                <div className="flex justify-end mt-12">
                    {project.url ? (
                        <Link href={project.url}
                              className="inline-block bg-teal-500 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded transition duration-300">
                            Accéder au site
                        </Link>
                    ) : (
                        <span
                            className="inline-block bg-gray-300 text-gray-600 font-semibold py-3 px-6 rounded cursor-not-allowed">
                            Site non disponible
                        </span>
                    )}
                    <Link href="/#projects"
                          className="inline-block bg-sky-500 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded transition duration-300 ml-4">
                        Retour aux projets
                    </Link>
                </div>
            </div>
        </section>
    );
};

const ProjectPage = ({slug}) => {
    const projectData = projectsData.projects.find(project => project.slug === slug);

    if (!projectData) {
        return <p>Projet non trouvé</p>;
    }

    return <ShowProject project={projectData}/>;
};

export default ProjectPage;
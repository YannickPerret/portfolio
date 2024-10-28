'use client';
import { FaCheckCircle } from 'react-icons/fa';
import React from 'react';

const Resume = () => {
    const experiences = [
        {
            type: 'Formation',
            title: 'Diplôme Technicien ES en Développement Applications',
            company: 'Centre Professionnel du Nord Vaudois (CPNV)',
            period: '2022 - 2024 (2 ans)',
            description: '(2 ans)',
        },
        {
            type: 'Formation',
            title: 'Certificat ITILV3 Foundation',
            company: 'Altran Éducation Services',
            period: '2016 (5 jours)',
            description: '(5 jours)',
        },
        {
            type: 'Formation',
            title: 'CFC Informaticien de Gestion',
            company: 'Centre Professionnel du Nord Vaudois (CPNV)',
            period: '2011 - 2016 (5 ans)',
            description: '(5 ans)',
        },
        {
            type: 'Expérience',
            title: 'Développeur Web (Travail de Diplôme)',
            company: 'Raptor Lab, 1008 Prilly',
            period: '04.2024 – 05.2024 (1.5 mois)',
            description: 'Développement d’un système de streaming vidéo en RTMP avec Adonisjs.',
            projects: [
                {
                    title: 'Développeur Web (Travail de Diplôme)',
                    description: 'Développement d’un système de streaming vidéo en RTMP avec Adonisjs.',
                    hours: '80 heures supervisées',
                    skills: [
                        'Développer une API RESTful avec AdonisJS',
                        'Développer un système de streaming vidéo en RTMP',
                    ],
                },
            ],
        },
        {
            type: 'Expérience',
            title: 'Développeur Web (Stage de formation)',
            company: 'Epsitec Sa, 1400 Yverdon-Les-Bains',
            period: '07.2023 – 10.2023 (2.5 mois)',
            description: 'Développement d’un système de calendrier partagé interne et développement sur framework propriétaire JS.',
            projects: [
                {
                    title: 'Développement d’un calendrier partagé',
                    description: 'Développement d’un système de calendrier partagé interne utilisant un framework propriétaire JS.',
                    skills: [
                        'Création d&apos;un calendrier interactif',
                        'Collaboration inter-équipes pour des fonctionnalités partagées',
                    ],
                },
            ],
        },
        {
            type: 'Expérience',
            title: 'Développeur Web (Stage)',
            company: '5D Multimédia, 1002 Lausanne',
            period: '04.2022 – 07.2022 (3 mois)',
            description: 'Développement Web HTML, SCSS, JavaScript et ReactJS. Développement Web NodeJS, Express et MySQL.',
            projects: [
                {
                    title: 'Développement de sites web interactifs',
                    description: 'Utilisation de technologies front-end (HTML, SCSS, JavaScript, ReactJS) et back-end (NodeJS, Express, MySQL) pour construire des sites interactifs.',
                    skills: [
                        'Intégration de ReactJS pour des interfaces dynamiques',
                        'Création d&apos;API avec NodeJS et Express',
                    ],
                },
            ],
        },
        {
            type: 'Expérience',
            title: 'Développeur Web (Stage)',
            company: 'Lab4Tech, 1002 Lausanne',
            period: '11.2021 – 03.2022 (4 mois)',
            description: 'Développement Web HTML, SCSS, JavaScript et ReactJS. Développement Web NodeJS, Express et MySQL.',
            projects: [
                {
                    title: 'Développement front-end et back-end',
                    description: 'Développement complet de fonctionnalités front-end avec ReactJS et intégration back-end avec NodeJS et MySQL.',
                    skills: [
                        'Mise en place d&apos;interfaces utilisateurs avec ReactJS',
                        'Développement et gestion de base de données MySQL',
                    ],
                },
            ],
        },
        {
            type: 'Expérience',
            title: 'Informaticien de Gestion',
            company: 'Sekoya SA, 1400 Yverdon-les-Bains',
            period: '03.2019 – 11.2020 (1 an 8 mois)',
            description: 'Support informatique, administration des serveurs, gestion administrative, installation réseau et développement Web Shopify.',
            projects: [
                {
                    title: 'Support IT et développement web',
                    description: 'Support de 1er et 2e niveau pour 30 employés, administration de serveurs, et développement de la boutique Shopify.',
                    skills: [
                        'Support informatique pour utilisateurs finaux',
                        'Développement de la boutique en ligne Shopify',
                    ],
                },
            ],
        },
        {
            type: 'Expérience',
            title: 'Freelance eCommerce',
            company: 'Root.Dev, 1400 Yverdon-les-Bains',
            period: '01.2018 – 01.2019 (1 an)',
            description: 'Développement du site internet, mise en page et optimisation SEO, gestion des audiences et entonnoirs de ventes.',
            projects: [
                {
                    title: 'Développement de site e-commerce',
                    description: 'Conception de sites e-commerce, SEO et gestion des campagnes marketing.',
                    skills: [
                        'Optimisation SEO pour améliorer la visibilité',
                        'Création d&apos;entonnoirs de vente pour augmenter les conversions',
                    ],
                },
            ],
        },
        {
            type: 'Expérience',
            title: 'Développeur Web (Stage)',
            company: '5D Multimédia, 1002 Lausanne',
            period: '07.2018 – 08.2018 (2 mois)',
            description: 'Développement Web PHP MVC, cours sur Photoshop, détourage et Webdesign.',
            projects: [
                {
                    title: 'Développement PHP MVC',
                    description: 'Création d&apos;applications web en utilisant le modèle PHP MVC et amélioration des compétences en webdesign.',
                    skills: [
                        'Développement MVC en PHP',
                        'Webdesign et retouche d&apos;images avec Photoshop',
                    ],
                },
            ],
        },
    ];

    return (
        <section id="resume" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Mon Parcours</h2>
                <div className="space-y-12">
                    {experiences.sort((a, b) => {
                        // Custom sorting logic for ordering from most recent to oldest
                        const getDate = (project) => {
                            if (!project.period) return 0;
                            const yearMatch = project.period.match(/\d{4}/g);
                            const year = yearMatch ? parseInt(yearMatch[yearMatch.length - 1], 10) : 0;
                            return isNaN(year) ? 0 : year;
                        };
                        return getDate(b) - getDate(a);
                    }).map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-start space-x-4">
                                <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                                    {item.type === 'Formation' ? 'FOR' : 'EXP'}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                                    <p className="text-gray-700 mb-2">{item.company}</p>
                                    <p className="text-gray-700 mb-4">{item.period}</p>
                                    {item.description && <p className="text-gray-700 mb-4">{item.description}</p>}
                                    {item.projects && item.projects.length > 0 && (
                                        <>
                                            <h4 className="text-xl font-semibold text-teal-600 mb-3">Compétences acquises dans ce projet</h4>
                                            <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                                                <ul className="list-none space-y-4">
                                                    {item.projects.map((project, idx) => (
                                                        <li key={idx} className="flex items-start text-gray-700">
                                                            <div className="flex-shrink-0 mt-1">
                                                                <FaCheckCircle className="text-teal-500 mr-2" />
                                                            </div>
                                                            <div>
                                                                <p className="font-semibold">{project.title}</p>
                                                                <p className="text-sm text-gray-500 mt-1">{project.description}</p>
                                                                {project.skills && (
                                                                    <ul className="list-disc pl-5 mt-2">
                                                                        {project.skills.map((skill, skillIdx) => (
                                                                            <li key={skillIdx} className="text-sm text-gray-600">{skill}</li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Resume;

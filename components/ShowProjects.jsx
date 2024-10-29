'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ShowProject = ({ project }) => {
    return (
        <section id="show-project" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <div>
                    <Link href={`/#projects`} className="inline-block text-black py-3 px-6 rounded transition duration-300 hover:underline">
                        {'<'} Retour à la liste des projets
                    </Link>
                </div>
                <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">{project.title}</h1>
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
                            <p className="font-semibold text-gray-700">Secteur d'activités :</p>
                            <p className="mb-4 text-gray-600">{project.sectors.join(', ')}</p>
                            <p className="font-semibold text-gray-700">Année :</p>
                            <p className="text-gray-600">{project.year}</p>
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
                                    fill
                                    className="object-cover rounded-lg shadow-md"
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
                    {project.url && (
                        <Link href={project.url} className="inline-block bg-teal-500 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded transition duration-300">
                            Accéder au site
                        </Link>
                    )}
                    <Link href="/#projects" className="inline-block bg-sky-500 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded transition duration-300 ml-4">
                        Retour aux projets
                    </Link>
                </div>
            </div>
        </section>
    );
};

const projects = {
    'arcana-stream': {
        title: 'Arcana Stream',
        subtitle: 'Un SaaS permettant de diffuser des vidéos en direct.',
        description: `Arcana Stream est une plateforme qui permet aux utilisateurs de diffuser du contenu vidéo en direct sur plusieurs plateformes simultanément. Elle offre des fonctionnalités avancées telles que la gestion de l'infrastructure via des CronJobs, une intégration avec Stripe pour les paiements, ainsi que des outils de streaming performants comme FFmpeg et Gstreamer.`,
        client: 'Arcana Stream',
        sectors: ['SaaS', 'Streaming', 'Technologie'],
        year: '2024',
        images: [
            { src: '/images/arcana-1.jpg', alt: 'Interface de gestion Arcana Stream' },
            { src: '/images/arcana-2.jpg', alt: 'Diffusion en direct sur Arcana Stream' },
            { src: '/images/arcana-3.jpg', alt: 'Intégration Stripe sur Arcana Stream' },
        ],
        approach: `L'approche du projet Arcana Stream était de créer une plateforme centralisée pour la diffusion multi-plateformes tout en offrant une interface utilisateur facile à utiliser. Nous avons mis en œuvre des technologies modernes pour assurer la performance et la scalabilité de la plateforme.`,
        url: 'https://arcanastream.io',
    },
    'coworking': {
        title: 'Coworking',
        subtitle: 'Gestion des espaces de coworking pour One-Conseils.',
        description: `Ce projet est une extension du système de gestion de One-Conseils, permettant de gérer leurs espaces de coworking. L'application inclut la réservation de salles, la gestion des ressources et une interface simplifiée pour les utilisateurs.`,
        client: 'One-Conseils',
        sectors: ['Coworking', 'Gestion', 'Technologie'],
        year: '2024',
        images: [
            { src: '/images/coworking-1.jpg', alt: 'Réservation de salle de coworking' },
            { src: '/images/coworking-2.jpg', alt: "Vue de l'interface utilisateur pour Coworking" },
        ],
        approach: `Nous avons collaboré avec l'équipe de One-Conseils pour identifier les besoins des utilisateurs finaux et créer une interface intuitive permettant une gestion efficace des espaces de coworking.`,
        url: 'https://coworking.oneconseils.ch',
    },
    'one-conseils': {
        title: 'One Conseils',
        subtitle: "Site vitrine pour l'entreprise One Conseils.",
        description: `Le site web de One Conseils est une vitrine en ligne de leurs services de conseil. Il a été conçu pour refléter l'identité professionnelle de l'entreprise, avec une navigation claire et une mise en page moderne.`,
        client: 'One Conseils',
        sectors: ['Conseil', 'Vitrine', 'Web'],
        year: '2023',
        images: [
            { src: '/images/oneconseils-1.jpg', alt: "Page d'accueil One Conseils" },
            { src: '/images/oneconseils-2.jpg', alt: 'Présentation des services sur le site One Conseils' },
        ],
        approach: `L'approche était de concevoir un site web simple mais professionnel, pour offrir aux clients potentiels une image claire des services proposés par One Conseils tout en optimisant l'expérience utilisateur.`,
        url: 'https://oneconseils.ch',
    },
    'invisiblecom': {
        title: 'InvisibleCom',
        subtitle: 'Site vitrine pour une entreprise dans le domaine de la communication.',
        description: `InvisibleCom était un site vitrine créé pour une entreprise spécialisée dans la communication et le marketing. L'entreprise a depuis fermé, mais le projet représentait un défi de conception et d'identité visuelle.`,
        client: 'InvisibleCom',
        sectors: ['Communication', 'Marketing', 'Vitrine'],
        year: '2023',
        images: [
            { src: '/images/invisiblecom-1.jpg', alt: 'Présentation de la marque InvisibleCom' },
        ],
        approach: `Pour InvisibleCom, l'objectif était de créer une présence en ligne percutante qui transmettrait efficacement l'expertise en communication de l'entreprise tout en se démarquant de la concurrence.`,
    },
    'sekoya': {
        title: 'Sekoya',
        subtitle: 'E-commerce pour compléments alimentaires naturels.',
        description: `Sekoya est un site e-commerce pour une entreprise de compléments alimentaires naturels. Le site a été développé sur Shopify pour offrir une expérience de vente en ligne fluide et sécurisée.`,
        client: 'Sekoya SA',
        sectors: ['E-commerce', 'Santé', 'Vente en ligne'],
        year: '2023',
        images: [
            { src: '/images/sekoya-1.jpg', alt: 'Page produit de Sekoya' },
            { src: '/images/sekoya-2.jpg', alt: "Panier d'achat sur Sekoya" },
        ],
        approach: `Nous avons mis en œuvre une solution Shopify personnalisée pour Sekoya, permettant une gestion facile des produits et un parcours client fluide, tout en intégrant des fonctionnalités marketing avancées.`,
        url: 'https://sekoya.swiss',
    },
};

const ProjectPage = ({slug}) => {

    if (!slug || !projects[slug]) {
        return <p>Projet non trouvé</p>;
    }

    const projectData = projects[slug];

    return <ShowProject project={projectData} />;
};

export default ProjectPage;
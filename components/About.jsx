// components/About.jsx

import Image from 'next/image';
import { FaCode, FaBook, FaGamepad } from 'react-icons/fa';

const About = () => {
    return (
        <section id="àpropos" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                    À Propos de Moi
                </h2>
                <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto">
                    {/* Image de profil */}
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <div className="relative w-48 h-48 mx-auto">
                            <Image
                                src="/images/mon-photo.jpg"
                                alt="Photo de Perret Yannick"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full"
                            />
                        </div>
                    </div>

                    {/* Texte de présentation */}
                    <div className="w-full md:w-2/3 md:pl-8">
                        <p className="text-xl text-gray-700 leading-relaxed mb-6">
                            Bonjour ! Je m&apos;appelle <span className="font-semibold">Perret Yannick</span>, un développeur web full-stack passionné avec plusieurs années d'expérience dans la création d'applications web modernes et réactives. J'adore explorer de nouvelles technologies et améliorer continuellement mes compétences pour offrir les meilleures solutions à mes clients.
                        </p>
                        {/* Hobbies */}
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Mes Hobbies
                        </h3>
                        <ul className="list-none text-gray-700 mb-6">
                            <li className="flex items-center mb-2">
                                <FaCode className="mr-2 text-blue-500" /> Programmation
                            </li>
                            <li className="flex items-center mb-2">
                                <FaBook className="mr-2 text-green-500" /> Lecture
                            </li>
                            <li className="flex items-center mb-2">
                                <FaGamepad className="mr-2 text-purple-500" /> Jeux Vidéo
                            </li>
                            {/* Ajoutez d'autres hobbies avec icônes */}
                        </ul>
                        {/* Jeux actuels */}
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Jeux Actuels
                        </h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Overwatch</li>
                            <li>The Legend of Zelda: Breath of the Wild</li>
                            <li>Minecraft</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

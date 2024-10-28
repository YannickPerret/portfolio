import Image from 'next/image';
import { FaCode, FaBook, FaGamepad, FaChess } from 'react-icons/fa';
import { IoIosFitness } from 'react-icons/io';

import yannick from '../public/images/PerretYannick.jpeg';

const About = () => {
    return (
        <section id="apropos" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6 py-16 relative">
                <div className="glow-wrapper">
                    <div className="content-box relative p-8 rounded-lg bg-gray-200">
                        <div className="flex flex-col md:flex-row items-start max-w-4xl mx-auto md:space-x-8 gap-16">
                            <div className="w-full md:w-1/3 mb-8 md:mb-0">
                                <div className="relative h-80 lg:h-96 mx-auto transition-transform duration-300 hover:scale-105">
                                    <Image
                                        src={yannick}
                                        alt="Photo de Perret Yannick"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>

                            <div className="w-full md:w-2/3">
                                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                    Bonjour ! Je m&apos;appelle&nbsp;
                                    <span className="font-semibold">Yannick Perret</span>, un développeur web full-stack passionné avec plusieurs années d&apos;expérience dans la création d'applications web modernes et réactives. J'adore explorer de nouvelles technologies et améliorer continuellement mes compétences pour offrir les meilleures solutions à mes clients.
                                </p>

                                <div className="flex flex-col md:flex-row md:space-x-8">
                                    <div className="flex flex-col mb-6 md:mb-0">
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                            Mes Hobbies
                                        </h3>
                                        <ul className="list-none text-gray-700">
                                            <li className="flex items-center mb-2">
                                                <FaCode className="mr-2 text-blue-500" /> Programmation
                                            </li>
                                            <li className="flex items-center mb-2">
                                                <FaBook className="mr-2 text-green-500" /> Lecture
                                            </li>
                                            <li className="flex items-center mb-2">
                                                <FaGamepad className="mr-2 text-purple-500" /> Jeux Vidéo
                                            </li>
                                            <li className={`flex items-center mb-2`}>
                                                <FaChess className={`flex items-center mb-2 mr-2 text-yellow-500`} /> Échecs
                                            </li>
                                            <li className="flex items-center mb-2">
                                                <IoIosFitness className="mr-2 text-red-500" /> Fitness &amp; Musculation
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="flex flex-col">
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                            Jeux Actuels
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-700">
                                            <li>World of Warcraft</li>
                                            <li>Overwatch</li>
                                            <li>Minecraft</li>
                                            <li>Tft (Teamfight Tactics)</li>
                                            <li>Call of duty Black Ops 6 </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="animated-border-box-glow"></div>
                    <div className="animated-border-box"></div>
                </div>
            </div>
        </section>
    );
};

export default About;

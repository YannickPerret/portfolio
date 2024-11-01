import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJsSquare, FaSwift } from 'react-icons/fa';
import { MdHttp } from "react-icons/md";
import {
    SiTailwindcss,
    SiMongodb,
    SiDocker,
    SiAdonisjs,
    SiReact,
    SiJira,
    SiTrello,
    SiSlack,
    SiMysql,
    SiExpress,
    SiSocketdotio,
    SiRedis,
    SiPrisma,
    SiK3S,
} from 'react-icons/si';
import { GiDragonfly } from "react-icons/gi";


const Skills = () => {
    const skillsByCategory = {
        "Développement Web": [
            { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" />, level: 'Avancé' },
            { name: 'TypeScript', icon: <FaJsSquare className="text-blue-500" />, level: 'Débutant' },
            { name: 'React.js', icon: <FaReact className="text-blue-500" />, level: 'Intermédiaire' },
            { name: 'Next.js', icon: <FaReact className="text-gray-800" />, level: 'Intermédiaire' },
            { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 'Intermédiaire' },
            { name: 'CSS3', icon: <FaCss3Alt className="text-blue-700" />, level: 'Intermédiaire' },
            { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" />, level: 'Avancé' },
            { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" />, level: 'Intermédiaire' },
        ],
        "Développement Mobile": [
            { name: 'React Native', icon: <SiReact className="text-blue-500" />, level: 'Intermédiaire' },
            { name: 'Swift', icon: <FaSwift className="text-red-500" />, level: 'Débutant' },
        ],
        "Développement Backend": [
            { name: 'AdonisJS', icon: <SiAdonisjs className="text-purple-600" />, level: 'Intermédiaire' },
            { name: 'Express.js', icon: <SiExpress className="text-green-500" />, level: 'Intermédiaire' },
            { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 'Intermédiaire' },
            { name: 'REST API', icon: <MdHttp className="text-green-500" />, level: 'Avancé' },
            { name: 'WebSockets', icon: <SiSocketdotio className="text-green-500" />, level: 'Intermédiaire' },
        ],
        "Base de Données": [
            { name: 'MySQL', icon: <SiMysql className="text-blue-500" />, level: 'Intermédiaire' },
            { name: 'Redis', icon: <SiRedis className="text-red-600" />, level: 'Débutant ++' },
            { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, level: 'Débutant' },
            { name : 'Prisma', icon: <SiPrisma className="text-green-600" />, level: 'Débutant' },
            { name: 'DragonFly', icon: <GiDragonfly className="text-green-600" />, level: 'Débutant++' },
        ],
        "Infrastructure & DevOps": [
            { name: 'Docker', icon: <SiDocker className="text-blue-500" />, level: 'Intermédiaire' },
            { name: 'K3S', icon: <SiK3S className="text-blue-500" />, level: 'Débutant ++' },
        ],
        "Gestion de Projet": [
            { name: 'Scrum', icon: <FaReact className="text-blue-500" />, level: 'Intermédiaire'},
            { name: 'Trello', icon: <SiTrello className="text-blue-600" />, level: 'Avancé' },
            { name: 'Jira', icon: <SiJira className="text-blue-700" />, level: 'Intermédiaire' },
            { name: 'Slack', icon: <SiSlack className="text-purple-500" />, level: 'Intermédiaire' },
            { name: 'Git', icon: <FaReact className="text-gray-800" />, level: 'Intermédiaire' },
        ],
    };
    return (
        <section id="competences" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-sky-700 mb-12">Compétences</h2>
                <div className="text-gray-600 mb-12">
                    <ul className={`list-inside text-gray-700 italic text-sm`}>
                        <li>Débutant : Déjà utilisé et peut faire fonctionné un système simple</li>
                        <li>Intermédiaire : L&apos;utilise régulièrement et peut trouver rapidement des informations à son sujets</li>
                        <li>Avancé : L&apos;utilise quotidiennement depuis plusieurs année et connait très bien </li>
                    </ul>
                </div>
                {Object.entries(skillsByCategory).map(([category, skills], index) => (
                    <div key={index} className="mb-12">
                        <h3 className="text-3xl font-semibold text-gray-700 mb-8 border-sky-300 border-b-2 border-l-8 p-2">{category}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {skills.map((skill, idx) => (
                                <div key={idx} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl text-center">
                                    <div className="text-6xl mb-4">{skill.icon}</div>
                                    <h4 className="text-2xl font-bold mb-2 text-sky-800">{skill.name}</h4>
                                    <p className="text-gray-600 font-semibold mb-4">{skill.level}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;

import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJsSquare } from 'react-icons/fa';

const Skills = () => {
    const skills = [
        { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" />, level: 'Avancé' },
        { name: 'React', icon: <FaReact className="text-blue-500" />, level: 'Avancé' },
        { name: 'Next.js', icon: <FaReact className="text-gray-800" />, level: 'Intermédiaire' },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 'Intermédiaire' },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-700" />, level: 'Avancé' },
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" />, level: 'Avancé' },
    ];

    return (
        <section id="compétences" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Compétences</h2>
                <div className="flex flex-wrap justify-center items-center">
                    {skills.map((skill, index) => (
                        <div key={index} className="w-40 m-6 text-center">
                            <div className="text-6xl mb-4">{skill.icon}</div>
                            <h4 className="text-xl font-semibold">{skill.name}</h4>
                            <p className="text-gray-600">{skill.level}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

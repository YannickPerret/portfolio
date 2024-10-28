import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="fixed w-full bg-white shadow z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-blue-600">Perret Yannick</div>
                <ul className="flex space-x-6">
                    {['Accueil', 'À Propos', 'Projets', 'Compétences', 'Contact'].map((item, index) => (
                        <li key={index}>
                            <Link href={`#${item.toLowerCase().replace(' ', '')}`} className="text-gray-600 hover:text-blue-500">
                              {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
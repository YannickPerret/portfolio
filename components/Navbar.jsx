'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Nettoyage du listener quand le composant est démonté
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${
                isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className={`text-2xl font-bold transition-all duration-500 ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
                    Perret Yannick
                </div>
                <ul className="flex space-x-6">
                    {['Accueil', 'À Propos', 'Projets', 'Compétences', 'Contact'].map((item, index) => (
                        <li key={index}>
                            <Link
                                href={`#${item.toLowerCase().replace(' ', '')}`}
                                className={`transition-all duration-500 ${
                                    isScrolled ? 'text-gray-700 hover:text-blue-500' : 'text-gray-200 hover:text-blue-300'
                                }`}
                            >
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

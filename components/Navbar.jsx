'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile;
};

const Navbar = ({isScroll}) => {
    const [isScrolled, setIsScrolled] = useState(isScroll || false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuToggle = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleMenuItemClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${
                isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div
                    className={`text-2xl font-bold transition-all duration-500 font-[family-name:var(--font-monsier-regular)]  ${
                        isScrolled ? 'text-blue-600' : 'text-white'
                    }`}>
                    Yannick Perret
                </div>
                {isMobile ? (
                    <button onClick={handleMenuToggle} className={`${isScrolled ? 'text-black':'text-white'}  focus:outline-none z-50`}>
                        <div className={`w-8 h-1 bg-current my-1 transition-transform  ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <div className={`w-8 h-1 bg-current my-1 ${isMenuOpen ? 'opacity-0' : ''}`} />
                        <div className={`w-8 h-1 bg-current my-1 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                ) : (
                    <ul className="flex space-x-6">
                        {['Accueil', 'A Propos', 'Mon Parcours', 'Projets', 'Competences', 'Contact'].map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={`#${item.toLowerCase().replace(' ', '')}`}
                                    className={`transition-all duration-500 ${
                                        isScrolled
                                            ? 'text-gray-700 hover:text-blue-500'
                                            : 'text-gray-200 hover:text-blue-300'
                                    }`}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {isMobile && isMenuOpen && (
                <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-40 transition-transform transform translate-x-0">
                    <ul className="flex flex-col p-6 space-y-6 mt-16">
                        {['Accueil', 'A Propos', 'Mon Parcours', 'Projets', 'Competences', 'Contact'].map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={`#${item.toLowerCase().replace(' ', '')}`}
                                    className="text-gray-700 hover:text-blue-500 text-lg font-semibold"
                                    onClick={handleMenuItemClick}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {isMobile && isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-30"
                    onClick={handleMenuToggle}
                ></div>
            )}
        </nav>
    );
};

export default Navbar;

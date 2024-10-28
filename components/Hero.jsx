'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Hero = () => {
    const [showSubtitle, setShowSubtitle] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const title = 'Bonjour, je suis Perret Yannick';
    const letters = title.split('');

    useEffect(() => {
        const timePerLetter = 50;
        const titleAnimationTime = letters.length * timePerLetter;

        const subtitleAnimationTime = 1000;

        const totalAnimationTime = titleAnimationTime + subtitleAnimationTime + 500;

        const subtitleTimer = setTimeout(() => {
            setShowSubtitle(true);
        }, titleAnimationTime);

        const buttonTimer = setTimeout(() => {
            setShowButton(true);
        }, totalAnimationTime);

        // Détecter si l'appareil est mobile
        setIsMobile(window.innerWidth <= 768);

        return () => {
            clearTimeout(subtitleTimer);
            clearTimeout(buttonTimer);
        };
    }, []);

    return (
        <section id="accueil" className="relative h-screen">
            {!isMobile && (
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/images/hero-bg.jpg"
                >
                    <source src="hero_video.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas les vidéos HTML5.
                </video>
            )}

            {isMobile && (
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
                ></div>
            )}

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center text-white px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
                        {letters.map((letter, index) => (
                            <span
                                key={index}
                                className={`inline-block opacity-0 animate-fadeInLetter`}
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
                        ))}
                    </h1>

                    {showSubtitle && (
                        <p
                            className="text-2xl md:text-3xl mb-8 opacity-0 animate-fadeIn"
                            style={{ animationDelay: '0s' }}>
                            Développeur Web spécialisé en Full-stack
                        </p>
                    )}

                    {showButton && (
                        <Link
                            href="#contact"
                            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition duration-300 mt-4"
                        >
                            Me Contacter
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;

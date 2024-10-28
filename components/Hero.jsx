const Hero = () => {
    return (
        <section
            id="accueil"
            className="flex items-center justify-center h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        >
            <div className="text-center text-white px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">Bonjour, je suis Perret Yannick</h1>
                <p className="text-2xl md:text-3xl mb-8">Développeur Web spécialisé en Full-stack</p>
                <a
                    href="#contact"
                    className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition duration-300"
                >
                    Me Contacter
                </a>
            </div>
        </section>
    );
};

export default Hero;
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-6 text-center">
                &copy; {new Date().getFullYear()} Perret Yannick. Tous droits réservés.
            </div>
        </footer>
    );
};

export default Footer;

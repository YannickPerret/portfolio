'use client'
import { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import Link from "next/link";

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            setStatus('Merci pour votre message !');
            e.target.reset();
        } else {
            setStatus('Une erreur est survenue. Veuillez réessayer.');
        }
    };

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Contactez-moi</h2>
                <div className="max-w-3xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-700 font-semibold">Nom</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold">Message</label>
                            <textarea
                                name="message"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                        >
                            Envoyer
                        </button>
                    </form>
                    {status && <p className="mt-6 text-center text-green-500">{status}</p>}
                    <div className="flex justify-center space-x-8 mt-12">
                        <Link
                            href="https://www.linkedin.com/in/votreprofil"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-blue-500 text-3xl"
                        >
                            <FaLinkedin />
                        </Link>
                        <Link
                            href="https://github.com/votreprofil"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-black text-3xl"
                        >
                            <FaGithub />
                        </Link>
                        <Link
                            href="https://twitter.com/votreprofil"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-blue-400 text-3xl"
                        >
                            <FaTwitter />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

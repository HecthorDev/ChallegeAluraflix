import React from 'react';

const Footer = () => {
    return (
        <footer className="footer relative z-10 border-t-4 border-brand-blue bg-brand-dark py-12 px-6 md:pb-24 lg:pb-12">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6">
                <a href="/">
                    <img src="/assets/logo.png" alt="AluraFlix Logo" className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity" />
                </a>
                <div className="text-center">
                    <p className="text-sm font-light text-white/60">
                        &copy; 2024 AluraFlix. Desarrollado por HecthorDev para el Challenge Alura Latam.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

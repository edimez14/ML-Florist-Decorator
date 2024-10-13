import { useState } from "react";
import "../style/glassmorphism.css";
import logo from "../assets/logo.png";

export function NavBar() {
    // Estado para controlar la visibilidad del menú móvil
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Función para alternar la visibilidad del menú móvil
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="glassmorphism absolute top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <a href="#">
                    <img
                        alt="misueñosml.com"
                        src={logo}
                        className="w-8 h-8 md:w-8 md:h-8 object-contain"
                    />
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <a
                        href="/index"
                        className="text-gray-900  border-b-2 border-transparent hover:border-black"
                    >
                        Inicio
                    </a>
                    <a
                        href="/portfolio"
                        className="text-gray-900  border-b-2 border-transparent hover:border-black"
                    >
                        Portafolio
                    </a>
                    <a
                        href="/services"
                        className="text-gray-900  border-b-2 border-transparent hover:border-black"
                    >
                        Servicios
                    </a>
                    <a
                        href="#"
                        className="text-gray-900  border-b-2 border-transparent hover:border-black"
                    >
                        Contacto
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={toggleMobileMenu}
                >
                    <span className="block w-6 h-1 bg-gray-900 mb-1"></span>
                    <span className="block w-6 h-1 bg-gray-900 mb-1"></span>
                    <span className="block w-6 h-1 bg-gray-900"></span>
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <nav className="md:hidden mt-2 px-4 space-y-2">
                    <a
                        href="/index"
                        className="block text-gray-900  border-b-2 border-transparent hover:border-black"
                    >
                        Inicio
                    </a>
                    <a
                        href="#"
                        className="block text-gray-900  border-b-2 border-transparent hover:border-black"
                    >
                        Portafolio
                    </a>
                    <a
                        href="/services"
                        className="block text-gray-900  border-b-2 border-transparent hover:border-black"
                    >
                        Servicios
                    </a>
                    <a
                        href="#"
                        className="block text-gray-900  border-b-2 border-transparent hover:border-black"
                    >
                        Contacto
                    </a>
                </nav>
            )}
        </header>
    );
}

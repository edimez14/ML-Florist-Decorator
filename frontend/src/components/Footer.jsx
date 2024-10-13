// Footer.jsx
export function Footer() {
    return (
        <footer className="bg-[#2f3b4c] text-white py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">

                {/* Sección de Arreglos */}
                <div>
                    <h2 className="font-bold text-lg">Arreglos</h2>
                    <p className="mt-4 text-gray-300">Flores para bodas, bautizos, cumpleaños, aniversarios, etc.</p>
                    <div className="mt-4 flex space-x-4">
                        <a href="#" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" aria-label="TikTok">
                            <i className="fab fa-tiktok"></i>
                        </a>
                        <a href="#" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                    <p className="mt-6 text-sm text-gray-500">© 2024. All rights reserved.</p>
                </div>

                {/* Sección de Decoraciones */}
                <div>
                    <h2 className="font-bold text-lg">Decoraciones</h2>
                    <p className="mt-4">+58 319 6257940</p>
                    <a href="mailto:mi.floristdecorator@gmail.com" className="text-gray-300">
                        mi.floristdecorator@gmail.com
                    </a>
                </div>

                {/* Sección de Eventos */}
                <div>
                    <h2 className="font-bold text-lg">Eventos</h2>
                    <p className="mt-4">Dirección de correo electrónico</p>
                    <input
                        type="email"
                        placeholder="Ingrese su correo electrónico aquí"
                        className="mt-2 p-2 w-full rounded border-none text-gray-700"
                    />
                    <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700">
                        Enviar formulario de contacto
                    </button>
                </div>

            </div>
        </footer>
    );
}

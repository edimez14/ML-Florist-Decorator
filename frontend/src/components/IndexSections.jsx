import videofondo from "../assets/videos/uhd_24fps.mp4";
import { CardImgTitles } from "./CardImgTitles";
import { CardTwoImg } from "./CardTwoImg";
import { Footer } from "./Footer";
import { Heading } from "./Heading";
import { ReviewCard } from "./ReviewCard";

export function IndexSections() {
    return (
        <>
            {/* Sección del video de fondo */}
            <section className="relative py-4">
                <div className="absolute inset-0 overflow-hidden">
                    <video
                        src={videofondo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        poster="https://images.pexels.com/videos/7857985/pexels-photo-7857985.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=630"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4 min-h-[619px] flex flex-col items-center justify-center">
                    <h1 className="text-white text-center font-serif text-3xl sm:text-4xl md:text-5xl font-medium mb-4">
                        Arreglos florales personalizados
                    </h1>
                    <p className="text-gray-300 text-center mb-4 text-sm sm:text-base md:text-lg">
                        Encuentra la mejor selección de arreglos florales para cada ocasión especial en Bogotá.
                    </p>
                    <a
                        href="#"
                        className="bg-purple-700 hover:bg-purple-800 text-white font-medium text-sm sm:text-base py-3 px-8 rounded-full"
                    >
                        Explorar
                    </a>
                </div>
            </section>

            {/* Sección de Arreglos Florales */}
            <section className="px-4 py-4 md:py-16">
                <div className="flex justify-center bg-white transition-all">
                    <div className="grid grid-cols-1 gap-4 px-4 md:px-16">
                        <div>
                            <Heading
                                title="Arreglos Florales"
                                description="Encuentra hermosos arreglos florales para cada ocasión especial."
                                smallOrLarge={false}
                                titleHasColor={false}
                                desciptionHasColor={false}
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <CardTwoImg
                                img_1="/assets/img/index/arreglo_de_mesa.JPG"
                                img_2="/assets/img/index/centro_de_mesa.JPG"
                                title="Título de Arreglo"
                                description="Descripción del arreglo floral."
                                url="#"
                            />
                            <CardTwoImg
                                img_1="/assets/img/index/arreglo_de_mesa.JPG"
                                img_2="/assets/img/index/centro_de_mesa.JPG"
                                title="Otro Título"
                                description="Otra descripción de este arreglo floral."
                                url="#"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección de experiencia profesional */}
            <section className="py-4 md:py-16">
                <div className="flex justify-center items-center">
                    <CardImgTitles
                        imgSrc="/assets/img/index/cupa_decorada_2.jpg"
                        titles={['Experiencia Profesional', 'Experiencia']}
                        descriptions={[
                            'Especialista desde hace 15 años en arreglos florales para eventos.',
                            'Realizamos decoraciones florales personalizadas para todo tipo de eventos.',
                        ]}
                        leftOrRight={true}
                    />
                </div>
            </section>

            {/* Sección de Opiniones */}
            <section className="py-4 md:py-16">
                <div className="px-4 md:px-16">
                    <div className="my-4">
                        <Heading
                            title="Opiniones de clientes"
                            description="Descubre lo que dicen nuestros clientes sobre nuestros arreglos florales."
                            smallOrLarge={false}
                            titleHasColor={false}
                            desciptionHasColor={false}
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                        <ReviewCard
                            rating={5}
                            comment="El servicio fue excelente, me encantó el arreglo floral."
                            profileImg="https://via.placeholder.com/150"
                            name="Juan Pérez"
                            location="Bogotá, Colombia"
                        />
                        <ReviewCard
                            rating={5}
                            comment="Me encantó el arreglo, superó mis expectativas."
                            profileImg="https://via.placeholder.com/150"
                            name="Ana Gómez"
                            location="Bogotá, Colombia"
                        />
                        <ReviewCard
                            rating={5}
                            comment="Gran servicio, arreglos florales hermosos."
                            profileImg="https://via.placeholder.com/150"
                            name="Carlos Ramírez"
                            location="Bogotá, Colombia"
                        />
                        <ReviewCard
                            rating={5}
                            comment="Gran servicio, arreglos florales hermosos."
                            profileImg="https://via.placeholder.com/150"
                            name="Carlos Ramírez"
                            location="Bogotá, Colombia"
                        />
                    </div>
                </div>
            </section>

            {/* Sección del Footer */}
            <section>
                <footer>
                    <Footer />
                </footer>
            </section>
        </>
    );
}

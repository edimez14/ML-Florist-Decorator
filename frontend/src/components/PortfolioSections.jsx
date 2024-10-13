
import { CardImgTitles } from "./CardImgTitles";
import { Gallery } from "./Gallery";
import { Heading } from "./Heading";
import { ReviewCard } from "./ReviewCard";

export function PortfolioSections() {

    return (
        <>
            <section className="relative py-4">
                <div></div>
            </section>
            <section className="px-4 py-4 md:py-16">
                <div className="flex justify-center bg-white transition-all">
                    <div className="grid grid-cols-1 gap-4 px-4 md:px-16">
                        <div>
                            <Heading
                                title="Arreglos Florales"
                                description="Elegantes arreglos florales para bodas, cumpleaños, aniversarios y eventos corporativos."
                                smallOrLarge={true}
                                titleHasColor={false}
                                desciptionHasColor={false}
                            />
                        </div>
                        <div>
                            <Gallery />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-4 md:py-16">
                <div className="flex justify-center items-center">
                    <CardImgTitles
                        imgSrc="/assets/img/index/cupa_decorada_2.jpg"
                        titles={['Experiencia Profesional', 'Experiencia',]}
                        descriptions={[
                            'Especialista desde hace 15 en arreglos florales para todo tipo de eventos como bodas, Bautizos, cumpleaños, aniversarios y decoraciones corporativas.',
                            'Decoraciones florales personalizadas: Realizamos arreglos florales únicos para bodas, cumpleaños, aniversarios y eventos corporativos.',
                        ]}
                        leftOrRight={true}
                    />
                </div>
            </section>
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
        </>
    );
}
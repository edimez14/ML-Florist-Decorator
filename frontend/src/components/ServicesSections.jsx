import { Card } from "./Card";
import { CardImgTitles } from "./CardImgTitles";
import { Gallery } from "./Gallery";
import { Heading } from "./Heading";

export function ServicesSections() {

    return (
        <>
            {/* Sección 1: Arreglos florales personalizados */}
            <section className="py-4 md:py-16 bg-slate-800">
                <div className="p-14 md:p-8">
                    <Heading
                        title="Arreglos florales personalizados" 
                        description="Realizamos hermosos arreglos florales para bodas, cumpleaños, aniversarios y eventos corporativos." 
                        smallOrLarge={true}
                        titleHasColor={true}
                        titleColor="white"
                        desciptionHasColor={true}
                        desciptionColor="white"
                    />
                </div>
                <div className="flex justify-center items-center">
                    {/* Ajuste para responsividad en el grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                        <Card
                            imgSrc="/assets/img/index/cupa_decorada_2.jpg"
                            title="Arreglos únicos y elegantes"
                            description="Descubre nuestra variedad de arreglos florales únicos y elegantes para cada ocasión especial."
                        />
                        <Card
                            imgSrc="/assets/img/index/cupa_decorada_2.jpg"
                            title="Decoraciones corporativas personalizadas"
                            description="Creamos decoraciones florales personalizadas para eventos corporativos, privados e individuales."
                        />
                        <Card
                            imgSrc="/assets/img/index/cupa_decorada_2.jpg"
                            title="Arreglos florales personalizados"
                            description="Arreglos florales para bodas"
                        />
                    </div>
                </div>
            </section>

            {/* Sección 2: Creaciones florales personalizadas */}
            <section className="py-4 md:py-16">
                <div className="flex justify-center items-center">
                    <CardImgTitles
                        imgSrc="/assets/img/index/cupa_decorada_2.jpg"
                        titles={['Expertos en creaciones florales personalizadas']}
                        descriptions={[
                            'En Mis Sueños Floristeria nos especializamos en diseñar arreglos florales únicos para todo tipo de eventos, desde bodas hasta eventos corporativos.'
                        ]}
                        leftOrRight={false}
                    />
                </div>
            </section>

            {/* Sección vacía para posible contenido futuro */}
            <section className="relative py-4"></section>

            {/* Sección 3: Galería */}
            <section className="px-4 py-4 md:py-16">
                <div className="flex justify-center bg-white transition-all">
                    <div className="grid grid-cols-1 gap-4 px-4 md:px-16">
                        <div>
                            <Heading title="Arreglos Florales" description="Elegantes arreglos florales para bodas, cumpleaños, aniversarios y eventos corporativos." smallOrLarge={false} />
                        </div>
                        <div>
                            <Gallery />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

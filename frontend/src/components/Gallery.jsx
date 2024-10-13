export const Gallery = () => {
    return (
        <div className="p-4 flex flex-wrap justify-center items-center gap-4">
            {/* Primera fila */}
            <div className="flex-initial w-96">
                <img
                    src="/assets/img/index/arreglo_de_mesa.JPG"
                    alt="Imagen 1"
                    className="w-full h-80 object-cover rounded-lg"
                />
            </div>
            <div className="flex-auto w-64">
                <img
                    src="/assets/img/index/cupa_decorada_2.jpg"
                    alt="Imagen 4"
                    className="w-full h-80 object-cover rounded-lg"
                />

            </div>
            {/* Segunda fila */}
            <div className="flex-initial w-96">
                <img
                    src="/assets/img/index/centro_de_mesa.JPG"
                    alt="Imagen 3"
                    className="w-full h-80 object-cover rounded-lg"
                />
            </div>
            <div className="flex-auto w-64">
                <img
                    src="/assets/img/index/cupa_decorada.JPG"
                    alt="Imagen 5"
                    className="w-full h-auto object-cover rounded-lg"
                />
            </div>
        </div>
    );
};

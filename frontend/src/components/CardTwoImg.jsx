import PropTypes from 'prop-types';

export function CardTwoImg({ img_1, img_2, title, description, url }) {
    return (
        <div className="flex flex-col p-4 m-4">
            {/* Imágenes ajustadas para que se adapten en móviles, tablets y PC */}
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
                <img
                    src={img_1}
                    alt="Imagen 1"
                    className="rounded-lg w-full md:w-5/12 h-auto object-cover"
                />
                <img
                    src={img_2}
                    alt="Imagen 2"
                    className="rounded-lg w-full md:w-5/12 h-auto object-cover"
                />
            </div>

            {/* Título */}
            <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 text-left md:pl-24">
                {title}
            </h4>

            {/* Descripción y botón ajustados para diferentes pantallas */}
            <div className="flex flex-col md:flex-row justify-between w-full md:max-w-md">
                <p className="text-left text-xs sm:text-sm md:text-base text-gray-700 md:pl-24 mb-4 md:mb-0">
                    {description}
                </p>
                <div className="flex items-center justify-end">
                    <a href={url}>
                        <button className="border border-black rounded-lg px-4 py-1 text-xs sm:text-sm hover:bg-gray-100">
                            Ver
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

CardTwoImg.propTypes = {
    img_1: PropTypes.string.isRequired,
    img_2: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';

export function Card({ imgSrc, title, description }) {
    return (
        <div className="w-72 h-96 rounded-t-lg overflow-hidden shadow-lg flex flex-col">
            {/* Imagen con esquinas redondeadas solo en la parte superior */}
            <img
                className="w-full h-40 object-cover rounded-t-lg"
                src={imgSrc}
                alt="Imagen de tarjeta"
            />

            {/* Contenido debajo de la imagen */}
            <div className="bg-white p-4 flex-grow flex flex-col justify-center">
                {/* Título en negro */}
                <h2 className="text-lg font-bold text-black mb-1">
                    {title}
                </h2>

                {/* Descripción en gris claro */}
                <p className="text-gray-500 text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
}

// PropTypes para validar las props
Card.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

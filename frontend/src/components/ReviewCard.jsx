import PropTypes from 'prop-types';

export function ReviewCard({ rating, comment, profileImg, name, location }) {
    // Función para renderizar estrellas de calificación
    const renderStars = (count) => {
        return Array.from({ length: count }, (_, i) => (
            <svg
                key={i}
                className="w-4 h-4 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M9.049 2.927a1 1 0 011.902 0l1.757 3.56 3.937.574a1 1 0 01.554 1.706l-2.85 2.777.673 3.918a1 1 0 01-1.451 1.054L10 14.347l-3.524 1.853a1 1 0 01-1.451-1.054l.673-3.918-2.85-2.777a1 1 0 01.554-1.706l3.937-.574 1.757-3.56z" />
            </svg>
        ));
    };

    return (
        <div className="bg-pink-100 p-4 w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col space-y-4 rounded-none shadow-md">
            {/* Estrellas de calificación */}
            <div className="flex space-x-1">
                {renderStars(rating)}
            </div>

            {/* Comentario */}
            <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                {comment}
            </p>

            {/* Perfil y ubicación */}
            <div className="flex items-center space-x-4 pt-4">
                <img
                    src={profileImg}
                    alt="Foto de perfil"
                    className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full object-cover"
                />
                <div>
                    <p className="font-semibold text-gray-800 text-sm md:text-base lg:text-lg">{name}</p>
                    <p className="text-xs md:text-sm text-gray-500">{location}</p>
                </div>
            </div>
        </div>
    );
}

ReviewCard.propTypes = {
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    profileImg: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};

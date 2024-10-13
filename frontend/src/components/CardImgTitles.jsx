import PropTypes from 'prop-types';

export function CardImgTitles({ imgSrc, titles, descriptions, leftOrRight }) {
    return (
        <div className={`flex flex-col lg:flex-row items-start p-4 lg:p-8 m-4 ${leftOrRight ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
            <img
                src={imgSrc}
                alt="Imagen grande"
                className="w-full lg:w-1/3 h-auto rounded-lg object-cover mb-4 lg:mb-0 lg:mr-6"
            />
            <div className="flex flex-col space-y-4 w-full lg:w-2/3 p-4 lg:p-8">
                {titles.map((title, index) => (
                    <div key={index} className="py-4 lg:py-8">
                        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-7xl font-bold text-left mb-2">
                            {title}
                        </h2>
                        <p className="text-left text-xs sm:text-sm md:text-base text-gray-700">
                            {descriptions[index]}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

CardImgTitles.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    titles: PropTypes.arrayOf(PropTypes.string).isRequired,
    descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
    leftOrRight: PropTypes.bool.isRequired,
};

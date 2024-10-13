import PropTypes from 'prop-types';

export function Heading({ title, description, smallOrLarge, titleHasColor, desciptionHasColor,  titleColor, desciptionColor }) {
    return (
        <>
            <div className="flex justify-center items-center">
                <h3 className={`text-center ${titleHasColor ? `text-${titleColor}` : 'font-bold'} ${smallOrLarge ? 'text-6xl lg:text-6xl sm:text-5xl' : 'text-4xl lg:text-4xl'}`}>{title}</h3>
            </div>
            <div className="flex justify-center items-center">
                <p className={`${desciptionHasColor ? `text-${desciptionColor}` : 'text-gray-600'}  text-center w-5/6`}>
                    {description}
                </p>
            </div>
        </>
    );
}

Heading.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    smallOrLarge: PropTypes.bool.isRequired,
    titleHasColor: PropTypes.bool.isRequired,
    desciptionHasColor: PropTypes.bool.isRequired,
    titleColor: PropTypes.string,
    desciptionColor: PropTypes.string,
};

import Water from '../assets/water.svg'
import Sun from '../assets/sun.svg'

const range = [1, 2, 3]
const scales = {
    'light' : {
        1: 'Cette plante requiert peu de lumière',
        2: 'Cette plante requiert modérement de lumière',
        3: 'Cette plante requiert beaucoup de lumière'
    },
    'water' : {
        1: 'Cette plante requiert peu d\'arrosage',
        2: 'Cette plante requiert modérement d\'arrosage',
        3: 'Cette plante requiert beaucoup d\'arrosage'
    }
};

function CareScale({ scaleValue, careType }) {
    const scaleType = careType === 'light' ? Sun : Water;
    const altText = careType === 'light' ? 'sun-icon' : 'water-icon';

    return (
        <div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? (
                    <span key={rangeElem.toString()}>
                        <img
                            src={scaleType}
                            alt={altText}
                            onClick={() => handleClick(careType, scaleValue)}
                        />
                    </span>
                ) : null
            )}
        </div>
    );
}

function handleClick(careType, scaleValue) {
    alert(scales[careType][scaleValue])
}

export default CareScale
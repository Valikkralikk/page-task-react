import heartSvg from '../../../images/fluent-emoji-high-contrast_heart-decoration.svg';
import heartDarkSvg from '../../../images/fluent-emoji-high-contrast_heart-decoration-dark.svg';
import { ActionTypes } from '../../../store/constants';
import { dispatch } from '../../../store';

const CardButton = ({ isSelected, size, id }: { isSelected?: boolean; size: number; id: number }) => {

    const handleClick = () => {
        const type = isSelected ? ActionTypes.RemoveCard : ActionTypes.AddCard;
        dispatch({ type, payload: id })
    }
    return <svg width={size} height={size} onClick={handleClick}>
        <image
            data-type="add-button"
            href={isSelected ? heartDarkSvg : heartSvg}
            style={{
                width: `${size}px`,
                height: `${size}px`
            }} />
    </svg>
}

export default CardButton;
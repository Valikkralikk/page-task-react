import './style.scss';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCardById } from '../../services';
import { useStoreState } from '../../store';
import CardImage from '../ProductCard/components/CardImage';
import CardInfo from '../ProductCard/components/CardInfo';
import { MAIN_URL } from '../../constants';


const ProductCardInfo = () => {
    const { id } = useParams();
    const card = useStoreState('card');
    const selected = useStoreState('selected');

    useEffect(() => {
        if (id) {
            getCardById(Number(id));
        }
    }, [id, card])

    return <>
        {
            card ? <div className='products-card-info_container'>
                <CardImage heigth={448} src={`${MAIN_URL}${card.src}`} alt={card.name} width={'448px'} />
                <CardInfo
                    styles={{ width: '600px' }}
                    textStyle={{ paddingTop: '65px', marginBottom: '60px' }}
                    fontSize={64}
                    card={card}
                    isRow={true}
                    isSelected={selected.includes(card.id)}
                    buttonSize={98}
                    priceSize={64}
                />
            </div> : null
        }
    </>
}

export default ProductCardInfo;
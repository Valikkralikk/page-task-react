import { useStoreState } from "../../store";
import { CardType } from "../../types/types"
import ProductCard from "../ProductCard/ProductCard"
import './style.scss';

const FavoriteList = ({ cards }: { cards: CardType[] }) => {
    const selected = useStoreState('selected');
    const title = 'Favorites'
    return <div className="favorite-list_container">
        <p className="title">{title.toUpperCase()}</p>
        {cards.map((card) => selected.includes(card.id) ? <ProductCard isRow key={card.id} card={card} /> : null)}
    </div>
}

export default FavoriteList;
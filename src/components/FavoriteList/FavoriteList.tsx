import { CardType } from "../../types/types"
import ProductCard from "../ProductCard/ProductCard"
import './style.scss';

const FavoriteList = ({ cards, selected }: { cards: CardType[], selected: number[] }) => {
    const title = 'Favorites'
    return <div className="favorite-list_container">
        <p className="title">{title.toUpperCase()}</p>
        {cards.map((card) => selected.includes(card.id) ? <ProductCard isRow key={card.id} card={card} isSelected /> : null)}
    </div>
}

export default FavoriteList;
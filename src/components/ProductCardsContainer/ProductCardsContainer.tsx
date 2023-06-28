import { CardType } from "../../types/types"
import ProductCard from "../ProductCard/ProductCard"
import './style.scss';

const ProductCardsContainer = ({ cards, selected }: { cards: CardType[], selected: number[] }) => {
    return <>
        {
            !!cards.length ? <div className="products-card_container">
                {cards.map((card) => <ProductCard key={card.id} card={card} isSelected={selected.includes(card.id)} />)}
            </div> : null
        }
    </>
}

export default ProductCardsContainer;
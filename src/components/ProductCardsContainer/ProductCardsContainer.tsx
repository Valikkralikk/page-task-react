import { CardType } from "../../types/types";
import ProductCard from "../ProductCard/ProductCard";
import { FixedSizeGrid as Grid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import './style.scss';

const ProductCardsContainer = ({ cards }: { cards: CardType[] }) => {

    const Row = ({ columnIndex, rowIndex, style, data }: { columnIndex: number; rowIndex: number; style: any; data: any[] }) => {
        const card = data[4 * rowIndex + columnIndex];
        return <div style={style}>
            <div style={{ paddingBottom: '70px' }}>
                <ProductCard key={card.id} card={card} />
            </div>
        </div>
    };

    return <div className="products-card_container">
        <AutoSizer>
            {({ height, width }: { height: number; width: number; }) => {
                return (
                    <Grid
                        columnCount={4}
                        columnWidth={300}
                        itemData={cards}
                        height={height}
                        rowCount={cards.length / 4}
                        rowHeight={420}
                        width={width}
                    >
                        {Row}
                    </Grid>)
            }}
        </AutoSizer>
    </div>
}

export default ProductCardsContainer;
export type CardType = {
    id: number;
    name: string;
    price: number;
    src: string;
}

export type CardProps = { card: CardType; isRow?: boolean; isSelected?: boolean; };
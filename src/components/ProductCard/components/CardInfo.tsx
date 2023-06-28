import { CardContent, Typography } from "@mui/material";
import { CardProps } from "../../../types/types";
import CardPrice from "./CardPrice";

type CardInfoType = CardProps & {
    fontSize: number;
    styles: Record<string, any>;
    buttonSize: number;
    priceSize: number;
    textStyle?: Record<string, any>;
};


const CardInfo = ({ card, isRow, isSelected, fontSize, styles, buttonSize, priceSize, textStyle }: CardInfoType) => {
    return <CardContent sx={{ ...{ padding: 0, fontFamily: 'Poppins' }, ...(styles ? styles : {}) }}>
        <Typography sx={{ ...{ fontSize }, ...(textStyle || {}) }}>
            {card.name}
        </Typography>
        <CardPrice price={card.price} id={card.id} isRow={isRow} buttonSize={buttonSize} isSelected={isSelected} priceSize={priceSize} />
    </CardContent>
}

export default CardInfo;
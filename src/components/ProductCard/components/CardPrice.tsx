import { CardActions, Typography } from "@mui/material";
import CardButton from "./CardButton";

type CardPriceProps = {
    price: number;
    id: number;
    isRow?: boolean;
    isSelected?: boolean;
    buttonSize: number;
    priceSize: number
};

const CardPrice = ({ price, id, isRow, isSelected, buttonSize, priceSize }: CardPriceProps) => {
    return <CardActions
        sx={{
            height: 52,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
        <Typography sx={{ fontSize: priceSize, fontFamily: 'Poppins' }}>
            {`$ ${price.toString()}`}
        </Typography>
        <CardButton size={buttonSize} id={id} isSelected={isSelected} />
    </CardActions>
}

export default CardPrice;
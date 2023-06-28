import '../../index.scss';
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { CardType } from "../../types/types";
import { MAIN_URL } from "../../constants";
import CardPrice from './components/CardPrice';
import { useNavigate } from 'react-router-dom';
import CardImage from './components/CardImage';
import CardInfo from './components/CardInfo';


const ProductCard = ({ card, isRow, isSelected }: { card: CardType, isRow?: boolean, isSelected?: boolean }) => {
  const navigate = useNavigate();

  const styles: Record<string, any> = isRow ? { display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-around' } : {};
  return <Card sx={
    {
      width: isRow ? 350 : 260,
      height: isRow ? 130 : 350,
      border: isRow ? 'none' : '1px dashed #414141',
      boxShadow: 'none',
      borderRadius: '30px',
      backgroundColor: isRow ? '#FBFBFB' : '#FFF',
      margin: isRow ? '0' : '0 15px 70px 15px',
    }
  }>
    <CardActionArea
      onClick={(e) => {
        //@ts-ignore
        if (e.target.dataset.type !== 'add-button') {
          navigate(`/card/${card.id}`)
        }
      }}
      sx={{
        padding: '15px 15px 0 15px',
        height: '100%',
        display: 'flex',
        flexDirection: isRow ? 'row' : 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
      }}>
      <CardImage heigth={isRow ? 108 : 350 / 100 * 50} src={`${MAIN_URL}${card.src}`} alt={card.name} width={isRow ? '108px' : '100%'} />
      <CardInfo
        styles={styles}
        fontSize={isRow ? 16 : 20}
        buttonSize={isRow ? 30 : 36}
        card={card}
        isRow={isRow}
        isSelected={isSelected}
        priceSize={isRow ? 20 : 24}
      />
    </CardActionArea >
  </Card >
}

export default ProductCard;
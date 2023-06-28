import { CardType } from "../../types/types";
import '../../index.scss';
import './style.scss';
import FavoriteList from "../FavoriteList/FavoriteList";
import ProductCardsContainer from "../ProductCardsContainer/ProductCardsContainer";
import { useStoreState } from "../../store";

import {
    Outlet,
    Route,
    Routes,
} from "react-router-dom";
import ProductCardInfo from "../ProductCardInfo/ProductCardInfo";


const MainContainer = ({ cards }: { cards: CardType[] }) => {
    const selected = useStoreState('selected');
    
    return (
        <div className='wrapper mainContainer'>
            <FavoriteList cards={cards} selected={selected} />
            <Routes>
                <Route path="/" element={<ProductCardsContainer cards={cards} selected={selected} />} />
                <Route path="/card/:id" element={<ProductCardInfo />} />
            </Routes>
            <Outlet />
        </div>
    )
}

export default MainContainer;
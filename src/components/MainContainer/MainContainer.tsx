import { useEffect, useState } from 'react';
import { CardType } from "../../types/types";
import '../../index.scss';
import './style.scss';
import FavoriteList from "../FavoriteList/FavoriteList";
import ProductCardsContainer from "../ProductCardsContainer/ProductCardsContainer";

import {
    Outlet,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import ProductCardInfo from "../ProductCardInfo/ProductCardInfo";
import { WrapperPaddings } from './constants';


const MainContainer = ({ cards }: { cards: CardType[] }) => {
    const location = useLocation()
    const [classes, setClasses] = useState(WrapperPaddings.WithoutRightPadding);

    useEffect(() => {
        if (location.pathname === '/') {
            setClasses(WrapperPaddings.WithoutRightPadding);
        } else {
            setClasses(WrapperPaddings.WithRightPadding);
        }
    }, [location.pathname])

    return (
        <div className={classes}>
            <FavoriteList cards={cards} />
            <Routes>
                <Route path="/" element={<ProductCardsContainer cards={cards} />} />
                <Route path="/card/:id" element={<ProductCardInfo />} />
            </Routes>
            <Outlet />
        </div >
    )
}

export default MainContainer;
import { MAIN_URL } from '../constants';
import { dispatch } from '../store';
import { ActionTypes } from '../store/constants';

export const getAllCards = async () => {
    const response = await fetch(`${MAIN_URL}/image`);
    const data = await response.json();
    dispatch({
        type: ActionTypes.GetAllCards,
        payload: data,
    });
}

export const getCardById = async (id: number) => {
    const response = await fetch(`${MAIN_URL}/image?id=${id}`);
    const data = await response.json();
    dispatch({
        type: ActionTypes.GetCardById,
        payload: data,
    });
}

export const AddToLocalStorage = (selected: number[]) => {
    localStorage.setItem('selected', JSON.stringify(selected));
}

export const GetFromLocalStorage = () => {
    const selected = localStorage.getItem('selected');
    return selected ? JSON.parse(selected) : null;
}
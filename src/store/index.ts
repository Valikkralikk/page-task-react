import { createStore } from 'react-hooks-global-state';
import { CardType } from '../types/types';
import { ActionTypes } from './constants';
import { AddToLocalStorage, GetFromLocalStorage } from '../services';

type RootStateType = {
    cards: CardType[];
    card: CardType | null;
    selected: number[];
}


const initialState = { cards: [], selected: GetFromLocalStorage() || [], card: null }

const reducer = (state: RootStateType, action: { type: string; payload: any }) => {
    if (action.type === ActionTypes.GetAllCards) {
        return { ...state, cards: action.payload }
    }
    if (action.type === ActionTypes.AddCard) {
        const addedIds = [action.payload, ...state.selected];
        AddToLocalStorage(addedIds);
        return { ...state, selected: addedIds }
    }
    if (action.type === ActionTypes.RemoveCard) {
        const filteredIds = [...state.selected].filter(id => id !== action.payload);
        AddToLocalStorage(filteredIds);
        return { ...state, selected: filteredIds }
    }
    if (action.type === ActionTypes.GetCardById) {
        if (action.payload) {
            return { ...state, card: action.payload }
        }
        return state;
    }
    return state
};

export const { dispatch, useStoreState } = createStore(reducer, initialState);

import types from './types';
import { combineReducers } from 'redux';


export const initialState = {
    monsters: [],
    monster: {},
    spells: [],
    spell: {},
    items: [],
    item: {},
    user: {},
    favorites: []
};

const monsters = (state = [], action) => {
    switch (action.type) {

        case types.GET_MONSTERS + '_FULFILLED':
            let monsters = action.payload;
            return monsters;

        default:
            return state;
    }
}

const monster = (state = {}, action) => {
    switch (action.type) {

        case types.GET_MONSTER + '_FULFILLED':
            return Object.assign({}, action.payload);

        default:
            return state;
    }
}

const spells = (state = [], action) => {
    switch (action.type) {

        case types.GET_SPELLS + '_FULFILLED':
            console.log(action.payload)
            let spells = action.payload;
            return spells;

        default:
            return state;
    }
}

const spell = (state = {}, action) => {
    switch (action.type) {

        case types.GET_SPELL + '_FULFILLED':
            return Object.assign({}, action.payload);

        default:
            return state;
    }
}

const items = (state = [], action) => {
    switch (action.type) {

        case types.GET_ITEMS + '_FULFILLED':
            let items = action.payload;
            return items;

        default:
            return state;
    }
}

const item = (state = {}, action) => {
    switch (action.type) {

        case types.GET_ITEM + '_FULFILLED':
            return Object.assign({}, action.payload);

        default:
            return state;
    }
}

const user = (state = {}, action) => {
    switch (action.type) {

        case types.UPDATE_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, action.payload);

        default:
            return state;
    }
}

const favorites = (state = [], action) => {
    switch (action.type) {

        case types.ADD_TO_FAVORITES + '_FULFILLED':
            return state.concat(action.payload.data);

        case types.REM_FROM_FAVORITES + '_FULFILLED':
            let index = state.findIndex(item => item.id === action.payload.data[0].id);
            return [...state.slice(0, index), ...state.slice(index + 1)];

        case types.GET_FAVORITES + '_FULFILLED':
            if (state.length === 0) {
                return [...state, ...action.payload];
            } else return state;

        default:
            return state;
    }
}

const reducer = combineReducers({
    monsters,
    monster,
    spells,
    spell,
    items,
    item,
    user,
    favorites
});

export default reducer;
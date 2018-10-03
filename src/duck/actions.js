import types from './types';
import axios from 'axios';

const monstURL = 'http://www.dnd5eapi.co/api/monsters/';
const spellURL = 'http://www.dnd5eapi.co/api/spells';
const itemURL = 'http://www.dnd5eapi.co/api/equipment/';

// MONSTER MANUAL
const getMonsters = () => {
    const promise = axios.get(monstURL).then(res => res.data.results);
    return {
        type: types.GET_MONSTERS,
        payload: promise
    }
}

const getMonster = (url) => {
    const promise = axios.get(url).then(res => res.data);
    return {
        type: types.GET_MONSTER,
        payload: promise
    }
}

// SPELL BOOK
const getSpells = () => {
    const promise = axios.get(spellURL).then(res => res.data.results);
    return {
        type: types.GET_SPELLS,
        payload: promise
    }
}

const getSpell = (url) => {
    const promise = axios.get(url).then(res => res.data);
    return {
        type: types.GET_SPELL,
        payload: promise
    }
}

// ITEM LIST
const getItems = () => {
    const promise = axios.get(itemURL).then(res => res.data.results);
    return {
        type: types.GET_ITEMS,
        payload: promise
    }
}

const getItem = (url) => {
    const promise = axios.get(url).then(res => res.data);
    return {
        type: types.GET_ITEM,
        payload: promise
    }
}

// USER
const getUser = () => {
    const promise = axios.get('/auth/me');
    return {
        type: types.UPDATE_USER_INFO,
        payload: promise
    }
}

// FAVORITES 
const getFavorites = () => {
    const promise = axios.get('/favorites');
    return {
        type: types.GET_FAVORITES,
        payload: promise
    }
}

const addToFavorites = (item) => {
    const promise = axios.post('/favorites', item);
    return {
        type: types.ADD_TO_FAVORITES,
        payload: promise
    }
}

const remFromFavorites = (item) => {
    const promise = axios.delete('/favorites', item);
    return {
        type: types.REM_FROM_FAVORITES,
        payload: promise
    }
}

export default {
    getMonsters,
    getMonster,
    getSpells,
    getSpell,
    getItems,
    getItem,
    getUser,
    getFavorites,
    addToFavorites,
    remFromFavorites
}
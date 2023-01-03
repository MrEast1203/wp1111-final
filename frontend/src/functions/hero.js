import axios from 'axios';
import { useState } from "react";
import {   useLocation } from 'react-router-dom' // 
const theHero= axios.create({
    baseURL: 'http://localhost:4000/api'
})
const { state } = useLocation();
const getHero = (ids) => {
    const newHero=theHero.get('/getHero',{params:{
        id:ids,
        name: state.name,
        life: state.life,
        atk: state.atk,
        item: state.item,
        achieve:state.achieve,
        turn: state.turn,
        money: state.money,
        max_life: state.max_life,
        battle_card: state.battle_card,
    }})
    return newHero;
};
const createHero = (
    ids,
    heroName,
    heroLifes,
    heroAtk,) => {
    const aHero=  theHero.post('/createHero',{params:{
        id:ids,
        name: state.name,
        life: state.life,
        atk: state.atk,
        item: state.item,
        achieve:state.achieve,
        turn: state.turn,
        money: state.money,
        max_life: state.max_life,
        battle_card: state.battle_card,

    }})
    return aHero
};
const updateHero =async (ids) => {
    const HeroState=  await theHero.post('/updateHero',{params:{  
        life: state.life,
        atk: state.atk,
        item: state.item,
        achieve:state.achieve,
        turn: state.turn,
        money: state.money,
        max_life: state.max_life,
        battle_card: state.battle_card,
}})
    return HeroState;
};

export default heroFunc;

import axios from 'axios';
import { useState } from "react";
import {   useLocation } from 'react-router-dom'
const theHero= axios.create({
    baseURL: 'http://localhost:4000/api'
})
const { state } = useLocation();
getHero = () => {
    const newHero=theHero.get('/getHero',{params:{
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
createHero = () => {
    const aHero=  theHero.post('/createHero',{params:{
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
updateHero =async () => {
    const HeroState=  await theHero.get('/updateHero',{params:{  life: state.life,
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

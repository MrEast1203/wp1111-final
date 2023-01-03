import axios from 'axios';
import { useState } from "react";
import {   useLocation } from 'react-router-dom'
const EVENT= axios.create({
    baseURL: 'http://localhost:4000/api'
})
const state=useLocation();
getEvent = async() => {
    const theEvent=await EVENT.get('/getEvent',{
        params:{
            id: state.id,
            name:state.name,
            description:state.description,
            item_get:state.item_get,
            buff_value:state.buff_value,
            img:state.img
        }
    })
    return theEvent
};

export default eventFunc;

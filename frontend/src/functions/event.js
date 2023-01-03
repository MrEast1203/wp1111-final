import axios from 'axios';
import { useState } from "react";
import {   useLocation } from 'react-router-dom'
const EVENT= axios.create({
    baseURL: 'http://localhost:4000/api'
})
const state=useLocation();
getEvent = async(the_id,eventName,eventDescription,eventItem_get,) => {
    const theEvent=await EVENT.get('/getEvent',{
        params:{
            id: the_id,
            name:eventName,
            description:eventDescription,
            item_get:eventItem_get,
            buff_value:eventBuff_value,
            img:state.img
        }
    })
    return theEvent
};

export default eventFunc;

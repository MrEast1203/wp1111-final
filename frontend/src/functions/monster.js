import axios from 'axios';
import {  useLocation } from 'react-router-dom'
import { useState } from "react";
const items= axios.create({
    baseURL: 'http://localhost:4000/api'
})
const { state } = useLocation();
/*
 const [name,setName]=useState({})
 const [img_idle ,setImg_idle]=useState({})
 const [img_atk ,setImg_atk]=useState({})
 const [img_takeHit ,setImg_takeHit]=useState({})
 const [img_dead,setImg_dead]=useState({})
 const [Life,setLife]=useState(10)
 const [Atk,setAtk]=useState(0)
 const [itemDrop,setItemDrop]=useState(0)*/
getMonster = async() => {
    const Monster =await instance.get('/getMonster',
    {params:{
        id: state .id,
        name: state.name,
        img_idle:state .img_idle ,
        img_atk: state .img_atk,
        img_takeHit: state .img_takeHit,
        img_dead: state .img_dead,
        Life:state . Life,
        Atk:state .Atk ,
        itemDrop:  state .itemDrop,a
    }})
    return Monster;
}

export default monsterFunc;

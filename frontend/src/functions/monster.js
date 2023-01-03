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
getMonster = async(idM,nameM,img_idleM,img_atkM,img_takeHitM
                   ,img_deadM,LifeM,AtkM,itemDropM) => {
    const Monster =await instance.get('/getMonster',
    {params:{
        id: id,
        name: nameM,
        img_idle:img_idleM ,
        img_atk: img_atkM,
        img_takeHit:img_takeHitM,
        img_dead: img_deadM,
        Life: LifeM,
        Atk:AtkM ,
        itemDrop: itemDropM
    }})
    return Monster;
}

export default monsterFunc;

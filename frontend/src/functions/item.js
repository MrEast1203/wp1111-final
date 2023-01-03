import axios from 'axios';
import { useState } from "react";
const items= axios.create({
    baseURL: 'http://localhost:4000/api'
})
 const [name,setName]=useState({})
 const [img ,setImg]=useState({})
 const [description,setDescription]=useState({})
 const [buff_type,setBuff_type]=useState({})
 const [value,setValue]=useState(0)
 const [unique,setUnique]=useState(false)
const getItem = async (ids) => {
  const item= await items.get('/getItem',{
    id: ids,
    name: name,
    img: img,
    description: description,
      buff_type: buff_type,
      value: value,
      unique:unique
  })
  return item;
};

export default ItemFunc;

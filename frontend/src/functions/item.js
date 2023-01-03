import axios from 'axios';
import { useState } from "react";
const items= axios.create({
    baseURL: 'http://localhost:4000/api'
})
const { id } = useParams()
 const [name,setName]=useState({})
 const [img ,setImg]=useState({})
 const [description,setDescription]=useState({})
 const [buff_type,setBuff_type]=useState({})
 const [value,setValue]=useState(0)
 const [unique,setUnique]=useState(false)
getItem = async () => {
  const item= await items.get('/getItem',{
    id: id,
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

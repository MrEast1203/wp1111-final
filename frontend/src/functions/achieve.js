import {  useLocation } from 'react-router-dom'
import axios from 'axios'
import { useParams } from "react-router-dom";
const Achieve = axios.create({
    baseURL: 'http://localhost:4000/api'
})

const { state } = useLocation();
/*
const { id } = useParams()
const [name,setName]=useState({})
const [description,setDescriptio]=useState({})
*/
getAchieve = async() => {
   const achieves= Achieve.get('/getAchieve',{params:{
   id:state.wid,
   name:state.name,
   description:state.description

   }})

   
   return achieves;
};
export default achieveFunc;

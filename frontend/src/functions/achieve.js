import {  useLocation } from 'react-router-dom'
import axios from 'axios'
const Achieve = axios.create({
    baseURL: 'http://localhost:4000/api'
})

const { state } = useLocation();
/*
const { id } = useParams()
const [name,setName]=useState({})
const [description,setDescriptio]=useState({})
*/
getAchieve = async(ids) => {
   const achieves=await Achieve.get('/getAchieve',{params:{
   id:ids,
   name:state.name,
   description:state.description

   }})

   
   return achieves;
};
export default achieveFunc;

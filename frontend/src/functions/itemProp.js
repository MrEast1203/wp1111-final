import getItem from "./item";
const itemProp=async(id,setName,SetImg,setDescription,setValue,setBufftype,setUnique)=>{
   const data=await getItem(id);

   setName(data[0].name);
   SetImg(data[0].img);
   setDescription(data[0],description);
   setValue(data[0].value);
   setBufftype(data[0].buff_type);
        
     setUnique(data[0].unique);
     
}
export default itemProp;
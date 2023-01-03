import getEvent from "./event";
const itemProp=async(id,setName,setDescription,SetOption,setItem_get,setBuff_value,setImg)=>{
   const data=await getEvent(id);
   
   setName(data[0].name);
   setDescription(data[0].description);
   SetOption(data[0].options)
   setItem_get(data[0].item_get);
   setBuff_value(data[0].buff_value);
    setImg(data[0].img);
     
}
export default itemProp;
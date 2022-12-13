  import axios from "axios";
   
  export const getcars = async ()=>{
    const res = await axios.get("http://localhost:9000/cars")
    return res.data
   }
  export const gettypes = async ()=>{
    const res = await axios.get("http://localhost:9000/types")
    return res.data
   }
  export const getorders = async ()=>{
    const res = await axios.get("http://localhost:9000/orders")
    return res.data
   }

   



   
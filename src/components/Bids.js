import React,{useState,useEffect} from 'react'
import FirstComp from "./FirstComp.js";
import axios from "axios";

function Bids() {
     const[dataItem, setDataItem]=useState({});
     const[id,setId]=useState(1);

     useEffect(() => {
         axios.get(`https://intense-tor-76305.herokuapp.com/merchants/${id}`)
         .then(res=>{
             setDataItem(res.data);
         })
         .catch(err=>{
             console.log(err);
         })
        
     }, [id])

    return (
    
        <>
            All data

        </>
            
        
    
    )
}

export default Bids;

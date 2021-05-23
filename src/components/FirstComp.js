import React, { useState,useEffect, } from 'react'
import Bids from './Bids';
import "./FirstComp.css"
import RenderData from "./RenderData"





function FirstComp() {


    const [data, setData]=useState([]);

    const[currentPage,setCurrentPage]=useState(1);
    const [itemsPerPage,setItemsPerPage]=useState(5);

    const handleClick=(e)=>{
        setCurrentPage(Number(e.target.id));
    };

    const pages=[];
    for(let i=1;i<Math.ceil(data.length/itemsPerPage);i++)
    {
        pages.push(i);
    }
    const indexOfLastpage=currentPage*itemsPerPage;
    const indexOfFirstItem=indexOfLastpage-itemsPerPage;
    const currentItems=data.slice(indexOfFirstItem,indexOfLastpage)
    const renderPageNumbers=pages.map(number=>{
        return(

            <li key={number} id={number} onClick={handleClick}
            className={currentPage === number ? "active":null}
            >{number}</li>
        )
    })
    useEffect(() => {
        fetch("https://intense-tor-76305.herokuapp.com/merchants")
        .then((response)=>response.json())
        .then((json)=>setData(json));
        
    }, [data])
    return (
        <>
            <ul className="pageNumber"> {renderPageNumbers}</ul>
            {RenderData(currentItems) }
           
        
        </>
    )
}

export default FirstComp;

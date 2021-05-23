import { useState } from "react";
import "./FirstComp.css"
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import {NavLink} from "react-router-dom"


import TableRow from '@material-ui/core/TableRow';

const RenderData=(data)=>{
    
    const [classList,setClassList]=useState("show");
    const [classList1,setClassList1]=useState("hide");

    const handelMax=(e)=>{
      //  const max=document.getElementsByClassName("show");
      setClassList(classList==="show"?"hide":"show")
        setClassList1(classList1==="hide"?"show":"hide")
    }
    return(
        
        
        <Table>
            <TableRow>
                <th>Cutomer Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Primium</th>
                <th><Button onClick={handelMax}>Max/Min bids</Button></th>
            </TableRow>
            
                {data.map((item,index)=>{
                    var max=0;
                    var min=999999999;
                     
                    {item.bids.map((bidData,bidIdx)=>{
                        
                        const amount=bidData.amount;
                        
                         if(amount>max)
                         {
                             max=amount;
                        }
                        if(min>amount)
                        {
                            min=amount;
                        }
                        return(max,min,bidIdx)        
                    })}
                    
                   
                return (
                   
                    <>
                     
                    <tr key={index}>
                   
                        <NavLink to={"/bid"}><td className="color"><div>{item.firstname} {item.lastname} </div><img src={item.avatarUrl}></img></td></NavLink>
                        
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{(item.hasPremium).toString()}</td>
                        
                        
                        <td ><i className={`${classList}`}>{max}</i> <i className={`${classList1}`}>{min}</i></td>
                     </tr>
                </>)
            })}
            
            
        </Table>
    )
}

export default RenderData;
import { useEffect, useState } from "react"
import React from "react";
import Select from 'react-select';
import { getAllManagers, updateReimbursementApi } from "../Api/Reimbursement";
import { useLocation } from "react-router";
import { NotificationManager } from "react-notifications";
import Navigation from "./navigation";

export default function Update(){

    const getReimbursementId = useLocation().state;
    const reimburse = getReimbursementId.reimburse
    const oldstatus = reimburse.status
    const oldmanager = reimburse.assignedManager
    const reimburseid = reimburse.reimbursementId
    const[status, setStatus] = useState("")
    const[assign, setAssign] = useState([])
    const[manager, setManager] = useState("")
    const[update, setUpdate] = useState({reimburseId: reimburseid, status: oldstatus, assign:oldmanager})
    

    const statusOptions = [
        { value: 'UNDER_REVIEW', label: 'UNDER_REVIEW' },
        { value: 'APPROVED', label: 'APPROVED' },
        { value: 'DENY', label: 'DENY' },
        {value: "REASSIGNED", label: "REASSIGNED"}
      ];
      
      useEffect(()=> {
          
        getAllManagers().then(response => {
        setAssign(response)
        
        }).catch(error => {
            console.log(error)
        })

      }, [])

     
      
      const handleChange = (event) => {
        const { name, value } = event.target;
       setUpdate((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }



     const  handleSubmit = (event) => {
        event.preventDefault()
       updateReimbursementApi(update).then(response => {
        NotificationManager.success("Successfully Updated")
           console.log(response)
       }).catch(error =>{
        NotificationManager.error("Error while updating")
           console.log(error)
       })
      }


    return(

        <div>
            <Navigation/>
            <form onSubmit={handleSubmit} border="5">
                <div>
                <label>Reimbursement ID</label>
                <input
                type= "text"
                name="reimburseId"
                value={reimburse.reimbursementId}
                 />
                 </div>
                 <br/>

                

                <div>
                <label>
                    Reassign Status
                    <select value={update.status} onChange={handleChange} name="status">
                       
                            {
                                statusOptions && statusOptions.length > 0 ? statusOptions.map(status => <option key={status.value}> {status.label}</option> ):""
                            }
                       
                    </select>

                </label>
                </div>

                <br/>

                

                <div>
                <label>
                    Reassign Manager
                    <select value={update.assign} onChange={handleChange} name="assign">
                       
                            {
                               assign && assign.length > 0 ? assign.map(status => <option key={status.value}> {status.label}</option> ):""
                            }
                       
                    </select>

                </label>
                </div>


                <br/>





                

                 <button type="submit"> UPDATE</button>




            </form>

            

        </div>
    )
}
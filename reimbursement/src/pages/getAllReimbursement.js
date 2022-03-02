import { useEffect, useState } from "react"
import { NotificationManager } from "react-notifications"
import { getEmployees, getAllReimbursement } from "../Api/Reimbursement"
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router'
import Table from 'react-bootstrap/Table'
import Navigation from "./navigation"


export default function GetAllReimbursement(){
    const[reimburse , setReimburse] = useState([])
        const role = sessionStorage.getItem("role")
        const navigate = useNavigate();

    useEffect(() => {
        if(role === "MANAGER"){
        
       getAllReimbursement().then(response => {
            setReimburse(response)
        }).catch(error => {
           console.log(error)
        })
    } else{
        NotificationManager.error("You Are Not Authorized Access")
        navigate(-1)
    }

    }, [])

    return (
    
        
       <div>
           <Navigation/>

           <h1>LIST OF ALL REIMBURSEMENT</h1>

 <Table striped bordered hover>
    <thead>
    <tr>
      <th>Reimbursement ID</th>
      <th>Assigned Manager</th>
      <th>Reimburse Amount</th>
      <th>Reimbursement Status</th>
      <th>Date Created</th>
      <th>Purpose</th>
      <th>UPDATE</th>
    </tr>
  </thead>
  <tbody>
   
        <td>
                 {
                      reimburse && reimburse.length > 0 ? reimburse.map(reimburses => <div key={reimburses.reimbursementId}>{reimburses.reimbursementId}</div>): ""
                  }
      </td>
      
   
  
        <td>
                  {
                      reimburse && reimburse.length > 0 ? reimburse.map(reimburses => <div key={reimburses.reimbursementId}>{reimburses.assignedManager}</div>): ""
                  }
        </td>
     

        <td>
                  {
                      reimburse && reimburse.length > 0 ? reimburse.map(reimburses => <div key={reimburses.reimbursementId}>{reimburses.reimbursementAmount}</div>): ""
                  }
              </td>

              <td>
                  {
                      reimburse && reimburse.length > 0 ? reimburse.map(reimburses => <div key={reimburses.reimbursementId}>{reimburses.status}</div>): ""
                  }
              </td>

              <td>
                  {
                      reimburse && reimburse.length > 0 ? reimburse.map(reimburses => <div key={reimburses.reimbursementId}>{reimburses.reimbursementCreatedDate}</div>): ""
                  }
              </td>

              <td>
                  {
                      reimburse && reimburse.length > 0 ? reimburse.map(reimburses => <div key={reimburses.reimbursementId}>{reimburses.purpose}</div>): ""
                  }
              </td>

              
              <td>
                  {
                      reimburse && reimburse.length > 0 ? reimburse.map(reimburses => <div key={reimburses.reimbursementId}><Link to="/reimburse/update" state={{reimburse: reimburses}}><button>UPDATE</button></Link></div>): ""
                  }
              </td>



 
   
  </tbody>
</Table>

</div>
    )
}
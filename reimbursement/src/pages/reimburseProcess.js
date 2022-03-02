import { useEffect, useState } from "react"
import { NotificationManager } from "react-notifications"
import { getAllReimbursementProcess, getEmployees, getReimbursement } from "../Api/Reimbursement"
import { useLocation ,useNavigate} from "react-router"
import Table from 'react-bootstrap/Table'
import Navigation from "./navigation"

export default function GetUserReimbursementProcess(){
    const[reimburse , setReimburse] = useState([])
    const[updating, setUpdating] = useState("")
    const updates = useLocation().state
    console.log(updates)
    const role = sessionStorage.getItem("role")
    const navigate = useNavigate()
       
   

    useEffect(() => {
        if(role === "EMPLOYEE"){
        
     getAllReimbursementProcess(updates.reimburse).then(response => {
            console.log(response)
            setReimburse(response)
        }).catch(error => {
           console.log(error)
              
        })
    }else{
        NotificationManager.error("You Are Not Authorized Access")
        navigate(-1)
    }
   
    
    }, [])

    return (
        <div>
              <Navigation/>
            <h1>LIST  REIMBURSEMENT PROCESS</h1>

            <Table  striped bordered hover>
            <thead>
              <tr>
                  <th>Reimbursement ID</th>
                  <th>Assigned Manager</th>
                  <th> Reimburse Amount</th>
                  <th>Reimbursement Status</th>
                  <th> Date Created</th>
                  <th> Purpose</th>
                
              </tr>
            </thead>

            <tbody>

              <td>
                  {
                      reimburse && reimburse.length > 0 ? reimburse.map(reimburses => <div key={reimburses.id}>{reimburses.reimbursementId}</div>): ""
                  }
              </td>

             
              <td>
                  {
                      reimburse && reimburse.length > 0 ? reimburse.map(reimburses => <div key={reimburses.id}>{reimburses.assignedManager}</div>): ""
                  }
              </td>


              <td>
                  {
                      reimburse && reimburse.length > 0 ? reimburse.map(reimburses => <div key={reimburses.id}>{reimburses.reimbursementAmount}</div>): ""
                  }
              </td>

              <td>
                  {
                      reimburse && reimburse.length > 0 ? reimburse.map(reimburses => <div key={reimburses.id}>{reimburses.status}</div>): ""
                  }
              </td>

              <td>
                  {
                      reimburse && reimburse.length > 0 ? reimburse.map(reimburses => <div key={reimburses.id}>{reimburses.reimbursementCreatedDate}</div>): ""
                  }
              </td>

              <td>
                  {
                      reimburse && reimburse.length > 0 ? reimburse.map(reimburses => <div key={reimburses.reimbursementId}>{reimburses.purpose}</div>): ""
                  }
              </td>

            </tbody>





            </Table>
        </div>
    )
}
import { useEffect, useState } from "react"
import { NotificationManager } from "react-notifications"
import { getEmployees, getReimbursement } from "../Api/Reimbursement"
import { useLocation ,useNavigate} from "react-router"
import Table from 'react-bootstrap/Table'
import Navigation from "./navigation"
import {Link} from 'react-router-dom'

export default function GetUserReimbursement(){
    const[reimburse , setReimburse] = useState([])
    const[updating, setUpdating] = useState("")
    const updates = useLocation().state
    const role = sessionStorage.getItem("role")
    const navigate = useNavigate()
       
   

    useEffect(() => {
        if(role === "EMPLOYEE"){
        
       getReimbursement().then(response => {
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
            <h1>LIST OF ALL YOUR REIMBURSEMENT</h1>

            <Table  striped bordered hover>
            <thead>
              <tr>
                  <th>Reimbursement ID</th>
                  <th>Assigned Manager</th>
                  <th> Reimburse Amount</th>
                  <th>Reimbursement Status</th>
                  <th> Date Created</th>
                  <th> Purpose</th>
                  <th>Get Processes</th>
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
                      reimburse && reimburse.length > 0 ? reimburse.map(reimburses => <div key={reimburses.reimbursementId}><Link to="/process" state={{reimburse: reimburses.reimbursementId}}><button>GET REIMBURSEMENT PROCESS</button></Link></div>): ""
                  }
              </td>
            </tbody>





            </Table>
        </div>
    )
}
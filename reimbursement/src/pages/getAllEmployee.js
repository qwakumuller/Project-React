import { useEffect, useState } from "react"
import { getEmployees } from "../Api/Reimbursement"
import { useLocation , useNavigate} from "react-router"
import Table from 'react-bootstrap/Table'
import Navigation from "./navigation"


export default function GetAllEmployee(){
    const[employees , setEmployees] = useState([])
    const update = useLocation().state

   

    useEffect(() => {
        getEmployees().then(response => {
            console.log(response)
            console.log(update)

            setEmployees(response)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <div>
              <Navigation/>
            <h1>LIST OF ALL EMPLOYEE IN THE COMPANY</h1>

            <Table striped bordered hover>
            <thead>
              <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th> EmailAddress</th>
                  <th>Role</th>
              </tr>
            </thead>

            <tbody>

              <td>
                  {
                      employees && employees.length > 0 ? employees.map(employee => <div key={employee.employeeId}>{employee.firstName}</div>): ""
                  }
              </td>

              <td>
                  {
                      employees && employees.length > 0 ? employees.map(employee => <div key={employee.employeeId}>{employee.lastName}</div>): ""
                  }
              </td>

              <td>
                  {
                      employees && employees.length > 0 ? employees.map(employee => <div key={employee.employeeId}>{employee.emailAddress}</div>): ""
                  }
              </td>

              <td>
                  {
                      employees && employees.length > 0 ? employees.map(employee => <div key={employee.employeeId}>{employee.role}</div>): ""
                  }
              </td>

            </tbody>


            </Table>
        </div>
    )
}
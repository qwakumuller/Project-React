import axios from 'axios'
import {useEffect, useState} from 'react'
import { NotificationManager } from 'react-notifications'
import { useNavigate } from 'react-router'
import {  loginApi } from '../Api/Reimbursement'
import { Form, Button, Col, Container} from 'react-bootstrap';
import PublicNavigation from './publicNavigation'

export default function Login(){
  const roles = sessionStorage.getItem("role")
    const[login, setLogin] = useState({ username: "", password:"" })
    const[role, setRole] = useState(roles)
    const navigate = useNavigate();

   

    // useEffect(() => {
    //   console.log(role)
   
    //   if(role === "MANAGER"){
    //     navigate("/reimburse/getAll")
    //   } else if(role === "EMPLOYEE") {
    //    console.log("I am here as EMPLOYEE")
    //      navigate("/reimburse/get", {state:{update:"true"}})
    //   } else{

    //   }
      

    // }, [role])


    const handleSubmit = (event) => {
        event.preventDefault()
         loginApi(login).then(response => {
             if(response){
                 sessionStorage.setItem("token", response.authToken)
                sessionStorage.setItem("role", response.role)
                sessionStorage.setItem("user", response.user)
            NotificationManager.success("Successfully Login")
            setRole(response.role)
            navigate("/home")
             
            
             }
             
          }).catch(error => {
            if(error.response.data){
                NotificationManager.error(error.response.data.message)
            }else{
              NotificationManager.error("Error Occured While Loging In")
            }
            
          })
           // console.log(employee)
         
     }
 
     const handleChange = (event) => {
         const { name, value } = event.target;
        setLogin((prevState) => ({
         ...prevState,
         [name]: value,
       }));
     }

    return(

        <div className="createForm">
          <PublicNavigation/>

<Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>User Name</Form.Label>
    <Form.Control
      type="text"
      name="username"
      value={login.username}
      onChange ={handleChange}
   
       />

  </Form.Group>



  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Password</Form.Label>
    <Form.Control
      type="password"
      name="password"
      value={login.password}
      onChange ={handleChange}
   
       />
  
  </Form.Group>

  <Button variant="primary" type="submit">
    LOGIN
  </Button>

  </Form>

           
        </div>
    )
}
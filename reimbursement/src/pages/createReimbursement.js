import {useEffect, useState} from 'react'
import { NotificationManager } from 'react-notifications'
import { useNavigate } from 'react-router'
import { createReimbursementByEmployee } from '../Api/Reimbursement'
import Navigation from './navigation'
import { Form, Button, Col, Container } from 'react-bootstrap';

export default function CreateReimbursement(){
    const[reimburse, setReimburse] = useState({reimbursementAmount : '' , purpose: ""})
    const roles = sessionStorage.getItem("role")
    const navigate = useNavigate();




    useEffect(()=> {
      if(roles === "MANAGER"){
        navigate(-1)
        
      }


    }, [])





    

    const handleSubmit = (event) => {
        event.preventDefault()
          createReimbursementByEmployee(reimburse).then(response => {
            NotificationManager.success("Successfully Created Reimbursement")
              console.log(response)
          }).catch(error => {
            if(error.message){
              NotificationManager.error(error.message)
            }else{
            NotificationManager.error("Error while Submitting Your Request")
              console.log(error)
            }
          })

          
          
         
     }
 
     const handleChange = (event) => {
         const { name, value } = event.target;
        setReimburse((prevState) => ({
         ...prevState,
         [name]: value,
       }));
     }

  return (
    

    <div>
      <Navigation/>


      <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Reimburse Amount</Form.Label>
    <Form.Control
      type="text"
      name="reimbursementAmount"
      value={reimburse.reimbursementAmount}
      onChange ={handleChange}
   
       />
    <Form.Text className="text-muted">
    Please Verify Your Email, Before LogIn
    </Form.Text>
  </Form.Group>



  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Purpose Of Reimbursement</Form.Label>
    <Form.Control
      type="text"
      name="purpose"
      value={reimburse.purpose}
      onChange ={handleChange}
   
       />
  
  </Form.Group>

  <Button variant="primary" type="submit">
  REQUEST A REIMBURSEMENT
  </Button>

  </Form>
           

   
     </div>

  )
}
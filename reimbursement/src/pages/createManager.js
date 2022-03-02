import {useState} from 'react'
import { NotificationManager } from 'react-notifications'
import { createManagerApi } from '../Api/Reimbursement'
import { Form, Button, Col, Container } from 'react-bootstrap';
import PublicNavigation from './publicNavigation';
export default function CreateManager(){
    const[employee, setEmployee] = useState({firstName : '', lastName:"", userName:"", emailAddress:"", password:"" })

    const handleSubmit = (event) => {
        event.preventDefault()
          createManagerApi(employee).then(response => {
            alert("Please Verify Your Account Via an Email That Has Been Sent To You")
            NotificationManager.success("Successfully Created Manager Account")
              console.log(response)
          }).catch(error => {
            if(error.response.data){
              NotificationManager.error(error.response.data.message)
            }else{
            NotificationManager.error("Error while Creating Account")
            }
          })
         
         
     }
 
     const handleChange = (event) => {
         const { name, value } = event.target;
        setEmployee((prevState) => ({
         ...prevState,
         [name]: value,
       }));
     }

    return(

        <div className="createForm">
           
          <PublicNavigation/>

           <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control
    size="sm"
      type="text"
      name="firstName"
      value={employee.firstName}
      onChange ={handleChange}
       />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Last Name</Form.Label>
    <Form.Control
     type="text"
     name="lastName"
     value={employee.lastName}
     onChange ={handleChange}
   
      
       />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>User Name</Form.Label>
    <Form.Control
     type="text"
     name="userName"
     value={employee.userName}
     onChange ={handleChange}
   
      
       />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Password</Form.Label>
    <Form.Control
     type="password"
     name="password"
     value={employee.password}
     onChange ={handleChange}
   
      
       />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email Address</Form.Label>
    <Form.Control
     type="text"
     name="emailAddress"
     value={employee.emailAddress}
     onChange ={handleChange}
   
      
       />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

        </div>
    )
}
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import { BrowserRouter ,Route, Routes, Link } from 'react-router-dom';
export default function Navigation(){
    const role = sessionStorage.getItem("role")
    const getToken = sessionStorage.getItem("token")

    return(

        <div>
        <div className="row">
            <div className="col-md-12">
              
                    <Navbar bg="dark" variant="dark" expand="xxl" sticky="top">
                        <Navbar.Brand href="/home">REIMBURSEMENT </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto" class=".d-none">
                               { getToken === null ? "" : <Nav.Link  href="/logout">LogOut</Nav.Link> }
                                { getToken === null ? <Nav.Link href="/login">LogIn</Nav.Link> : "" }
                                <Nav.Link href="/createEmployee">Create Employee</Nav.Link>
                                { role === "MANAGER" ? <Nav.Link href="/createManager">Create Manager</Nav.Link>:"" }
                                <Nav.Link href='/getAll'>Get All Employee</Nav.Link>
                                { role === "MANAGER" ?  <Nav.Link href='/reimburse/getAll'>Get All Reimbursemnt</Nav.Link>:""}
                               { role === "MANAGER" ? "":<Nav.Link href='/reimburse/get'>Get My Reimbursement</Nav.Link> }
                                { role === "MANAGER" ? "":<Nav.Link href='/reimburse/create'>Create Reimbursement</Nav.Link> }
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <br />
                   
            </div>
        </div>
    </div>
    )
}
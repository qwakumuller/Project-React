import { NotificationManager } from "react-notifications"
import { useNavigate, } from "react-router"
import { logoutApi } from "../Api/Reimbursement"
import Login from "./login"
import axios from "axios"
import { useEffect } from "react"
import PublicNavigation from "./publicNavigation"

export default function LogOut() {
    const navigate = useNavigate();
    delete axios.defaults.headers.common['Authorization']
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("user")
    sessionStorage.removeItem("role")
     const logout = sessionStorage.getItem("token")

     useEffect(() => {
        if(logout === null || logout === "null"){
            NotificationManager.success("Succesfully LogOut")
             navigate("/login")
         }else {
             // do nothing
         }

     }, [])
    
  
    return(
        <div>
                <PublicNavigation/>

            <h1>Succesfully Log Out</h1>
            

        </div>
    )
}
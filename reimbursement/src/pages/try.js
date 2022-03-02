import axios from "axios";
import { useEffect, useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import LogOut from "./logout";

export default function Tryme(){
    const navigate = useNavigate();
    const  token = sessionStorage.getItem("token")
    const user = sessionStorage.getItem("user")
    const[userToken, setuserToken]= useState(token)
 
useEffect(() =>{
   
    if(userToken !== null){
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        axios.defaults.headers.common['User'] = user
    }else if(location.pathname !== "/createManager" ) {
        
        delete axios.defaults.headers.common['Authorization']
        navigate("/login")
    // } else if( location.pathname === "/createManager"){
      

    // }
    }
   

}, [userToken])
    
    return(
        <div className="try">
         <div>
                 
            </div>


        </div>
    )
}
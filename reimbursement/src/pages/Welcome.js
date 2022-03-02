import Navigation from "./navigation";
 
export default function Home(){
    const role = sessionStorage.getItem("role")
    const user = sessionStorage.getItem("user")
    return (
        <div>
            <Navigation/>

            <h1>WELCOME TO REIMBURSEMENT </h1>

                    <br/>
            <h2>You are in the {role} Modal</h2>
          

        </div>
    )
}
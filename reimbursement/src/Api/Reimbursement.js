import axios from "axios"
export const createEmployeeApi = async (employee) => {
    console.log(employee)
    const response = await axios.post("http://localhost:8081/employee/createEmployee", employee 
    )

    return response.data
}


export const createManagerApi = async (manager) => {
    const response = await axios.post("http://localhost:8081/employee/createManager",manager
     )

    return response.data
}

export const updateReimbursementApi = async (update) => {
    const response = await axios.post("http://localhost:8081/api/updateReimburse",update
     )

    return response.data
}

export const loginApi = async (login) => {
    const response = await axios.post("http://localhost:8081/auth/login", login)
    return response.data
}

export const logoutApi = async() => {
    delete axios.defaults.headers.common['Authorization']
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("user")
    sessionStorage.removeItem("role")
    
}

export const getEmployees = async() => {
   
    const response = await axios.post("http://localhost:8081/employee/getAll") 
    return response.data
}

export const createReimbursementByEmployee = async(reimbursementAmount) => {
    const response = await axios.post("http://localhost:8081/api/reimburse",reimbursementAmount)
    return response.data
}

export const getReimbursement = async() => {
    const response = await axios.get("http://localhost:8081/api/")
    return response.data
}

export const getAllReimbursement = async() => {
    const response = await axios.get("http://localhost:8081/api/getAll")
    return response.data
}

export const getAllManagers = async() => {
    const response = await axios.post("http://localhost:8081/api/getManagers")
    return response.data
}

export const getAllReimbursementProcess = async(reimburseId) => {
    const response = await axios.post("http://localhost:8081/api/getAllProcess", {reimburseId})
    return response.data
}
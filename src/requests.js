import axios from "axios";



const API_URL="https://capstone-project-backend-psl3.onrender.com/"


export function Vehicedetails() {
    return axios.get(`${API_URL}api/vehicles/`);
  }
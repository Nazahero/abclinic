import axios from "axios";

export default axios.create({
    baseURL: "https://api.abclinic.uz",
    headers: {
        "Content-Type": "application/json"
    }
})
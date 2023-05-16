import AutoCard from "@/@types/AutoCard";
import axios from "axios";

export const getClientsByPhoneNumber = async () => {
    const baseUrl = process.env
    .NEXT_PUBLIC_API_URL;

    try {
        const res = await axios.post(`${baseUrl}/clients/`, {
            phoneNumber: localStorage.getItem('nepeshkom_phoneNumber')
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}
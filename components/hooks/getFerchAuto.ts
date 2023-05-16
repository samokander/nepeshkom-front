import AutoCard from "@/@types/AutoCard";
import axios from "axios";

export const getAutoById = async (autoId: string | string[]) => {
    const baseUrl = process.env
    .NEXT_PUBLIC_ALL_AUTOS_ROUTE as string;

    try {
        const res = await axios.get(`${baseUrl}/${autoId}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
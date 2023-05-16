import axios from "axios";

export const addRentRequest = async (autoId: number, startDate: string | Date, endDate: string | Date) => {
    const baseUrl = process.env
    .NEXT_PUBLIC_API_URL as string;

    try {
        const res = await axios.post(`${baseUrl}/requests/add-rent`, {
            clientIntegrationId: localStorage.getItem('nepeshkom_cliendId'),
            clientPhone: localStorage.getItem('nepeshkom_phoneNumber'),
            documentsUrls: ["", ""],
            requestDealTypeId: 31843,
            requestFilialId: 1,
            rentFilialFrom: 1,
            rentFromTime: startDate,
            rentToTime: endDate,
            tarifId: -100,
            autoId: autoId
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}
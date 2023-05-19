export const getLocalStorageClientData = () => {
    return {
        phoneNumber: typeof window !== "undefined" ? localStorage.getItem('nepeshkom_phoneNumber') : null,
        cliendId: typeof window !== "undefined" ? localStorage.getItem('nepeshkom_cliendId') : null
    }
}
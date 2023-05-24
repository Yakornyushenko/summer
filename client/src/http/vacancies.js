import axios from "axios";

export const getVacancy = async (id) => {
    const {data} = await axios.get(`https://summer-startup.onrender.com/api/${id}`)
    return data
}
export const getCategories = async () => {
    const {data} = await axios.get('https://summer-startup.onrender.com/catalogues/')
    return data
}
export const getVacancies = async ( accessToken, page, count, keyword, catalogues, payment_from, payment_to ) => {
    const {data} = await axios.get('https://summer-startup.onrender.com/api/vacancies', {
        params: {
            page,
            count,
            payment_from,
            payment_to,
            catalogues,
            keyword,
        },
        headers: {
            accessToken
        }
    });
    return data
}
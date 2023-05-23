import axios from "axios";

export const getVacancy = async (id) => {
    const {data} = await axios.get(`http://localhost:10000/api/${id}`)
    return data
}
export const getCategories = async () => {
    const {data} = await axios.get('http://localhost:10000/api/catalogues/')
    return data
}
export const getVacancies = async ( accessToken, page, count, keyword, catalogues, payment_from, payment_to ) => {
    const {data} = await axios.get('http://localhost:10000/api/vacancies', {
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
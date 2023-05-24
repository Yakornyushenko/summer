import axios from "axios";

export const auth = async () => {
    try {
        const {data} = await axios.get('https://summer-startup.onrender.com/api/auth/',
            {params: {password: 'paralect123', login: 'sergei.stralenia@gmail.com'}});
        return data
    } catch (err) {
        console.log(err.message)
    }

}
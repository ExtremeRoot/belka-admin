import axios from 'axios'


// get all submissions
export const getAllSubmissions = async (token) => {
    return await axios.get(`https://secret-cove-74601.herokuapp.com/api/submission`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}
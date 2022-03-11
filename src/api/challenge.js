import axios from 'axios';


// create a challenge
export const createChallenge = async ({challenge, token}) => {
    console.log(challenge)
    return await axios.post(`${process.env.REACT_APP_API_URL}/api/problem`, challenge, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
        }
    });
}
import axios from 'axios';

// get all categories
export const getAllCategories = async () => {
    return await axios.get(`${process.env.REACT_APP_API_URL}/api/category`);
}


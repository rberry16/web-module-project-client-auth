import axios from "axios";

const axioswithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
            headers: {
                authorization: token
            },
            baseURL: 'http://localhost:9000/api'
        })
    }

export default axioswithAuth;
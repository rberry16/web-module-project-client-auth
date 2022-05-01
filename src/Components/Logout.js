import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Logout = () => {
    const {push} = useHistory();

    const token = localStorage.getItem('token');

    useEffect(() => {
        axios.post('http://localhost:9000/api/logout', {}, {headers: {authorization: token}})
            .then(localStorage.removeItem('token'));

        push('/');
    }, [])
    return(<div />);
}

export default Logout;
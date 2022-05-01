import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
    const {push} = useHistory();
    const [creds, setCreds] = useState({
        username: '',
        password: '',
    })

    const handleChange = evt => {
        evt.preventDefault();
        setCreds({
            ...creds,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        axios.post('http://localhost:9000/api/login', {username: `${creds.username}`, password: `${creds.password}`})
            .then(res => {
                localStorage.setItem('token', res.data.token)
                push('/friends')
            })
            // .catch(err => {
            //     console.error(err);
            // })
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>username</label>
                    <input onChange={handleChange} name='username' id='username' />
                </div>
                <div>
                    <label htmlFor='password'>password</label>
                    <input onChange={handleChange} name='password' type='password' id='password' />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Login;
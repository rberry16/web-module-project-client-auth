import React, { useState } from "react";

const Login = () => {
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

    const handleSubmit = (evt) => {
        evt.preventDefault();
    }

    return (
        <div>
            <h1>Login</h1>
            <form>
                <div>
                    <label htmlFor='username'>username</label>
                    <input onChange={handleChange} name='username' id='username' />
                </div>
                <div>
                    <label htmlFor='password'>password</label>
                    <input onChange={handleChange} name='password' id='password' />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Login;
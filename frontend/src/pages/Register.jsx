import { useState } from "react";
import "../styles/Register.css"
import axios from 'axios'

function Register() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit= (e) => {
        e.preventDefault();
        axios.post('', {name, email, password})
        .then(result => console.log(result))
        .catch(err = console.log(err))
    }

    return(
        <>
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
                <div className="form">
                    <label htmlFor="email">
                        <strong>Name:</strong>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        autoComplete="off"
                        name="user-name"
                        className="input-info"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form">
                    <label htmlFor="email">
                        <strong>Email:</strong>
                    </label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        className="input-info"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form">
                    <label htmlFor="email">
                        <strong>Password:</strong>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        className="input-info"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <br></br>
                <button className="signup-button">
                    Register
                </button>
            </form>
        </>
    )
}

export default Register;
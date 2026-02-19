import "../styles/Register.css"

function Register() {

    return(
        <>
            <h1>Register Page</h1>
            <form>
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
import { useState } from "react";
import "../../styles/Dropdown.css"

function Dropdown () {
    return(
        <>
            <div className="dropdown-body">
                <p>
                    <a href="/register">Register</a>
                </p>
                <p>
                    <a href="/signIn">Sign In</a>
                </p>
            </div>
        </>
    )

}

export default Dropdown;
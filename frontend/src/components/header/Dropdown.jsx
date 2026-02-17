import { useState } from "react";
import "../../styles/Dropdown.css"

function Dropdown () {
    return(
        <>
            <div className="dropdown-body">
                <ul className="dropdown-ul">
                    <li>Register</li>
                    <li>Sign In</li>
                </ul>
            </div>
        </>
    )

}

export default Dropdown;
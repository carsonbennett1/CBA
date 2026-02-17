import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "../../styles/Header.css"
import Register from "../../pages/Register";
import "../../styles/Dropdown.css"
import Dropdown from "./Dropdown";


const Header = () => {
    const [dropdownStatus, setDropdownStatus] = useState(false);

    return (
        <>
            <header>
                <h1><u>Welcome to Carson's Book Archive</u></h1>
                <nav className="main-nav">
                    <a href='/'>Home</a>
                    <a href='/add'>Add Book</a>
                    <a href='/delete'>Delete Book</a>
                    <a href='/update'>Update Book</a>
                    <a href='/playground'>Playground</a>
                    <button onClick={() => setDropdownStatus((prev) => !prev)} className="dropdown-button">
                        Profile
                    </button>
                    {
                        dropdownStatus && <Dropdown/>
                    }
                </nav>
            </header>
        </>
    );
};

export default Header;
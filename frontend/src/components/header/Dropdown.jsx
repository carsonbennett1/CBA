import { dropdownItems } from "./DropdownItems";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../../styles/Dropdown.css"

function Dropdown () {
    const [dropdown, setDropdown] = useState(false);


    return(
        <>
            <ul className={dropdown ? "dropdown-submenu clicked" : "dropdown-submenu"} onClick={() =>setDropdown(!dropdown)}>
                { dropdownItems.map(item => {
                    return (
                        <li key={item.id}>
                            <Link to={item.path} className={item.cName} onClick={() => setDropdown(false)}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )

}

export default Dropdown;
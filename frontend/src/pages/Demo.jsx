import { useState } from "react";
import Header from "../components/header/Header";
import "../styles/Demo.css"

function Demo() {

    const [random, setRandom] = useState(0);

    function getRandom(){
        let random = Math.floor(Math.random() * 256)
        setRandom(random)
    }

    return(
        <>
            <Header />
            <div id="main">
                <h3>Difficulty Selector:</h3>

                <button className="button-spacing">EASY</button>
                <button className="button-spacing">HARD</button>

                <h3>Click Button Below to Generate Random Number</h3>
                <button onClick={getRandom}>Random Button</button>
                <p className="output">
                    {random}
                </p>
            </div>
        </>
    )

}

export default Demo;
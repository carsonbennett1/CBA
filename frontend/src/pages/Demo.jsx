import { useState } from "react";
import Header from "../components/header/Header";
import "../styles/Demo.css"

function Demo() {

    const [random, setRandom] = useState(0);
    const [difficulty, setDifficulty] = useState(6);

    function getRandom(){
        let random = Math.floor(Math.random() * 256)
        setRandom(random)
    }

    const updateDifficultyEasy = () => {
        setDifficulty(3);
    }

    const updateDifficultyHard = () => {
        setDifficulty(6);
    }

    let items = []
    for(let i = 0; i < difficulty; i++){
        items.push(<p>{i}</p>);
    }

    return(
        <>
            <Header />
            <div id="main">
                <h3>Difficulty Selector:</h3>

                <button className="button-spacing" onClick={updateDifficultyEasy}>EASY</button>
                <button className="button-spacing" onClick={updateDifficultyHard}>HARD</button>

                <h3>Click Button Below to Generate Random Number</h3>
                <button onClick={getRandom}>Random Button</button>
                <p className="output">
                    {random}
                </p>

                <h3>Current Difficulty Selected:</h3>
                <p className="output">{difficulty}</p>

                <div className="difficulty-container">
                    {items}
                </div>
                
            </div>
        </>
    )

}

export default Demo;
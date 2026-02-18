import { useState } from "react";
import Header from "../components/header/Header";
import "../styles/Demo.css"

function Demo() {
    let randomNum = Math.floor(Math.random() * 5)
    let colors = ["red", "blue", "green", "purple"]

    const [random, setRandom] = useState(randomNum);
    const [difficulty, setDifficulty] = useState(6);

    const updateDifficultyEasy = () => {
        setDifficulty(3);
        setRandom(Math.floor(Math.random() * difficulty))
    }

    const updateDifficultyHard = () => {
        setDifficulty(6);
        setRandom(Math.floor(Math.random() * difficulty))
    }

    const nodeSelected = (item) => {
        if(item === random){
            alert("Correct guess!");
            randomNum = Math.floor(Math.random() * difficulty)
            setRandom(randomNum)
        }
    }

    let items = []
    for(let i = 0; i < difficulty; i++){
        items.push(
            <div
                key={i}
                className="node" 
                onClick={() => nodeSelected(i)}>
                {i}
            </div>
        );
    };

    return(
        <>
            <Header />
            <div id="main">
                <h3>Difficulty Selector:</h3>

                <button className="button-spacing" onClick={updateDifficultyEasy}>EASY</button>
                <button className="button-spacing" onClick={updateDifficultyHard}>HARD</button>

                <div className="difficulty-container">
                    {items}
                </div>
            </div>
        </>
    )

}

export default Demo;
import { useState } from "react";
import Header from "../components/header/Header";
import "../styles/Demo.css"

function Demo() {
    let randomNum = Math.floor(Math.random() * 5);

    let generateRGB0 = Math.floor(Math.random() * 256);
    let generateRGB1 = Math.floor(Math.random() * 256);
    let generateRGB2 = Math.floor(Math.random() * 256);

    //TODO:
    // PRINT out the generated RGB combo
    // Have generated rbg correct guess be registered

    let RGB = `rgb(${generateRGB0}, ${generateRGB1}, ${generateRGB2})`

    let colors = []

    const [random, setRandom] = useState(randomNum);
    const [difficulty, setDifficulty] = useState(6);

    for(let j = 0; j < difficulty; j++){
        generateRGB0 = Math.floor(Math.random() * 256);
        generateRGB1 = Math.floor(Math.random() * 256);
        generateRGB2 = Math.floor(Math.random() * 256);
        RGB = `rgb(${generateRGB0}, ${generateRGB1}, ${generateRGB2})`
        colors.push(RGB);
    }

    let itemToGuess = colors[random];

    const updateDifficultyEasy = () => {
        setDifficulty(3);
        setRandom(Math.floor(Math.random() * difficulty))
    }

    const updateDifficultyHard = () => {
        setDifficulty(6);
        setRandom(Math.floor(Math.random() * difficulty))
    }

    const nodeSelected = (item) => {
        if(item === itemToGuess){
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
                onClick={() => nodeSelected(i)}
                style={{backgroundColor: colors[i]}}
                >
                {i}
            </div>
        );
    };

    return(
        <>
            <Header />
            <div id="main">
                <h3>Difficulty Selector:</h3>
                
                <h4>Item to Guess</h4>
                <p>{itemToGuess}</p>

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
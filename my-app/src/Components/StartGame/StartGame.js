import React from "react";
import BackCard from "../../img/rev/purple_back.png";
import {Link} from "react-router-dom";
// import "./StartGame.css"



const StartGame = ({handleStart, changeRange}) => {
    return (
        <>
            <div className="cardContainer">
                <button className="btnChangeRange" onClick={changeRange}>Zmień zakres</button>
                <button className="btnStart" onClick={handleStart}>Start!</button>
                <img src={BackCard} className="cardStyle" alt="card"/>
            </div>
        </>
    )
}
export default StartGame

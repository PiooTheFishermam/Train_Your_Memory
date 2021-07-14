import React, {useState,useEffect} from "react";
// import "./game.css"
import ShowCard from "../ShowCard/ShowCard";
import shuffle from "lodash/shuffle"
// import Images from "../../img/images.jpg"


const Game = (props)=>{
    const {shuffledCards,setShuffledCards, setCardsFromRange,cardsFromRange,timeResult,setTimeResult,setResults}=props;

    const [range,setRange]=useState(0);
    const [flag,setFlag]=useState(false);

    const handleRange = (e) => {
        if(e.target.innerText === "+"){
            setRange(prev=>prev+1);
        }
        if(e.target.innerText === "-" && range>0){
            setRange(prev=>prev-1);
        }
    }
    const handleStart = ()=>{
        setShuffledCards(prev=>[...shuffle(prev)]);
        if(range>0){
            setFlag(true);
        }
    }
    const changeRange = ()=>{
        setShuffledCards(prev=>[...shuffle(prev)]);
        setFlag(false);
        setCardsFromRange([]);
    }

    if(!flag){
        return (
            <>
                <div className="container">
                    <div className="game-container" >
                        <p className="title_game">Witaj w grze!</p>
                        <div className="chooseRangeMenu">
                        <h1 className="chooseRangeMenu-title">Wybierz ilość kart</h1>
                            <div className="btn_game-container">
                                <button className="addRemoveBtn" onClick={handleRange}>-</button>
                                <p className="value">{range}</p>
                                <button className="addRemoveBtn" onClick={handleRange}>+</button>
                            </div>
                        </div>
                        <button className={"btnPrimary"} onClick={handleStart}>Przejdź do gry !</button>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="container">
                {range?<ShowCard 
                            range={range} 
                            changeRange={changeRange} 
                            shuffledCards={shuffledCards}
                            setCardsFromRange={setCardsFromRange}
                            cardsFromRange={cardsFromRange}
                            setTimeResult={setTimeResult}
                            timeResult={timeResult}
                            setResults={setResults}
                            /> : null}
            </div>
        </>
    )
}

export default Game;


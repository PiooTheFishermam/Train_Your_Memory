import React, {useState,useEffect} from "react";
import _ from "lodash";
import {Link} from "react-router-dom";
import Card from "../Cards/Cards";
import StartGame from "../StartGame/StartGame"
import Verification from "../Verification/Verification";
// import "./ShowCard.css"



const ShowCard = (props)=>{

    const {range,changeRange, shuffledCards,cardsFromRange,setCardsFromRange,timeResult,setTimeResult,setResults}=props
    const [count,setCount] = useState(0);
    const [card,setCard] = useState(null); 
    const [flag,setFlag] = useState(false);
    const [isAll,setIsAll] = useState(false);
    const [isUserCheckItOut,setIsUserCheckItOut] = useState(false);
    const [userSelectionCards,setUserSelectionCards] = useState([]);
    const [selectCounter,setSelectCounter] = useState(0);
    const [viewSelectedCard,setViewSelectedCard] = useState(null);
    const [win,setWin] = useState(false);

    useEffect(()=>{
        setTimeResult(undefined);
        setCardsFromRange([]);
    },[])

    useEffect(()=>{
        if(count===range){
            setIsAll(true);
        }
    },[count,range]);
    useEffect(()=>{
        if(card !==null){
            setCardsFromRange(prev=>[...prev,card]); 
        }  
    },[card]);
    const handleStart = ()=>{
        if(!flag) setFlag(prev=>!prev);
        if(count<range) setCount(prev=>prev+1);
        if(count===range) {setCount(0);}
        setCard(shuffledCards[count].url);
    };
    const handleCheckBtn = ()=>{
        setIsUserCheckItOut(true);  
    }

    if(!flag){
        return  <StartGame 
        handleStart={handleStart} 
        changeRange={changeRange}/>
    }
    if(isUserCheckItOut){
        return <Verification 
        selectCounter={selectCounter} 
        setSelectCounter={setSelectCounter} 
        shuffledCards={shuffledCards} 
        viewSelectedCard={viewSelectedCard} 
        setViewSelectedCard={setViewSelectedCard} 
        range={range} 
        userSelectionCards={userSelectionCards} 
        setUserSelectionCards={setUserSelectionCards} 
        win={win} setWin={setWin} 
        cardsFromRange={cardsFromRange}
        timeResult={timeResult}
        setTimeResult={setTimeResult}
        setResults={setResults}
        changeRange={changeRange}/>    
    }
    return (
                <>
                    <div className="cardContainer">
                        <button className="btnChangeRange" onClick={changeRange}>Zmień zakres</button>
                        {!isAll&&<button className="btnStart absolute" disabled={isAll} onClick={handleStart}>Next</button>}
                        <Card name={card}/> 

                    {isAll&&<div className="centerBtn"><button className="checkItOut" onClick={handleCheckBtn} >Sprawdź</button></div>}
                    </div>
                </>
    )
}
export default ShowCard


// // json-server --watch database/cards.json
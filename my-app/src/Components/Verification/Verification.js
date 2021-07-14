import React, {useState,useEffect}  from "react";
import {Link} from "react-router-dom";
import Card from "../Cards/Cards";
// import "./Verification.css";
import ImageCard from "../../img/rev/honor_heart-14.png";


const Verification = (props) => {
    
    const {viewSelectedCard, setViewSelectedCard, selectCounter, setSelectCounter, shuffledCards, range, userSelectionCards,setUserSelectionCards, win, setWin, cardsFromRange,timeResult,setTimeResult,setResults,changeRange} = props;

    const [isDisabled, setIsDisable] = useState(false);
    const [seconds,setSeconds] = useState([]);
    const [flagTest,setFlagTest] = useState(null);
    
    const cardsArr = ["2 Żołądź",
    "2 Dzwonek",
    "2 Czerwo",
    "2 Wino",
    "3 Żołądź",
    "3 Dzwonek",
    "3 Czerwo",
    "3 Wino",
    "4 Żołądź",
    "4 Dzwonek",
    "4 Czerwo",
    "4 Wino",
    "5 Żołądź",
    "5 Dzwonek",
    "5 Czerwo",
    "5 Wino",
    "6 Żołądź",
    "6 Dzwonek",
    "6 Czerwo",
    "6 Wino",
    "7 Żołądź",
    "7 Dzwonek",
    "7 Czerwo",
    "7 Wino",
    "8 Żołądź",
    "8 Dzwonek",
    "8 Czerwo",
    "8 Wino",
    "9 Żołądź",
    "9 Dzwonek",
    "9 Czerwo",
    "9 Wino",
    "10 Żołądź",
    "10 Dzwonek",
    "10 Czerwo",
    "10 Wino",
    "J Żołądź",
    "J Dzwonek",
    "J Czerwo",
    "J Wino",
    "Q Żołądź",
    "Q Dzwonek",
    "Q Czerwo",
    "Q Wino",
    "K Żołądź",
    "K Dzwonek",
    "K Czerwo",
    "K Wino",
    "As Żołądź",
    "As Dzwonek",
    "As Czerwo",
    "As Wino"];
    const Result = function (range,timeResult){
            this.range=range;
            this.timeResult=timeResult; 
    }


    useEffect(()=>{
        if(flagTest===null){
            if(userSelectionCards.length>0){
                userSelectionCards.forEach((card,i)=>{
                    if (card.url !== shuffledCards[i].url){
                        setIsDisable(true);
                        setFlagTest(true);
                        return console.log('WRONG!!! YOU LOSE') 
                    }else if(card.url===shuffledCards[i].url){
                        console.log('CORRECT!!! CHECK NEXT CARD');   
                        // if(userSelectionCards.length===range){
                        //     console.log('ok');
                        //     setIsDisable(true);
                        //     setWin(true);
                        //     console.log('wszystkie karty');
                        // }

                        // if(userSelectionCards[userSelectionCards.length-1].url === shuffledCards[userSelectionCards.length-1]){
                        //     setWin(true);
                        //     console.log('wygrałeś');
                        // }
                        // console.log(i);
                        // console.log(range);
                        if(i+1===range){
                            console.log(i);
                            console.log(range);
                            setWin(true);
                        }
                    }
                })             
            } 
        } else return
    },[userSelectionCards,range,flagTest]);

    // tworzy obiekt z wynikiem, trzeba to wysłać do db
    useEffect(()=>{
        if(flagTest===null){
            if(timeResult!==undefined){
                const newResult = new Result(range, timeResult);
                setResults(prev=>{
                    console.log(prev);
                    return[...prev,newResult]});
            }
        } else return
    },[timeResult,flagTest])

    useEffect(()=>{
        if(seconds.length===range){
            let result = (seconds[seconds.length-1] - seconds[0])/1000;
            setTimeResult(result);
        }
    },[seconds])

    const handleApprove = (e)=>{
        let time = new Date();
        setSeconds(prev=>[...prev,time.getTime()])
        if(selectCounter<range){
            setSelectCounter(prev=>prev+1);
            let card = shuffledCards.filter((obj,i)=>{
                if(obj.title === e.target.previousElementSibling.value){
                    return obj
                }
            })
            return setUserSelectionCards(prev=>[...prev,card[0]]);
        }
        setIsDisable(prev=>!prev)
    }
    const select = (e)=>{
        setViewSelectedCard(true);
        shuffledCards.filter((obj,i)=>{
            if(obj.title === e.target.value){
                return setViewSelectedCard(obj.url)
            }
        })
    }

    if(win){
        return <div className="summary">
                    <h1 className="title">Wygrałeś !!!</h1>
                    <p className="subTitle">Udało Ci się wskazać prawidłową kolejność</p>
                    <p className="userTimeResult">Twój czas to: <span>{timeResult}</span>s</p>
                    <div className="cardsContainer">
                        {userSelectionCards.map(card=><Card name={card.url} ></Card>)}
                    </div>
                    <div className="menu">
                        <button>
                            <Link to="/result">
                                <p>Tablica wyników</p>
                            </Link>
                        </button>
                        <button>
                            <p onClick={changeRange}>Spróbuj ponownie</p>
                        </button>
                        <button>
                            <Link to="/">
                                <p>Home</p>
                            </Link>
                        </button>
                    </div>     
                </div>
    }
    if(flagTest){
        return  <div className="viewLose">
                    <div className="loseContainer">
                        <h1 className="titleLose">Przegrałeś</h1>
                        <p className="description">Niestety nie udało Ci się wskazać prawidłowej kolejności</p>
                    </div>
                    {/* <h2>Poprawna kolejność</h2> */}

                    <div className="buttonsContainerResult">
                        {/* <Card name=""/> */}
                            <button className="btnAgain"onClick={changeRange}>Spróbuj ponownie</button>
                        <Link to ="/">
                            <button className="btnAgain">Strona główna</button>
                        </Link>
                    </div>
          
                </div>
    }  
    return (
        <>
                <div className="verifContainer">
                    <div className="selectContainer">
                        <select id="select" onChange={select}>
                            {cardsArr.map(card =><option key={card}>{card}</option>)}
                        </select>
                        <button className={"approve"}disabled={isDisabled}onClick={handleApprove}>Zatwierdź kartę</button>
                    </div>
                    {viewSelectedCard?<div><Card name={viewSelectedCard}/></div>:null} 
                </div>
        </>
    )
}

export default Verification

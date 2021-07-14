import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import React, {useState,useEffect} from "react";
import Game from "../Game/Game"
import Result from "../Result/Result";
import Home from "../Home/Home";
import shuffle from "lodash/shuffle";
import Instructions from "../Instructions/Instructions"



const App = ()=>{
    const [shuffledCards,setShuffledCards] = useState([]);
    const [cardsFromRange,setCardsFromRange] = useState([]);
    const [timeResult, setTimeResult] = useState();
    const [results,setResults] = useState([]);



    useEffect(()=>{
        const baseUrl ="http://localhost:3000";
        fetch(`${baseUrl}/cards`)
        .then(response =>response.json())
        .then(data=>setShuffledCards([...shuffle(data)])) 
        .catch(err=>console.log(err))
    },[]);

   
    
    return (
        <Router>
                <Switch>
                    <Route path="/game">
                        <Game 
                        shuffledCards={shuffledCards}
                        setShuffledCards={setShuffledCards}
                        cardsFromRange={cardsFromRange}
                        setCardsFromRange={setCardsFromRange}
                        setTimeResult={setTimeResult}
                        timeResult={timeResult}
                        setResults={setResults}/>
                    </Route>
                    <Route path="/instructions">
                        <Instructions
                        shuffledCards={shuffledCards}/>
                    </Route>
                    <Route path="/result">
                        <Result
                        results={results}/>
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
        </Router>
    )
}

export default App;

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import React from "react";
import Game from "../Game/Game"
import Result from "../Result/Result";
import Home from "../Home/Home"



const App = ()=>{



    useEffect(()=>{
        const baseUrl ="http://localhost:3000";
        fetch(`${baseUrl}/cards`)
        .then(response =>response.json())
        .then(data=>setShuffledCards([..._.shuffle(data)])) 
        .catch(err=>console.log(err))
    },[]);

    // const styleUl = {
    //     listStyle:"none",
    //     display:"flex",
    //     justifyContent:"flex-end",
    //     alignItems:"center",
    //     backgroundColor:"#000",
    //     margin:"0",
    //     height:"5vh",
    //     maxHeight:"7vh",
    // }

    // const styleLink = {
    //     textDecoration:"none",
    //     height:"100%",
    //     fontFamily:"arial",
    //     color:"#fff",
    //     padding: "15px 30px"

    // }
    
    return (
        <Router>
            {/* <div>
                <ul style={styleUl}>
                    <li>
                        <Link to="/" style={styleLink}>Home</Link>
                    </li>
                    <li>
                        <Link to="/game" style={styleLink}>Zagraj</Link>
                    </li>
                    <li>
                        <Link to="/result" style={styleLink}>Sprawdź wyniki</Link>
                    </li>
                </ul> */}
                <Switch>
                    <Route path="/game">
                        <Game/>
                    </Route>
                    <Route path="/result">
                        <Result/>
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            {/* </div> */}
        </Router>
    )
}

export default App;

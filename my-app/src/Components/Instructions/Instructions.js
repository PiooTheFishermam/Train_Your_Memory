import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import FourHeart from "../../img/4H.png";



const Instructions = ({shuffledCards})=>{
    const cardStyle = {
        maxHeight:"35vh",
        marginTop:"1rem"
    }
    return (
        <>
        <div>
            <h1>Jak grać</h1>
            <img src={FourHeart} style={cardStyle}/>
            <div>
                wybierz zakres
            </div>

        </div>
        </>
    )
}

export default Instructions
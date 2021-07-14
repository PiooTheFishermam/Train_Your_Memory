import React from "react";
import {CardsConfig,getImageByName} from "./CardsConfig"


const Card = ({name="",size=false})=>{
    const cardStyle = {
        maxHeight:"35vh",
        // maxHeight:"25vh",
        marginTop:"1rem"
    }
    // return <img src={CardsConfig[name]}/>
    return <img className="cardStyle" src={getImageByName(name)} />
    // return <img src={getImageByName(name)} />

}

export default Card
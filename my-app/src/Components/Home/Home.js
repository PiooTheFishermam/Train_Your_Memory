import React from "react";
import {Link} from "react-router-dom";
import "./home.css";
import ImageCard from "../../img/rev/honor_heart-14.png";
// import {DivStyle} from "./Home.styles";



const Home = ()=>{
      
    return (
            <>  
            <div className="container">
                <header className="header_home">
                    <h1 className="title_home">Train Your Brain</h1>
                    <div className="img_container-home">
                        <img src={ImageCard} alt="honor_heart" className="img_home"/>
                    </div>
                </header>
                <div className="background">      
                    <div className = "buttonContainer_home" >
                    {/* <Link to="/game">
                        <button className="btn_home">Graj!</button>
                    </Link>
                    <Link to="/instructions">
                        <button className="btn_home small">Instrukcja</button>
                    </Link> */}
                    <button className="btn_home">
                    <Link to="/game">
                        Graj!
                    </Link>
                    </button>
                    <button className="btn_home small">
                    <Link to="/instructions">
                        Instrukcja
                    </Link>
                    </button>
                    </div>
                </div>
            </div>
            {/* <DivStyle/> */}
            </>
        )
}

export default Home
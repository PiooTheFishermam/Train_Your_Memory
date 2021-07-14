import React, {useState,useEffect}  from "react";
import {Link} from "react-router-dom";
// import "./Result.css"

const Result = ({results})=>{
    const[reversResult,setReversResult]=useState([]);


    useEffect(()=>{
        setReversResult(results.reverse());
    },[results])

    return(
        <>
            <div className="container">
                <div className="result_container">
                    <h1 className="table_title">Twoje wyniki</h1>
                    <table>
                        <thead>
                            <tr>
                                <th className="table_cards">Ilość kart</th>
                                <th className="table_time">Czas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reversResult.map((result) =>{
                                return(
                                <tr>
                                    <th>{result.range}</th>
                                    <th>{result.timeResult}</th>
                                </tr>
                                )
                            })}
                        </tbody>   
                    </table>
                <div className="menu result_menu">
                        <button>
                        <Link to="/game">
                                <p>Wróć do gry</p>
                            </Link>
                        </button>
                        <button>
                            <Link to="/">
                                <p>Home</p>
                            </Link>
                        </button>
                    </div> 
                    </div>
            </div>
        </>
    )
}


export default Result;
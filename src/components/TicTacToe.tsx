import React, { useState } from "react";
import "../css/TicTacToe.css";

const TicTacToe : React.FC = () => {

    let [gridState , setGridState] : [Array<Array<string>>, React.Dispatch<Array<Array<string>>>]  = useState([["©","©","©",],["©","©","©"], ["©","©","©"]]);
    let [getInputState, setInputState] : [string, React.Dispatch<string>] = useState("X"); 
    const [isOver, setWinner] : [boolean, React.Dispatch<boolean>] = useState(false);
    const [winningCombination, setWinningCombination] : [Array<Array<string>>, React.Dispatch<Array<Array<string>>>] = useState([["",""],["",""], ["",""]])


    const checkGrid = (grid: Array<Array<string>>) => {
        
        if((grid[0][0] === "X" && grid[0][1] === "X" && grid[0][2] === "X") || (grid[0][0] === "0" && grid[0][1] === "0" && grid[0][2] === "0")
        ||(grid[1][0] === "X" && grid[1][1] === "X" && grid[1][2] === "X") || (grid[1][0] === "0" && grid[1][1] === "0" && grid[1][2] === "0")
        ||(grid[2][0] === "X" && grid[2][1] === "X" && grid[2][2] === "X") || (grid[2][0] === "0" && grid[2][1] === "0" && grid[2][2] === "0")
        ||(grid[0][0] === "X" && grid[1][0] === "X" && grid[2][0] === "X") || (grid[0][0] === "0" && grid[1][0] === "0" && grid[2][0] === "0") 
        ||(grid[0][1] === "X" && grid[1][1] === "X" && grid[2][1] === "X") || (grid[0][1] === "0" && grid[1][1] === "0" && grid[2][1] === "0") 
        ||(grid[0][2] === "X" && grid[1][2] === "X" && grid[2][2] === "X") || (grid[0][2] === "0" && grid[1][2] === "0" && grid[2][2] === "0")
        ||(grid[0][0] === "X" && grid[1][1] === "X" && grid[2][2] === "X") || (grid[0][0] === "0" && grid[1][1] === "0" && grid[2][2] === "0")
        ||(grid[0][2] === "X" && grid[1][1] === "X" && grid[2][0] === "X") || (grid[0][2] === "0" && grid[1][1] === "0" && grid[2][0] === "0")
        )
        {
            setWinner(true);
        }
    }

    const handleInput : any = (outerIndex: number, index : number) => {
        if(getInputState === "X")
        {
            gridState[outerIndex][index] = "X"
            setGridState(gridState);
            setInputState("0");
        }
        else
        {   
            gridState[outerIndex][index] = "0";
            setGridState(gridState);
            setInputState("X");
        }

        checkGrid(gridState);
        console.log(gridState);
    }

    return(
       <div>
        <div className="heading">
            <span>
                <p>
                    This is a simple TicTacToe game
                </p>
            </span>
        </div>

        <div className="TicTacToe" style={{pointerEvents: isOver ? "none" : "auto"}}>
            { 
                gridState.map((row: Array<string> , outerIndex: number) => {
                    return row.map((item: string, index: number) => {
                    return <div key={index} className="box" style={{pointerEvents: item === "X" || item === "0" || isOver ? "none" : "visible" , 
                        backgroundColor: item === "©" ? "darkgreen" : item === "0" ? "orange" : "lightblue"}} 
                        onClick={() => handleInput(outerIndex, index)}> {item}
                    </div>
                })
            })
        }
        </div>
        {isOver && <div className="heading">
            <span>
                <p>
                    We have a winner
                </p>
            </span>
        </div>
        }
        </div>
    )
}

export default TicTacToe;
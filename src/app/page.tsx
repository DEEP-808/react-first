'use client' 

import { useState } from "react";
import Board from "./components/Board";

export default function Home() {

  const [isNext,setIsNext] = useState(true);
  const [boardHistory,setBoardHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const currentBoard = boardHistory[currentMove];

  function handleMove(nextBoard){
    const nextHistory = [...boardHistory.slice(0, currentMove + 1), nextBoard];
    setBoardHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setIsNext(!isNext);
  }

  function jumpTo(nextMove) {
      setCurrentMove(nextMove);
      setIsNext(nextMove % 2 === 0);
  }
  
  const stepback = boardHistory.map((squares, move)=>{
    let description;
    if(move>0){
      description = "Go to move #" + move;
    } else
      description = "Go to game start";

    return (
      <li key = {move}>
        <button className="wayback" onClick={()=> jumpTo(move)}>{description}</button>
      </li>
    )
  })
  return (
    <>
      <div id= "game-board">
      <Board isNext = {isNext} currentBoard ={currentBoard}  onPlay={handleMove}/>
      </div>
      <br></br>
      <div id = "replay-menu">
        <ol> {stepback} </ol>
      </div>
    </>
  );
}

'use client' 

import Box from "./Box";
import { useState } from "react";
import Utils from "./utility";

export default function Board(){
    const [isNext,setIsNext] = useState(true);
    const [boxes,setBoxes] = useState(Array(9).fill(null));

    let status;
    const winner =  Utils.calculateWinner(boxes);
    if(winner){
        status = "Winner : " + winner;
    } else{
        status = "Next player is : " + (isNext ? "X" : "O");
    }

    function handleBoxClick(i){
       
        if(boxes[i] ||  Utils.calculateWinner(boxes))
            return;
        const newBoxes = boxes.slice();
        if(isNext)
            newBoxes[i] = 'X';
        else    
            newBoxes[i] = 'O';
        setIsNext(!isNext);
        setBoxes(newBoxes);
    }

    return (
        <>
            <div className="player-ind">
                <p>{status}</p>
            </div>
            <div className="board">
                <div className="row">
                    <Box value = {boxes[0]} onBoxClick={()=>handleBoxClick(0)}/>
                    <Box value = {boxes[1]} onBoxClick={()=>handleBoxClick(1)}/>
                    <Box value = {boxes[2]} onBoxClick={()=>handleBoxClick(2)}/>

                </div>
                <div className="row">
                    <Box value = {boxes[3]} onBoxClick={()=>handleBoxClick(3)}/>
                    <Box value = {boxes[4]} onBoxClick={()=>handleBoxClick(4)}/>
                    <Box value = {boxes[5]} onBoxClick={()=>handleBoxClick(5)}/>

                </div>
                <div className="row">
                    <Box value = {boxes[6]} onBoxClick={()=>handleBoxClick(6)}/>
                    <Box value = {boxes[7]} onBoxClick={()=>handleBoxClick(7)}/>
                    <Box value = {boxes[8]} onBoxClick={()=>handleBoxClick(8)}/>
                </div>
                

            </div>
        </>

    );
}
import Box from "./Box";
import Utils from "./utility";

export default function Board({isNext,currentBoard,onPlay}){

    let status;
    const winner =  Utils.calculateWinner(currentBoard);
    if(winner){
        status = "Winner : " + winner;
    } else{
        status = "Next player is : " + (isNext ? "X" : "O");
    }

    function handleBoxClick(i){
       
        if(currentBoard[i] ||  Utils.calculateWinner(currentBoard))
            return;
        const newBoxes = currentBoard.slice();
        if(isNext)
            newBoxes[i] = 'X';
        else    
            newBoxes[i] = 'O';
        onPlay(newBoxes);
    }

    return (
        <>
            <div className="player-ind">
                <p>{status}</p>
            </div>
            <br></br>
            <div className="board">
                <div className="row">
                    <Box value = {currentBoard[0]} onBoxClick={()=>handleBoxClick(0)}/>
                    <Box value = {currentBoard[1]} onBoxClick={()=>handleBoxClick(1)}/>
                    <Box value = {currentBoard[2]} onBoxClick={()=>handleBoxClick(2)}/>

                </div>
                <div className="row">
                    <Box value = {currentBoard[3]} onBoxClick={()=>handleBoxClick(3)}/>
                    <Box value = {currentBoard[4]} onBoxClick={()=>handleBoxClick(4)}/>
                    <Box value = {currentBoard[5]} onBoxClick={()=>handleBoxClick(5)}/>

                </div>
                <div className="row">
                    <Box value = {currentBoard[6]} onBoxClick={()=>handleBoxClick(6)}/>
                    <Box value = {currentBoard[7]} onBoxClick={()=>handleBoxClick(7)}/>
                    <Box value = {currentBoard[8]} onBoxClick={()=>handleBoxClick(8)}/>
                </div>
                

            </div>
        </>

    );
}
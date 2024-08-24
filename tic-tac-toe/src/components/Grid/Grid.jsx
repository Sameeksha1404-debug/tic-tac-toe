import { useState } from "react";
import Card from "../Card/Card";
import './Grid.css'
import isWinner from '../../helpers/checkWinner';


function Grid({numberOfCards}){

    const [board,setBoard]=useState(Array(numberOfCards).fill(" "));//1 row 3 cell,2nd row 3 cell and 3rd row 3 cell
    const [turn,setTurn]=useState(true);//true->0,false->X
    const [winner,setWinner]=useState(null)


    function play(index){
        if(turn === true){
            board[index]='O';
        }else{
            board[index]='X';
        }
        const win=isWinner(board, turn?'O':'X');
        if(win){
            setWinner(win)
        }
        setBoard([...board])
        setTurn(!turn)
    }
    function reset(){
        setTurn(true)
        setWinner(null)
        setBoard(Array(numberOfCards).fill(" "))
    }




    return(


     <div className="grid-wrapper">
     
        {
            winner && (
                <>
                    <h1 className="turn-highlight">Winner is {winner}</h1>
                    <button className="reset" onClick={reset}>Reset Game</button>
                </>
            )

        }
         <h1 className="turn-highlight"> Current turn:{(turn)?'O': 'X'}</h1>
           <div className="grid">
               {board.map((el,id )=> <Card gameEnd={winner ?true:false} key={id} onPlay={play} players={el} index={id} />)}
   
            </div>
      </div>


    )


}

export default Grid;

//0 1 2
//3 4 5
//6 7 8
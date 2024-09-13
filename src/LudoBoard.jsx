import React from 'react'
import { useState } from 'react'


function LudoBoard() {
const [moves, setMoves]= useState({blue:0 , green:0 , yellow:0 , red:0} )
 

const updateBlue= ()=>{
    // setMoves({... moves, blue :moves.blue +1})
    setMoves((prevMoves)=>{
            return{
                ...prevMoves ,blue:prevMoves.blue +1
            }
    });
};
const updateGreen= ()=>{
    // setMoves({... moves, blue :moves.green +1})
    setMoves((prevMoves)=>{
            return{
                ...prevMoves ,green:prevMoves.green +1
            }
    });
};
const updateYellow= ()=>{
    // setMoves({... moves, blue :moves.Yellow +1})
    setMoves((prevMoves)=>{
            return{
                ...prevMoves ,yellow:prevMoves.yellow +1
            }
    });
};
const updateRed= ()=>{
    // setMoves({... moves, blue :moves.Red +1})
    setMoves((prevMoves)=>{
            return{
                ...prevMoves ,red:prevMoves.red +1
            }
    });
};


  return (
    <div>
      <h1>Ludo Board</h1>
    <div className='board'>
    <p>Blue moves={moves.blue}</p>
    <button style={{background:"blue"}}  onClick={updateBlue}>+1</button>
    <p>Yellow moves={moves.yellow}</p>
    <button style={{background:"Yellow", color:"black" }} onClick={updateYellow}>+1</button>
    <p>Green moves={moves.green}</p>
    <button style={{background:"green"}} onClick={updateGreen}>+1</button>
    <p>Red moves={moves.red}</p>
    <button style={{background:"red"}} onClick={updateRed}>+1</button>
    </div>
    </div>
  )
}

export default LudoBoard

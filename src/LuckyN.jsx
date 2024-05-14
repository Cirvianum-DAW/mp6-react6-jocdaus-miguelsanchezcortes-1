import React, { useState } from 'react'
import Dice from './Dice'
import { getTirades, sum } from './utils'

export default function LuckyN({ numDaus, suma }) {
  const [dice, setDice] = useState(getTirades(numDaus));
  // const [sumDices, setSumDices] = useState(sum(dice));
  // const [result, setResult] = useState(sumDices > suma);
//  input = document.getElementById('guessInput');
  const isWinner = sum(dice) == suma;
  const handleClick = () => {
    setDice(getTirades(numDaus));
  }



  return (
    <div>
      <label for="guessInput">posa la suma que creus que sortira: </label>
      <input id='guessInput' type="number" onChange={
        (e) => {
          const guess = parseInt(e.target.value);
          if (guess == sum(dice)) {
            console.log('Has guanyat');
          } else {
            console.log('Has perdut');
          }
        }
      
      } />
      <Dice dice={dice} />
      {isWinner ? <h2 className='text-center text-2xl text-green-500'>Has guanyat!</h2> : <h2 className='text-center text-2xl text-red-500'>Has perdut!</h2>}
      <button className='mx-auto mt-3 block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-800'
        onClick={handleClick}>
        Tirar els daus!
      </button>

    </div>
  )
}

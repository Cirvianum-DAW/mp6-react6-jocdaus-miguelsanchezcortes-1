import React, {useState} from 'react'
import Dice from './Dice'
import {getTirades, sum} from './utils'

export default function LuckyN({numDaus, suma}) {
    const [dice, setDice] = useState(getTirades(numDaus));
    // const [sumDices, setSumDices] = useState(sum(dice));
    // const [result, setResult] = useState(sumDices > suma);

    const isWinner = sum(dice) == suma;
    


  return (
    <div>
      <Dice dice={dice}/>
    </div>
  )
}

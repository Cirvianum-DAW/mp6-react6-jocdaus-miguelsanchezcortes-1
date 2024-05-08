import React from 'react'
import './Dice.css'
import Dau from './Dau'

export default function Dice({dice}) {
    return (
        <div className="Dice">
            {dice.map((dau, index) => (
                <Dau key={index} valor={dau} />
            ))}
        </div>
    )
}

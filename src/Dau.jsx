import React from 'react'
import './Dau.css'
export default function Dau({valor}) {
  return (
    <div className={`Dau Dau--${valor}`}>
      {valor}
    </div>
  )
}


import React from 'react'
import LuckyN from './LuckyN'

export default function App() {
    
  return (
    <div>
        <h1 className='mt-3 text-center text-xl'>La suma ha de ser superiro a 7
        </h1>
      <LuckyN numDaus={2} suma = {7} />
    </div>
  )
}

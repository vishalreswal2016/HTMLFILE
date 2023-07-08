import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Name from './components/Students/Name'

function App() {
  const students = [
  {name:"Vishal Sanjay Reswal", rollNo:21, feesPaid:10000, feesRemaining:5000},
  {name:"Abhishek Janardhan Potdukhe", rollNo:22, feesPaid:15000, feesRemaining:3000},
  {name:"Tejas Mahendra Gholap", rollNo:23, feesPaid:15000, feesRemaining:1000},
  {name:"Satish Balaji Hiwale", rollNo:24, feesPaid:30000, feesRemaining:0},
  {name:"Satish", rollNo:24, feesPaid:30000, feesRemaining:0},
]

  return (
    <>
     <h1>Student Information</h1>
     {
      students.map((student, index) => <Name key={index} {...student}/>)
     }
     

    </>
  )
}

export default App

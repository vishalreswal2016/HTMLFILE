import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Friend from './components/Friend/Friend'


function App() {
        const friends = [
        {name: "Ganesh Kathar", followers: 290, gender:"male"},
        {name: "Yashwant Mangate", followers: 65, gender:"male"},
        {name: "Jane Smith", followers: 487, gender:"male"},
        {name: "Vishal Reswal", followers: 4870, gender:"male"},
      ]

  return (
    <>
    <h1>Freind List</h1>
      {
        friends.map((friend, index) => <Friend key={index} {...friend}/>)
      }
    </>
  )
}

export default App

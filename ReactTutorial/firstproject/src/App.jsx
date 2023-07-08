import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Friend from './components/Friend'
import Counter from './components/count/counter'

function App() {
  const [count, setCount] = useState(0)

//   const friendList=[
//     {name:"Yashwant Mangate", companyName:"Google", age:19},
//     {name:"Vishal Reswal" ,companyName:"Microsoft", age:20}, 
//     {name:"Tejas Gholap", companyName:"Tcs", age:22}
//   ]

//   const rowData=[
//     {name:"Yashwant Mangate", email:"yash@gmail.com", age:19},
//     {name:"Vishal Reswal" ,email:"vishal@gmail.com", age:20}, 
//     {name:"Tejas Gholap", email:"tejas@gamil.com", age:22}
//     {name:"Abhishek Poytdukhe", email:"tejas@gamil.com", age:22}
//   ];

  return (
    <>
 <Counter/>
 
    {/* <h1 className='' title='these are my friends'>Friend List</h1>

    {
      friendList.map((friend, index)=>{
        const {name, companyName, age}= friend;
        if(age>19)
        return <Friend key={index} name={name} companyName={companyName} age={age}/>
      })
    } */}
       
<Counter>
    <div>
        <h1>these are the new methods to be written for the overall pe</h1>
    </div>
</Counter>

    </>
  )
}

export default App

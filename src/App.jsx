import './App.css'
import React from 'react'
import ReactDOM from "react-dom"
import data from "../public/data.js"
import Card from "./Card.jsx"



function App() {
  const cardList = data.map((item,index) => {
  return(
    <Card
      key={index}
      item = {item}
    />
  )    
  })

  console.log({cardList})

  return (
    <div className='cardList'>
      {cardList}
  
    </div>
  )
}

export default App


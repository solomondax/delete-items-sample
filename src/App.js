import React, { useState } from "react"
import Items from './components/Items'
import data from './data.js'
import './App.css'

function App() {
  const [tata, setTata] = useState(data);


  const DeleteFun = (deleteId) => {
    console.log(deleteId)
    const filteredData = tata.filter((eachItem) => {
      return eachItem.id !== deleteId;
    })
    setTata(filteredData)
  }
  return (
    <div className="App">
      <h1 className="heading">Delete Items</h1>
      <ul className="sub">
        {tata.map((each) => {
          return (<Items details={each} key={each.id} DeleteFun={DeleteFun} />)
        })}
      </ul>
    </div>
  )
}
export default App;
























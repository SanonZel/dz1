import React from 'react'

function Name(props) {
  return (
      <div className="App">
          <h1> <ul>{props.name.map(item=> <li key={item}>{item}</li>)}</ul></h1>
          
      </div>
  )
}

export default Name

import './App.css'
import "./Name"
import Name from './Name'
import Static from './Static'

function App() {
const names = ["Igor", "Sanon", "Mentor"] 
console.log("WELCOME")
  return (
    <div className="App">
        <Static name={Static}/>
        <Name name={names}/>
    </div>
  )
}

export default App

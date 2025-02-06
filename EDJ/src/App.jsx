import {useState} from 'react'
import Header from './components/Header.jsx'
import Music from './components/Music.jsx'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "10rem"}}>
            <Header/>
            <Music/>
        </div>
    )
}

export default App

import {useState} from 'react'
import Header from './components/Header.jsx'
import Music from './components/Music.jsx'
import FloatingHeader from './components/FloatingHeader.jsx'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "10rem"}}>
            <Header/>
            <FloatingHeader/>
            <Music/>
        </div>
    )
}

export default App

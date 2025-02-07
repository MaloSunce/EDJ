import Header from './components/Header.jsx'
import FloatingHeader from './components/FloatingHeader.jsx'

import MusicPage from './components/MusicPage.jsx'
import Art from './components/ArtPage.jsx'

function App() {

    return (
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "10rem"}}>
            <Header/>
            <FloatingHeader/>
            <MusicPage/>
            <Art/>
        </div>
    )
}

export default App

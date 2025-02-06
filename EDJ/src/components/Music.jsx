import '../styles/Music.css'
import SongComponent from "./SongComponent.jsx";

function Music() {

    return (
        <div className="Music" id="Music">
            <div className="MusicTitle">
                <h1>MUSIC</h1>
                <div className="hl"></div>
            </div>

            {/* Selected display song */}
            <div className="SelectedSong">
                <h3>Artis's choice</h3>
                <SongComponent/>
            </div>

            <div className="Discography">
                <h3>Discography</h3>
                <div style={{overflowY: 'auto'}}>
                    {
                        Array(7).fill().map((_, index) =>
                            <SongComponent key={index} index={index}/>
                        )
                    }
                </div>
            </div>

            <div className="SomeList">

            </div>
        </div>
    );
}

export default Music;
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
                <SongComponent></SongComponent>
            </div>

            <div className="Discography">

            </div>

            <div className="SomeList">

            </div>
        </div>
    );
}

export default Music;
import '../styles/MusicPage.css'
import SongComponent from "./SongComponent.jsx";

function MusicPage() {

    return (
        <div className="Music" id="Music">
            <div className="MusicTitle">
                <h1>MUSIC</h1>
            </div>

            {/* Selected display song */}
            <div className="Tidal">
                <div className="TidalBox"> </div>
            </div>

            <div className="Discography">
                <h3>Artist's choice</h3>
                <div className="SelectedSongs">
                    {
                        Array(4).fill().map((_, index) =>
                            <SongComponent key={index} index={index}/>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default MusicPage;
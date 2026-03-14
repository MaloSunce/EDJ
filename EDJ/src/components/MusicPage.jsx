import '../styles/MusicPage.css'
import SongComponent from "./SongComponent.jsx";

import cd from '../../public/Images/cd.png'
function MusicPage() {
    return (
        <div className="Music" id="Music">
            <div className="OverlayBox">
                <h1>MUSIC</h1>
                <div className="Discography">
                    <h2 className="SubTitle">Artist's choice</h2>
                    <div className="SelectedSongs">
                        {
                            Array(4).fill().map((_, index) =>
                                <SongComponent key={index} index={index} />
                            )
                        }
                    </div>
                </div>
            </div>

            <div className="CompactDiskContainer">
                <img className="Disc1" src={cd} alt="Compact disk background image"/>
                <img className="Disc2" src={cd} alt="Compact disk background image"
                    style={{ animation: "disc2spin var(--disc-spin) linear infinite"}}
                />
            </div>
        </div>
    );
}

export default MusicPage;
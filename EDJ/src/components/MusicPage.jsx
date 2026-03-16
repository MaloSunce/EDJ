import '../styles/MusicPage.css'
import SongComponent from "./SongComponent.jsx";
import cd from '../../public/Images/cd.png'
function MusicPage() {
    return (
        <div className="Music" id="Music">
            <div className="OverlayBox">
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'end',
                    marginTop: '2rem'
                }}>
                    <h1>MUSIC</h1>
                    <p style={{ margin: '0 0 2px 20px', paddingLeft: '1rem', fontSize: '1.8rem' }}>Tidal</p>
                </div>
                <div className="Discography">
                    <h2 className="SubTitle">Artist's choice</h2>
                    <div className="SelectedSongs">
                        {
                            Array(4).fill().map((_, index) =>
                                <SongComponent key={index} index={index} tabindex={index} />
                            )
                        }
                    </div>
                </div>
            </div>

            <div className="CompactDiskContainer">
                <img className="Disc1" src={cd} alt="Compact disk background image"/>
                <img className="Disc2" src={cd} alt="Compact disk background image"
                    style={{ animation: "disc2spin 5s linear infinite", animationPlayState: "var(--disc-animation-state)" }}
                />
            </div>
        </div>
    );
}

export default MusicPage;
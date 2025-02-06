import '../styles/Music.css'
import { IoIosPlay } from "react-icons/io";
import { SiAffinityphoto } from "react-icons/si";

function Music() {

    return (
        <div className="Music" id="Music">
            <div className="MusicTitle">
                <h1>MUSIC</h1>
                <div className="hl"></div>
            </div>

            <div className="SelectedSong">  {/*NB temporary flex display for placeholder icon*/}
                <div className="AlbumCover" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    {/*NB placeholder icon*/}
                    <SiAffinityphoto style={{
                        color: 'rgba(255, 255, 255, 0.2)',
                        fontSize: '7vh',
                    }} />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <h3 style={{margin: '0'}}>Song Title</h3>
                    <p style={{margin: '0'}}>From Album</p>
                </div>
                <IoIosPlay className="PlayIcon" style={{
                    color: 'var(--text-primary)',
                    fontSize: '3.5rem',
                    alignSelf: 'center',
                    marginLeft: 'auto',
                    paddingRight: '10px',
                }} />
            </div>

            <div className="Discography">

            </div>

            <div className="SomeList">

            </div>
        </div>
    );
}

export default Music;
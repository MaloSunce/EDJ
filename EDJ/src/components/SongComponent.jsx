import '../styles/SongComponent.css'
import {SiAffinityphoto} from "react-icons/si";
import {IoIosPlay} from "react-icons/io";

function SongComponent() {
    return (
        <div className="SongComponent">  {/*NB temporary flex display for placeholder icon*/}
            <div className="AlbumCover" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                {/*NB placeholder icon*/}
                <SiAffinityphoto style={{
                    color: 'rgba(255, 255, 255, 0.2)',
                    fontSize: '7vh',
                }}/>
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
            }}/>
        </div>
    );
}

export default SongComponent;
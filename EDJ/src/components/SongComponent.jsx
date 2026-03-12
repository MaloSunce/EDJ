import '../styles/SongComponent.css'
import {SiAffinityphoto} from "react-icons/si";
import {IoIosPlay} from "react-icons/io";

function SongComponent() {
    return (
        <div className="SongComponent">  {/*NB temporary flex display for placeholder icon*/}
            <div className="AlbumCover" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                {/*NB placeholder icon*/}
                <SiAffinityphoto style={{
                    color: 'var(--text-primary)',
                    opacity: '0.5',
                    fontSize: '2rem',
                }}/>
            </div>
            <div className="TextContainter">
                <h3>Song Title</h3>
                <p>From Album</p>
            </div>
            <IoIosPlay className="PlayIcon" style={{
                color: 'var(--text-primary)',
                fontSize: '1.8rem',
                alignSelf: 'center',
                marginLeft: 'auto',
                paddingRight: '0.7rem',
            }}/>
        </div>
    );
}

export default SongComponent;
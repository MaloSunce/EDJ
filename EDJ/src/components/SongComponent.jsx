import '../styles/SongComponent.css'
import { useState, useMemo } from 'react';
import tracks from '../../public/Music/tracks.json';


function SongComponent({ index, activeIndex, setIndex }) {

    //let audio = new Audio(`${tracks[index].audioFile}`);
    const audio = useMemo(() => new Audio(`${tracks[index].audioFile}`), [tracks[index].audioFile]);

    const playAudio = () => {
        audio.play()
    }

    const pauseAudio = () => {
        audio.pause()

    }

    const [isActive, setIsActive] = useState(false);
    let discSpinState = 'running';

    const handleChange = event => {

        // No tracks are playing, pause audio and disc spin
        if (!isActive && event.target.checked) {
            setIsActive(true);
            discSpinState = 'paused';
            pauseAudio();
        }
        // Different track has been played
        else if (event.target.checked) {
            pauseAudio();
        }
        // Current track has been played
        else {
            setIndex(-1);
            setIsActive(false);
            playAudio();
        }
        document.documentElement.style.setProperty('--disc-animation-state', discSpinState);
    };

    return (
        <div className="SongComponent">  {/*NB temporary flex display for placeholder icon*/}
            <div className="AlbumCover" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                {/*NB placeholder icon*/}
                <img src={`${tracks[index].albumCover}`} style={{
                    width: '100%',
                    height: '100%',
                    alt: 'Placeholder album cover'
                }}/>
            </div>
            <div className="TextContainter">
                <h3>{tracks[index].title}</h3>
                <p>From <i>{tracks[index].fromAlbum}</i></p>
            </div>
            <div style={{
                margin: 'auto 0 auto auto',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: '0.6rem',
            }}>
                <div className="TidalLink">
                    <a href={tracks[index].tidalLink} target="_blank">
                        <p>Tidal</p>
                    </a>
                </div>

                <div className="PlayPauseBtn" alt="Play button">
                    <input type="checkbox" value="None" id={"PlayPause" + index} name="Check"
                        onChange={handleChange}
                        checked={(activeIndex === index && !isActive) ? '' : 'checked'} />
                    <label htmlFor={"PlayPause" + index} tabIndex={index}></label>
                </div>
            </div>

        </div>
    );
}

export default SongComponent;
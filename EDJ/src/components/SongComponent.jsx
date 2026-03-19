import '../styles/SongComponent.css'
import { SiAffinityphoto } from "react-icons/si";
import { useState } from 'react';
import tracks from '../../public/Music/tracks.json';


function SongComponent({ index, activeIndex, setIndex }) {

    const [isActive, setIsActive] = useState(false);
    let discSpinState = 'running';

    const handleChange = event => {
        if (!isActive && event.target.checked) { // No tracks are playing, pause disc spin
            setIsActive(true);
            discSpinState = 'paused';
        } else {
            setIndex(-1);
            setIsActive(false);
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
                {/*<SiAffinityphoto style={{*/}
                {/*    color: 'var(--text-primary)',*/}
                {/*    opacity: '0.5',*/}
                {/*    fontSize: '2rem',*/}
                {/*    alt: 'Placeholder album cover'*/}
                {/*}} />*/}
            </div>
            <div className="TextContainter">
                <h3>{tracks[index].title}</h3>
                <p>From <i>{tracks[index].fromAlbum}</i></p>
            </div>
            <div style={{
                margin: 'auto 0 auto auto',
                display: 'grid',
                gridTemplateAreas: 'area',
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: '0.6rem',
            }}>

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
import '../styles/SongComponent.css'
import { SiAffinityphoto } from "react-icons/si";
import { useState } from 'react';



function SongComponent({ index, active, setIndex }) {
    const [isActive, setIsActive] = useState(false);
    // Update active index, active state, and disc animation
    const handleChange = () => {
        setIsActive(!isActive);
        setIndex(index);

        // Song has been paused, no other song is playing, pause disc spin
        if (isActive && (active === index)) {
            document.documentElement.style.setProperty('--disc-animation-state', 'paused');
        } else { // Otherwise, spin dis
            document.documentElement.style.setProperty('--disc-animation-state', 'running');
        }
    }

    return (
        <div className="SongComponent">  {/*NB temporary flex display for placeholder icon*/}
            <div className="AlbumCover" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                {/*NB placeholder icon*/}
                <SiAffinityphoto style={{
                    color: 'var(--text-primary)',
                    opacity: '0.5',
                    fontSize: '2rem',
                }} />
            </div>
            <div className="TextContainter">
                <h3>Song Title</h3>
                <p>From Album</p>
            </div>
            <div style={{
                margin: 'auto 0 auto auto',
                display: 'grid',
                gridTemplateAreas: 'area',
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: '0.6rem',
            }}>

                <div className="PlayPauseBtn">
                    <input type="checkbox" value="None" id={"PlayPause" + index} name="Check"
                        onChange={() => { handleChange(); }}
                        checked={((active === index) && isActive) ? '' : 'checked'} />
                    <label htmlFor={"PlayPause" + index} tabIndex={index}></label>
                </div>
            </div>

        </div>
    );
}

export default SongComponent;
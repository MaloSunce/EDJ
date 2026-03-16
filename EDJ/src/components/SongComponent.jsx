import '../styles/SongComponent.css'
import { SiAffinityphoto } from "react-icons/si";
import { useState } from 'react';



function SongComponent({ index, active, setIndex }) {
    const toggleDiscSpin = () => {
        const r = document.querySelector(':root');
        var rs = getComputedStyle(r);

        let discSpinVal = rs.getPropertyValue('--disc-animation-state');

        discSpinVal = (active > -1) ? 'running' : 'paused';

        document.documentElement.style.setProperty('--disc-animation-state', discSpinVal);
    }

    const [isActive, setIsActive] = useState(false);
    const handleButtonState = event => {
        // Different song was playing, now changed to current song
        if (event.target.checked && active === index) {
            setIsActive(true);
            setIndex();
        }
        // Current song was playing, now changed to paused
        else if (!event.target.checked && active === index) {
            setIsActive(true);
            setIndex();
        }
        // Different song is playing
        else {
            setIsActive(false);
        }

        // Update disc spin state
        let discSpinVal = (active > -1) ? 'running' : 'paused';
        document.documentElement.style.setProperty('--disc-animation-state', discSpinVal);
    };

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
                        onChange={() => { setIndex(); toggleDiscSpin(); }}
                        checked={(active === index) ? '' : 'checked'} />
                    <label htmlFor={"PlayPause" + index} tabIndex={index}></label>
                </div>
            </div>

        </div>
    );
}

export default SongComponent;
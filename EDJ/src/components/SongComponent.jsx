import '../styles/SongComponent.css'
import { SiAffinityphoto } from "react-icons/si";
import { useState } from 'react';



function SongComponent({ index, activeIndex, setIndex }) {

    const [isActive, setIsActive] = useState(false);

    const handleChange = event => {
        if (!isActive && event.target.checked) {
            setIsActive(true);
        } else {
            setIndex(-1);
            setIsActive(false);
        }

        console.log("Malo - activeIndex: " + activeIndex + "\t index: " + index);

        let discSpinState = (activeIndex > -1) ? 'running' : 'paused';
        document.documentElement.style.setProperty('--disc-animation-state', discSpinState);
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
                        onChange={handleChange}
                        checked={(activeIndex === index && !isActive) ? '' : 'checked'} />
                    <label htmlFor={"PlayPause" + index} tabIndex={index}></label>
                </div>
            </div>

        </div>
    );
}

export default SongComponent;
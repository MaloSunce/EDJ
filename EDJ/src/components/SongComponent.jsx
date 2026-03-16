import '../styles/SongComponent.css'
import { SiAffinityphoto } from "react-icons/si";


function ToggleDiscSpin() {
    const r = document.querySelector(':root');
    var rs = getComputedStyle(r);

    let discSpinVal = rs.getPropertyValue('--disc-animation-state');

    discSpinVal = (discSpinVal === 'paused') ? 'running' : 'paused';

    document.documentElement.style.setProperty('--disc-animation-state', discSpinVal);
}

function SongComponent(props) {
    let testVar = props.tabindex;
    console.log("Malo: tabindex: " + testVar);
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
                    <input type="checkbox" value="None" id={"PlayPause" + props.tabindex} name="Check"
                        onClick={() => { ToggleDiscSpin() }} />
                    <label htmlFor={"PlayPause" + props.tabindex} tabIndex={props.tabindex}></label>
                </div>
            </div>

        </div>
    );
}

export default SongComponent;
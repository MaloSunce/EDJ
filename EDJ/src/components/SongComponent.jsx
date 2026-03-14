import '../styles/SongComponent.css'
import { SiAffinityphoto } from "react-icons/si";
import { IoIosPlay } from "react-icons/io";

function ToggleDiscSpin() {
    const r = document.querySelector(':root');
    var rs = getComputedStyle(r);

    let discSpinVal = rs.getPropertyValue('--disc-spin');

    discSpinVal = (discSpinVal === '0s') ? '5s' : '0s';

    document.documentElement.style.setProperty('--disc-spin', discSpinVal);
}

function SongComponent() {
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
            <IoIosPlay className="PlayIcon" onClick={() => ToggleDiscSpin()} style={{
                color: 'var(--text-primary)',
                fontSize: '1.8rem',
                marginLeft: 'auto',
                alignSelf: 'center',
                paddingRight: '0.7rem',
            }} />
        </div>
    );
}

export default SongComponent;
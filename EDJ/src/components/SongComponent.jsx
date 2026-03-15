import '../styles/SongComponent.css'
import { SiAffinityphoto } from "react-icons/si";
import { IoIosPlay } from "react-icons/io";

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
            <div style={{
                margin: 'auto 0 auto auto',
                display: 'grid',
                gridTemplateAreas: 'area',
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: '0.6rem',
            }}>
                <IoIosPlay className="PlayIcon" onClick={() => {
                    document.documentElement.style.setProperty('--disc-animation-state', 'running')
                }} style={{
                    color: 'var(--text-primary)',
                    fontSize: '1.8rem',
                    alignSelf: 'center',
                    gridArea: 'area'
                }} />
                <div className="PlayIcon" onClick={() => {
                    document.documentElement.style.setProperty('--disc-animation-state', 'paused')
                }} style={{ gridArea: 'area', alignSelf: 'center', display: 'flex', flexDirection: 'row', translate: '-70%' }}>
                    <div style={{ height: '1.2rem', width: '0.4rem', backgroundColor: 'var(--text-primary)', marginLeft: '2px' }} />
                    <div style={{ height: '1.2rem', width: '0.4rem', backgroundColor: 'var(--text-primary)', translate: '50% 0' }} />
                </div>
            </div>

        </div>
    );
}

export default SongComponent;
import '../styles/MusicPage.css'
import cd from '../../public/Images/cd.png'
import SongComponent from "./SongComponent.jsx";

import { useState } from 'react';


function MusicPage() {
    // State tracker for SongComponents
    const [activeIndex, setActiveIndex] = useState(-1); 

    const handlePlayState = (audioRef, isPlaying) => {
        if (isPlaying) {
            audioRef.play();
        } else {
            audioRef.pause();
        }
    }


    return (
        <div className="Music" id="Music">
            <div className="OverlayBox">
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'end',
                    marginTop: '2rem'
                }}>
                    <h1>MUSIC</h1>
                    <p style={{ margin: '0 0 2px 20px', paddingLeft: '0.5rem', fontSize: '1.7rem' }}>Tidal</p>
                </div>
                <div className="Discography">
                    <h2 className="SubTitle">Artist's choice</h2>
                    <div className="SelectedSongs">
                        {
                            Array(4).fill().map((_, index) =>
                                <SongComponent key={index}
                                    index={index}
                                    setIndex={() => { setActiveIndex(index) }}
                                    handlePlayState={handlePlayState}
                                    activeIndex={activeIndex}
                                />
                            )
                        }
                    </div>
                </div>
            </div>

            <div className="CompactDiskContainer">
                <img className="Disc1" src={cd} alt="" aria-hidden="true" />
                <img className="Disc2" src={cd} alt="" aria-hidden="true"
                    style={{ animation: "disc2spin 5s linear infinite", animationPlayState: "var(--disc-animation-state)" }}
                />
            </div>
        </div>
    );
}

export default MusicPage;
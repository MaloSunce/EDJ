import '../styles/AudioPlayer.css'
import { useRef, useState } from 'react';
import 'material-symbols';

function AudioPlayer({ audioSrc }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef(null);

    // Handle seeking through the audio timeline
    const handleSeek = (e) => {

    }

    // Handle playing audio
    const handlePlay = () => {
        audioRef.current.play();
        setIsPlaying(true);
    }

    // Handle pausing audio
    const handlePause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    }

    // Toggle between play and pause state
    const handlePlayPause = (e) => {
        if (isPlaying) {
            handlePause();
        } else {
            handlePlay();
        }
    }

    return (
        <div className="AudioPlayer">
            <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleSeek }
            />
            <audio ref={audioRef} src={audioSrc} />

            <div className="TrackDuration">
                <p>{currentTime}</p>
                <p>{duration}</p>
            </div>

            <button onClick={handlePlayPause}>
                <span class="material-symbols-rounded">
                    {isPlaying ? "pause" : "play_arrow" }
                </span>
            </button>
        </div>
    )
}

export default AudioPlayer
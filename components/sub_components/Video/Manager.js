import {useRef, useState} from "react"
import ReactPlayer from "react-player"
import Head from "next/head"


function Manager({video_url, project_title, explore_url}){
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const playerRef = useRef(null)
    const [elapsedTime, setElapsedTime] = useState()
    const [totalDuration, setTotalDuration] = useState()
    const videoControlRef = useRef(null)
    const [count, setCount] = useState(0)

    const rewindPlayer = () => {
        playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10)
    }
    const fastForwardPlayer = () => {
        playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10)
    }

    const format = (seconds) => {
        if(isNaN(seconds)){
            return '00:00'
        }

        const date = new Date(seconds * 1000)
        const hh = date.getUTCHours()
        const mm = date.getUTCMinutes()
        const ss = date.getUTCSeconds().toString().padStart(2, "0")

        if (hh) {
            return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`
        }

        return `${mm}:${ss}`
    }

    const handleProgress = (stateChange) => {
        const currentTime = playerRef.current ? playerRef.current.getCurrentTime() : "00:00"
        const duration = playerRef.current ? playerRef.current.getDuration() : "00:00"
    
        setElapsedTime(format(currentTime))
        setTotalDuration(format(duration))

        if (count > 2) {
            videoControlRef.current.style.visibility = "hidden"
            setCount(0)
            console.log("passing by")
        }

        if (videoControlRef.current.style.visibility == "visible"){
            setCount(count+1)
        }
        
    }

    const handleMouseMove = () => {
        videoControlRef.current.style.visibility = "visible"
        setCount(0)
    }
    

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
            </Head>
            <div className="video__container" onMouseMove={handleMouseMove}>
                <ReactPlayer 
                    ref={playerRef}
                    width={"100%"}
                    height={"100%"}
                    url={video_url}
                    muted={isMuted}
                    playing={isPlaying}
                    onProgress = {handleProgress}
                />

                <div className="video_control_container" ref={videoControlRef}>
                    <div className="video_control_container__header">
                        <p>{project_title}</p>
                        <button><a href={explore_url}>Explore <i className="uil uil-arrow-right"></i></a></button>
                    </div>
                    <div className="video_control_container__mid">
                        <div onClick={()=> {rewindPlayer()}}><i className="uil uil-backward"></i></div>
                        <div onClick={()=> {setIsPlaying(!isPlaying)}}>{isPlaying ? <i className="uil uil-pause"></i> : <i className="uil uil-play"></i>}</div>
                        <div onClick={()=> {fastForwardPlayer()}}><i className="uil uil-forward"></i></div>
                    </div>
                    <div className="slider__container">
                        <div className="video__aux">
                            <div onClick={()=> {setIsPlaying(!isPlaying)}}>{isPlaying ? <i className="uil uil-pause"></i> : <i className="uil uil-play"></i>}</div>
                            <span>{elapsedTime}/{totalDuration}</span>
                            <span className="cu" onClick={()=> {setIsMuted(!isMuted)}}>{isMuted ? <i className="uil uil-volume"></i> : <i className="uil uil-volume-mute"></i>}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Manager

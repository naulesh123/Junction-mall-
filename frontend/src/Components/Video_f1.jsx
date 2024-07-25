import React from 'react'
import { useEffect,useRef } from 'react'
import vfile from '../Videos/lehnga_video.mp4' 


export default function Video_f1() {

    const TypesOfCards = () => {
        const videoRef = useRef(null);
      
        useEffect(() => {
          const playVideo = () => {
            videoRef.current.play();
          };
      
          const handleVideoEnd = () => {
            playVideo();
          };
      
          const videoElement = videoRef.current;
          videoElement.addEventListener('ended', handleVideoEnd);
          playVideo();
      
          return () => {
            videoElement.removeEventListener('ended', handleVideoEnd);
          };
        }, []);
      
        return (
          <div>
            <video
              width="100%"
              height="auto"
              autoPlay
              muted
              ref={videoRef}
              style={{ pointerEvents: 'none' ,marginTop: '0px'}}
            >
              <source src={vfile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        );
      };




  return (
    <div>
      <TypesOfCards/>
    </div>
  )
}

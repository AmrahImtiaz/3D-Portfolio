// import { useEffect, useRef } from 'react';

const showreel = () => {
  // const videoRef = useRef(null);

  // const checkMedia = () => {
  //   const video = videoRef.current;
  //   const tolerancePixel = 40;
  //   const scrollTop = window.scrollY + tolerancePixel;
  //   const scrollBottom = window.scrollY + window.innerHeight - tolerancePixel;

  //   const yTopMedia = video.getBoundingClientRect().top + window.scrollY;
  //   const yBottomMedia = yTopMedia + video.clientHeight;

  //   if (scrollTop < yBottomMedia && scrollBottom > yTopMedia) {
  //     // Play video when it's in view
  //     if (video.paused) video.play();
  //   } else {
  //     // Pause video when it's out of view
  //     if (!video.paused) video.pause();
  //   }
  // };

  // useEffect(() => {
  //   // Run checkMedia on scroll
  //   window.addEventListener('scroll', checkMedia);

  //   // Check immediately if the video is in view when component mounts
  //   checkMedia();

  //   // Clean up the event listener when component unmounts
  //   return () => {
  //     window.removeEventListener('scroll', checkMedia);
  //   };
  // }, []);

  return (
    <iframe
    src="https://drive.google.com/file/d/14zvZ4TNO3Mz5PrhqpAf1dwDf1W3hrG2H/preview" 
    width="1080" 
    height="690" 
    allow="autoplay" 
    className="mx-auto mt-8 rounded-lg"
    >
    </iframe>

  );
}

export default showreel
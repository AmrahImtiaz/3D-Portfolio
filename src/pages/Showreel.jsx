import { useEffect, useRef } from 'react';
import videoFile from '../assets/Video.mp4'; // Adjust the path if necessary

const Showreel = () => {
  const videoRef = useRef(null);

  const checkMedia = () => {
    const video = videoRef.current;
    const tolerancePixel = 40;
    const scrollTop = window.scrollY + tolerancePixel;
    const scrollBottom = window.scrollY + window.innerHeight - tolerancePixel;

    const yTopMedia = video.getBoundingClientRect().top + window.scrollY;
    const yBottomMedia = yTopMedia + video.clientHeight;

    if (scrollTop < yBottomMedia && scrollBottom > yTopMedia) {
      // Play video when it's in view
      if (video.paused) video.play();
    } else {
      // Pause video when it's out of view
      if (!video.paused) video.pause();
    }
  };

  useEffect(() => {
    // Run checkMedia on scroll
    window.addEventListener('scroll', checkMedia);

    // Check immediately if the video is in view when component mounts
    checkMedia();

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', checkMedia);
    };
  }, []);

  return (
    <>
    <h1 className='text-white md:text-7xl sm:text-xl text-center font-bold'>3D ANIMATION</h1>
    <video
      muted
      ref={videoRef}
      width="1920"
      height="1080"
      controls
      className="mx-auto mt-8 pr-7 pl-7"
    >
      <source src={videoFile} type="video/mp4" />
    </video>
    </>
  );
};

export default Showreel;
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import './Showreel.css'; // Assuming you add some styles here for customization
import { Link } from 'react-scroll';

const Showreel = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Toggle play state when thumbnail is clicked
  const handlePlay = () => setIsPlaying(true);

  return (
    <motion.div
      className="showreel-container bg-gray-50"
      id="showreel"
      initial={{ opacity: 0, y: 50 }}  // Start off-screen (invisible and below)
      animate={{ opacity: 1, y: 0 }}   // Animate to fully visible and in place
      exit={{ opacity: 0, y: 50 }}     // Exit animation (optional)
      transition={{ duration: 0.6 }}    // Duration of the animation
    >
      <div className="video-wrapper "id='showreel'>
        {!isPlaying ? (
          <div className="thumbnail" onClick={handlePlay}>
            <img
              src="cookit logo.png"
              alt="Showreel Thumbnail"
              className="thumbnail-image"
            />
            <button className="play-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16">
                <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
              </svg>
            </button>
          </div>
        ) : (
          <motion.video
            src="CookIT showreel.mp4" // Replace with your direct video link
            controls
            autoPlay
            className="showreel-video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default Showreel;

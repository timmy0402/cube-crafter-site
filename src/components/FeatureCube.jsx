'use client';
import React, { useState } from 'react';
import '../styles/FeatureCube.css';
import Image from 'next/image';
import ScrambleIcon from './icons/ScrambleIcon';
import ImageIcon from './icons/ImageIcon';
import TimerIcon from './icons/TimerIcon';
import CommunityIcon from './icons/CommunityIcon';

const FeatureCube = () => {
  const [rotation, setRotation] = useState(0);

  const rotateLeft = () => {
    setRotation(prev => prev + 90);
  };

  const rotateRight = () => {
    setRotation(prev => prev - 90);
  };

  return (
    <div>
      <div className="scene">
        <div 
          className="cube" 
          style={{ transform: `rotateY(${rotation}deg)` }}
        >
          {/* Face 1: Scramble */}
          <div className="cube__face cube__face--front">
            <div className="face-icon">
                <ScrambleIcon width={60} height={60} />
            </div>
            <h2 className="face-title">Create Scramble</h2>
            <p className="face-description">
              Scramble for all WCA puzzles are supported using csTimer algorithms. 
              Supports 2x2 up to 7x7 puzzles.
            </p>
          </div>

          {/* Face 2: Image Generation */}
          <div className="cube__face cube__face--right">
            <div className="face-icon">
                <ImageIcon width={60} height={60} />
            </div>
            <h2 className="face-title">Image Generation</h2>
            <p className="face-description">
              Visualize your scramble! The bot generates a detailed image of 
              each face of your cube.
            </p>
             <div style={{position: 'relative', width: '350px', height: '220px'}}>
                <Image
                    src="/images/scramble_mockup.webp"
                    alt="Scramble"
                    fill
                    style={{objectFit: 'contain'}}
                />
            </div>
          </div>

          {/* Face 3: Timer */}
          <div className="cube__face cube__face--back">
            <div className="face-icon">
                <TimerIcon width={60} height={60} />
            </div>
            <h2 className="face-title">Advanced Timer</h2>
            <p className="face-description">
              Accurately measure your solving time. 
              Auto-log to database, review recent solves, and manage your history.
            </p>
             <div style={{position: 'relative', width: '350px', height: '220px'}}>
                <Image
                    src="/images/time_mockup.webp"
                    alt="Timer"
                    fill
                    style={{objectFit: 'contain'}}
                />
            </div>
          </div>

          {/* Face 4: Community */}
          <div className="cube__face cube__face--left">
            <div className="face-icon">
                <CommunityIcon width={60} height={60} />
            </div>
            <h2 className="face-title">Join Us</h2>
            <p className="face-description">
              Ready to improve your skills?
              Add Cube Crafter to your Discord server today.
            </p>
            <a href="https://discord.com/oauth2/authorize?client_id=1197268536918278236" 
               className="btn" 
               style={{marginTop: '20px', display: 'inline-block'}}>
                Invite Bot
            </a>
          </div>
        </div>
      </div>

      <div className="controls">
        <button onClick={rotateLeft} className="control-btn" aria-label="Rotate Left">
            ←
        </button>
        <p style={{alignSelf: 'center', fontWeight: 'bold', color: 'var(--primary-color)'}}>
            Rotate the Cube
        </p>
        <button onClick={rotateRight} className="control-btn" aria-label="Rotate Right">
            →
        </button>
      </div>
    </div>
  );
};

export default FeatureCube;
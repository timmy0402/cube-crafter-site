'use client';
import React, { useState } from 'react';
import '../styles/FeatureCube.css';
import Image from 'next/image';
import ScrambleIcon from './icons/ScrambleIcon';
import ImageIcon from './icons/ImageIcon';
import TimerIcon from './icons/TimerIcon';
import CommunityIcon from './icons/CommunityIcon';
import ArrowLeft from './icons/ArrowLeft';
import ArrowRight from './icons/ArrowRight';

// Static imports
import rubikImg from '../../public/images/rubik.jpg';
import scrambleMockup from '../../public/images/scramble_mockup.webp';
import timeMockup from '../../public/images/time_mockup.webp';

const FeatureCube = () => {
  const [rotation, setRotation] = useState(0);

  const rotateLeft = () => setRotation(prev => prev + 90);
  const rotateRight = () => setRotation(prev => prev - 90);

  return (
    <div>
      <div className="scene">
        <div className="cube" style={{ transform: `rotateY(${rotation}deg)` }}>
          
          {/* Face 1: Scramble */}
          <div className="cube__face cube__face--front">
            <div className="face-image-bg">
              <Image src={rubikImg} alt="Variety of WCA puzzles" fill placeholder="blur" />
            </div>
            <div className="face-overlay">
              <div className="face-header">
                <div className="face-icon-small"><ScrambleIcon width={24} height={24} /></div>
                <h2 className="face-title">Create Scramble</h2>
              </div>
              <p className="face-description">
                Official WCA algorithms for all competition puzzles.
              </p>
            </div>
          </div>

          {/* Face 2: Image Generation */}
          <div className="cube__face cube__face--right">
            <div className="face-image-bg">
              <Image src={scrambleMockup} alt="Scramble Mockup" fill placeholder="blur" />
            </div>
            <div className="face-overlay">
              <div className="face-header">
                <div className="face-icon-small"><ImageIcon width={24} height={24} /></div>
                <h2 className="face-title">Image Generation</h2>
              </div>
              <p className="face-description">
                Visualize every face of your cube with detailed generated images.
              </p>
            </div>
          </div>

          {/* Face 3: Timer */}
          <div className="cube__face cube__face--back">
            <div className="face-image-bg">
              <Image src={timeMockup} alt="Timer Mockup" fill placeholder="blur" />
            </div>
            <div className="face-overlay">
              <div className="face-header">
                <div className="face-icon-small"><TimerIcon width={24} height={24} /></div>
                <h2 className="face-title">Advanced Timer</h2>
              </div>
              <p className="face-description">
                Measure solving time per puzzle and auto-log to your database.
              </p>
            </div>
          </div>

          {/* Face 4: Community */}
          <div className="cube__face cube__face--left">
            <div className="invite-content">
              <div style={{ marginBottom: '20px' }}>
                <CommunityIcon width={80} height={80} />
              </div>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '15px' }}>Join Our Community</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: 0.9 }}>
                Ready to improve your skills? Add Cube Crafter to your Discord today.
              </p>
              <a href="https://discord.com/oauth2/authorize?client_id=1197268536918278236"
                className="btn"
                style={{ background: 'white', color: 'var(--primary-color)', padding: '15px 40px', fontWeight: 'bold' }}>
                Invite Bot
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="controls">
        <button onClick={rotateLeft} className="control-btn" aria-label="Rotate Left">
          <ArrowLeft width={28} height={28} />
        </button>
        <p style={{ alignSelf: 'center', fontWeight: 'bold', color: 'var(--primary-color)', fontSize: '1.1rem' }}>
          Explore Features
        </p>
        <button onClick={rotateRight} className="control-btn" aria-label="Rotate Right">
          <ArrowRight width={28} height={28} />
        </button>
      </div>
    </div>
  );
};

export default FeatureCube;
'use client';
import React, { useState } from 'react';
import '../styles/FeatureCube.css';
import Image from 'next/image';
import ScrambleIcon from './icons/ScrambleIcon';
import ImageIcon from './icons/ImageIcon';
import LeaderboardIcon from './icons/LeaderboardIcon';
import TimerIcon from './icons/TimerIcon';
import CommunityIcon from './icons/CommunityIcon';
import ArrowLeft from './icons/ArrowLeft';
import ArrowRight from './icons/ArrowRight';

// Static imports
import rubikImg from '../../public/images/rubik.webp';
import scrambleMockup from '../../public/images/scramble_mockup.webp';
import timeMockup from '../../public/images/time_mockup.webp';
import dailyMockup from '../../public/images/daily_mockup.webp'
import stopwatchMockUp from '../../public/images/stopwatch_mockup.webp'

const FeatureCube = () => {
  const [rotationY, setRotationY] = useState(0);
  const numFaces = 5;
  const angle = 360 / numFaces;

  const rotateLeft = () => setRotationY(prev => prev + angle);
  const rotateRight = () => setRotationY(prev => prev - angle);

  const faces = [
    {
      title: "Create Scramble",
      desc: "Official WCA algorithms for all competition puzzles.",
      img: rubikImg,
      icon: <ScrambleIcon width={24} height={24} />,
      type: "standard"
    },
    {
      title: "Image Generation",
      desc: "Visualize every face of your cube with detailed generated images.",
      img: scrambleMockup,
      icon: <ImageIcon width={24} height={24} />,
      type: "standard"
    },
    {
      title: "Daily Competitions",
      desc: "Compete daily with a global scramble and climb the server leaderboard.",
      img: dailyMockup,
      icon: <LeaderboardIcon width={24} height={24} />,
      type: "standard"
    },
    {
      title: "Advanced Timer",
      desc: "Measure solving time per puzzle and auto-log to your database.",
      img: stopwatchMockUp,
      icon: <TimerIcon width={24} height={24} />,
      type: "standard"
    },
    {
      title: "Keep track of your time",
      desc: "Keep track of your improvement throughout with unlimited entry.",
      img: timeMockup,
      icon: <TimerIcon width={24} height={24} />,
      type: "standard"
    },
    {
      title: "Join Our Community",
      desc: "Ready to improve your skills? Add Cube Crafter to your Discord today.",
      img: null,
      icon: <CommunityIcon width={80} height={80} />,
      type: "invite"
    }
  ];

  return (
    <div>
      <div className="scene">
        <div className="cube" style={{ transform: `rotateY(${rotationY}deg)` }}>
          {faces.map((face, index) => (
            <div 
              key={index} 
              className="cube__face" 
              style={{ transform: `rotateY(${index * angle}deg) translateZ(var(--apothem))` }}
            >
              {face.type === "invite" ? (
                <div className="invite-content">
                  <div style={{ marginBottom: '20px' }}>
                    {face.icon}
                  </div>
                  <h2 style={{ fontSize: '2.2rem', marginBottom: '15px' }}>{face.title}</h2>
                  <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: 0.9 }}>
                    {face.desc}
                  </p>
                  <a href="https://discord.com/oauth2/authorize?client_id=1197268536918278236"
                    className="btn"
                    style={{ background: 'white', color: 'var(--primary-color)', padding: '15px 40px', fontWeight: 'bold' }}>
                    Invite Bot
                  </a>
                </div>
              ) : (
                <>
                  <div className="face-image-bg">
                    <Image src={face.img} alt={face.title} fill placeholder="blur" priority={index === 0}/>
                  </div>
                  <div className="face-overlay">
                    <div className="face-header">
                      <div className="face-icon-small">{face.icon}</div>
                      <h2 className="face-title">{face.title}</h2>
                    </div>
                    <p className="face-description">
                      {face.desc}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
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
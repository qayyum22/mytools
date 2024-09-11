import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

const AudioWaveform = ({ audioUrl }) => {
  const waveformRef = useRef(null);
  const cursorRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [wavesurfer, setWavesurfer] = useState(null);

  useEffect(() => {
    if (waveformRef.current) {
      const ws = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: '#A8DBA8',
        progressColor: '#3D9970',
        cursorColor: 'transparent',
        barWidth: 2,
        barRadius: 3,
        responsive: true,
        height: 100,
        normalize: true,
        partialRender: true,
      });

      setWavesurfer(ws);

      ws.load(audioUrl);

      // Cleanup function
      return () => ws.destroy();
    }
  }, [audioUrl]);

  const togglePlay = () => {
    if (wavesurfer) {
      if (isPlaying) {
        wavesurfer.pause();
      } else {
        wavesurfer.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (wavesurfer && isPlaying) {
      const updateCursor = () => {
        const currentTime = wavesurfer.getCurrentTime();
        const percent = (currentTime / wavesurfer.getDuration()) * 100;
        cursorRef.current.style.left = `${percent}%`;
      };

      const interval = setInterval(updateCursor, 100);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isPlaying, wavesurfer]);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div ref={waveformRef} style={{ width: '100%', height: '100px' }} />
      <div 
        ref={cursorRef} 
        style={{
          position: 'absolute', 
          top: 0, 
          left: '0', 
          width: '2px', 
          height: '100%', 
          backgroundColor: 'red', 
          transform: 'translateX(-50%)'
        }}
      />
      <button onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default AudioWaveform;
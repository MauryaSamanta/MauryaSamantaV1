import React from 'react';

const SpinningGlobe = () => {
  return (
    <div style={{
      backgroundColor: 'black',
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="200"
        height="200"
        style={{
          animation: 'spin 10s linear infinite',
          fill: 'white',
        }}
      >
        <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="2" fill="black" />
        <path d="M50,2 A48,48 0 0,1 98,50 A48,48 0 0,1 50,98 A48,48 0 0,1 2,50 A48,48 0 0,1 50,2 Z" fill="none" stroke="white" strokeWidth="1" />
        <path d="M50,10 L50,90 M10,50 L90,50" stroke="white" strokeWidth="1" />
        <path d="M30,40 Q50,20 70,40 Q50,60 30,40 Z" fill="white" />
      </svg>

      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default SpinningGlobe;

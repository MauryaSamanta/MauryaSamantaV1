import React, { useState, useEffect } from 'react';
import SpinningGlobe from '../components/MSinitials';
import Home from './Home';

const SplashWrapper = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000); // 1 second
    return () => clearTimeout(timer);
  }, []);

  return showSplash ? <SpinningGlobe /> : <Home />;
};

export default SplashWrapper;

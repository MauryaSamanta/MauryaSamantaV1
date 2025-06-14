// src/components/StarBackground.jsx
import React, { useEffect } from 'react';

const StarBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('stars');
    const ctx = canvas.getContext('2d');
    const stars = [];
    const numStars = 400;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        alpha: Math.random(),
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();

        star.x += star.dx;
        star.y += star.dy;

        if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas
      id="stars"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width:'100%',
        height:'100%',
        zIndex: -1,
        backgroundColor: 'black'
      }}
    />
  );
};

export default StarBackground;

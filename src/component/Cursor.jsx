import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const colors = [
 "#000000", "#1c1c1c", "#333333", "#4d4d4d", "#666666", "#808080", 
    "#999999", "#b3b3b3", "#cccccc", "#e6e6e6", "#f2f2f2", "#ffffff"
  ];

  useEffect(() => {
    const circles = document.querySelectorAll('.circle');

    circles.forEach((circle, index) => {
      circle.style.backgroundColor = colors[index % colors.length];
      circle.x = 0;
      circle.y = 0;
    });

    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = x - 12 + 'px';
        circle.style.top = y - 12 + 'px';
        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [coords]);

  return (
    <>
      {[...Array(20)].map((_, index) => (
        <div key={index} className="circle absolute w-12 h-12 rounded-full"></div>
      ))}
    </>
  );
};

export default Cursor;

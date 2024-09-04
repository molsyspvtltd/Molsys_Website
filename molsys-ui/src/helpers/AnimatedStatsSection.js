import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/AnimatedStatsSection.css'; 

const AnimatedStatsSection = () => {
  const statsData = [
    { count: 850, label: 'Project Successfully Delivered' },
    { count: 500, label: 'Clients All Over the World' },
    { count: 1000, label: 'Students Trained' },
  ];

  const [animated, setAnimated] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState(Array(statsData.length).fill(0));

  useEffect(() => {
    // Trigger animation when component mounts
    setAnimated(true);

    // Animate numbers
    const animationDuration = 2000; // 2 seconds
    const interval = animationDuration / 100; // Update every 20 milliseconds
    const step = animatedNumbers.map((number, index) => statsData[index].count / (animationDuration / interval));

    const updateNumbers = () => {
      setAnimatedNumbers((prevNumbers) =>
        prevNumbers.map((number, index) => {
          const nextNumber = number + step[index];
          return nextNumber > statsData[index].count ? statsData[index].count : nextNumber;
        })
      );
    };

    const animationInterval = setInterval(updateNumbers, interval);

    // Clean up interval on component unmount
    return () => clearInterval(animationInterval);
  }, [animated]);

  useEffect(() => {
    // Initialize animatedNumbers to start from 1
    if (animated) {
      setAnimatedNumbers(statsData.map(() => 1));
    }
  }, [animated]);

  return (
    <section className={`section2 mb-5 p-4 me-5 ms-5 ${animated ? 'fade-in' : ''}`}>
      <div className="container-fluid mt-4 mb-5 text-center">
        <div className="row">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="col text-center p-4 border rounded shadow"
              style={{
                background: 'linear-gradient(to bottom, #d9d9d9, #c0c0c0)', // Metallic and light gray gradient
                border: '1px solid #a9a9a9', // Light gray border
              }}
            >
              <h2 style={{ color: 'black' }}>{Math.floor(animatedNumbers[index])}+</h2>
              <p className="lead"><strong>{stat.label}</strong></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStatsSection;

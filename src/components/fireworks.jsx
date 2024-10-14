import React, { useEffect, useRef } from 'react';

const Fireworks = () => {
  const canvasRef = useRef(null);

  // Create a firework particle
  const createFirework = (x, y) => {
    const particles = [];
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6,
        life: Math.random() * 100 + 50,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      });
    }
    return particles;
  };

  // Draw the firework particles
  const drawParticles = (ctx, particles) => {
    particles.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  // Animate the fireworks
  const animate = (ctx, fireworks) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    fireworks.forEach((particles, index) => {
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.life--;
      });
      drawParticles(ctx, particles);
      if (particles[0].life <= 0) {
        fireworks.splice(index, 1);
      }
    });

    drawText(ctx);
    requestAnimationFrame(() => animate(ctx, fireworks));
  };

  // Draw the "Happy Birthday Sruthi" text with responsive font size
  const drawText = (ctx) => {
    const fontSize = Math.min(ctx.canvas.width / 15, ctx.canvas.height / 10); // Responsive font size
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText('Happy Birthday Sruthi!', ctx.canvas.width / 2, ctx.canvas.height / 2);
    
    // Create a glowing effect by drawing the same text in different colors with slight offsets
    for (let i = 0; i < 20; i++) {
      ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
      ctx.fillText('Happy Birthday Sruthi!', ctx.canvas.width / 2 + Math.random() * 5, ctx.canvas.height / 2 + Math.random() * 5);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fireworks = [];
    const createFireworksInterval = setInterval(() => {
      fireworks.push(createFirework(Math.random() * canvas.width, Math.random() * canvas.height));
    }, 1000);

    animate(ctx, fireworks);

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(createFireworksInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-screen bg-black"
    />
  );
};

export default Fireworks;

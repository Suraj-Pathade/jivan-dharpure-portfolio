import { useEffect, useRef } from 'react';

export default function LeafCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Check for mobile / touch device or reduced motion
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-color-scheme: reduce)').matches;

    if (isTouchDevice || prefersReducedMotion) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let lastX = 0;
    let lastY = 0;
    let isMoving = false;
    let idleTimer = null;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Subtle natural green palette
    const colors = [
      'rgba(82, 183, 136, 0.6)',  // Soft green
      'rgba(45, 106, 79, 0.5)',   // Forest green
      'rgba(116, 198, 157, 0.6)', // Light leaf green
      'rgba(183, 228, 199, 0.7)', // Pale green
      'rgba(216, 243, 220, 0.6)'  // Mint leaf
    ];

    const createParticle = (x, y) => {
      if (particles.length > 25) return; // Strict performance limit

      const size = Math.random() * 8 + 6; // Small, subtle leaves
      particles.push({
        x: x + (Math.random() - 0.5) * 16,
        y: y + (Math.random() - 0.5) * 16,
        size,
        vx: (Math.random() - 0.5) * 0.8,
        vy: Math.random() * 0.8 + 0.4, // Gently float down
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.05,
        opacity: 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 40 + 30
      });
    };

    const handleMouseMove = (e) => {
      const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
      if (dist > 15) { // Spawn only when cursor moved enough
        createParticle(e.clientX, e.clientY);
        lastX = e.clientX;
        lastY = e.clientY;
      }
      isMoving = true;
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isMoving = false;
      }, 1500);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Draw single subtle leaf shape
    const drawLeaf = (ctx, p) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;

      ctx.beginPath();
      // Organic leaf curve path
      ctx.moveTo(0, -p.size);
      ctx.bezierCurveTo(p.size * 0.6, -p.size * 0.4, p.size * 0.8, p.size * 0.4, 0, p.size);
      ctx.bezierCurveTo(-p.size * 0.8, p.size * 0.4, -p.size * 0.6, -p.size * 0.4, 0, -p.size);
      ctx.fill();

      // Leaf vein stroke
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(0, -p.size * 0.8);
      ctx.lineTo(0, p.size * 0.8);
      ctx.stroke();

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx + Math.sin(p.life * 0.05) * 0.3; // Gentle wind sway
        p.y += p.vy;
        p.rotation += p.vRot;
        p.opacity = Math.max(0, 0.8 * (1 - p.life / p.maxLife));

        drawLeaf(ctx, p);

        if (p.life >= p.maxLife || p.opacity <= 0) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(idleTimer);
    };
  }, []);

  return <canvas ref={canvasRef} id="leaf-canvas" aria-hidden="true" />;
}

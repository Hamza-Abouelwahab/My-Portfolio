import { useEffect, useRef } from 'react';

const COLORS = [
  '#477023', '#2D531A', '#a8d878', '#c8e8a0',
  '#ffffff', '#e8f5d0', '#6aaa30', '#0D330E',
  '#88cc44', '#f0fff0',
];

const FRICTION = 0.9998;
const WALL_BOUNCE = 0.95;
const DAMPING = 0.88;
const MIN_SPEED = 0.5;
const MAX_SPEED = 3.0;

export default function Ballpit({
  count = 80,
  followCursor = true,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    const balls = Array.from({ length: count }, () => {
      const r = 6 + Math.random() * 14;
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.8 + Math.random() * 1.4;
      return {
        x: r * 2 + Math.random() * (W - r * 4),
        y: r * 2 + Math.random() * (H - r * 4),
        r,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        alpha: 0.75 + Math.random() * 0.25,
      };
    });

    let mouse = { x: -9999, y: -9999 };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) * (W / rect.width);
      mouse.y = (e.clientY - rect.top) * (H / rect.height);
    };
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    if (followCursor) {
      canvas.addEventListener('mousemove', onMouseMove);
      canvas.addEventListener('mouseleave', onMouseLeave);
    }

    const resolveCollision = (a, b) => {
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const distSq = dx * dx + dy * dy;
      const minDist = a.r + b.r;
      if (distSq === 0 || distSq >= minDist * minDist) return;

      const dist = Math.sqrt(distSq);
      const nx = dx / dist;
      const ny = dy / dist;

      const ma = b.r * b.r, mb = a.r * a.r, mt = ma + mb;
      const overlap = minDist - dist;
      a.x -= nx * overlap * (ma / mt);
      a.y -= ny * overlap * (ma / mt);
      b.x += nx * overlap * (mb / mt);
      b.y += ny * overlap * (mb / mt);

      const dvx = a.vx - b.vx;
      const dvy = a.vy - b.vy;
      const dot = dvx * nx + dvy * ny;
      if (dot > 0) return;

      const impulse = -(1 + DAMPING) * dot / 2;
      a.vx += impulse * nx;
      a.vy += impulse * ny;
      b.vx -= impulse * nx;
      b.vy -= impulse * ny;
    };

    let raf;
    const tick = () => {
      ctx.clearRect(0, 0, W, H);

      for (const b of balls) {
        b.vx *= FRICTION;
        b.vy *= FRICTION;

        if (followCursor) {
          const dx = b.x - mouse.x;
          const dy = b.y - mouse.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100 && d > 0) {
            const force = (100 - d) / 100 * 1.5;
            b.vx += (dx / d) * force;
            b.vy += (dy / d) * force;
          }
        }

        b.x += b.vx;
        b.y += b.vy;

        if (b.x - b.r < 0)  { b.x = b.r;     b.vx =  Math.abs(b.vx) * WALL_BOUNCE; }
        if (b.x + b.r > W)  { b.x = W - b.r; b.vx = -Math.abs(b.vx) * WALL_BOUNCE; }
        if (b.y - b.r < 0)  { b.y = b.r;     b.vy =  Math.abs(b.vy) * WALL_BOUNCE; }
        if (b.y + b.r > H)  { b.y = H - b.r; b.vy = -Math.abs(b.vy) * WALL_BOUNCE; }

        const speed = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
        if (speed < MIN_SPEED && speed > 0) {
          const scale = MIN_SPEED / speed;
          b.vx *= scale;
          b.vy *= scale;
        } else if (speed === 0) {
          const angle = Math.random() * Math.PI * 2;
          b.vx = Math.cos(angle) * MIN_SPEED;
          b.vy = Math.sin(angle) * MIN_SPEED;
        }
        if (speed > MAX_SPEED) {
          const scale = MAX_SPEED / speed;
          b.vx *= scale;
          b.vy *= scale;
        }
      }

      for (let pass = 0; pass < 3; pass++) {
        for (let i = 0; i < balls.length; i++) {
          for (let j = i + 1; j < balls.length; j++) {
            resolveCollision(balls[i], balls[j]);
          }
        }
      }

      for (const b of balls) {
        ctx.save();
        ctx.globalAlpha = b.alpha;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();
        ctx.restore();
      }

      raf = requestAnimationFrame(tick);
    };

    tick();

    const onResize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      if (followCursor) {
        canvas.removeEventListener('mousemove', onMouseMove);
        canvas.removeEventListener('mouseleave', onMouseLeave);
      }
    };
  }, [count, followCursor]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
    />
  );
}
"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  a: number;
  speed: number;
  phase: number;
}

interface Shooter {
  x: number;
  y: number;
  len: number;
  speed: number;
  angle: number;
  alpha: number;
  life: number;
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current!;
    const ctx = c.getContext("2d")!;
    let stars: Star[] = [];
    let shooters: Shooter[] = [];
    const COUNT = 220;
    let raf: number;
    let shooterTimeout: ReturnType<typeof setTimeout>;

    function resize() {
      c.width = innerWidth;
      c.height = innerHeight;
    }

    function init() {
      resize();
      stars = [];
      for (let i = 0; i < COUNT; i++) {
        stars.push({
          x: Math.random() * c.width,
          y: Math.random() * c.height,
          r: Math.random() * 1.4 + 0.3,
          a: Math.random() * 0.6 + 0.2,
          speed: Math.random() * 0.15 + 0.02,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    function spawnShooter() {
      shooters.push({
        x: Math.random() * c.width * 0.8,
        y: Math.random() * c.height * 0.3,
        len: Math.random() * 80 + 40,
        speed: Math.random() * 6 + 4,
        angle: Math.PI / 4 + Math.random() * 0.3,
        alpha: 1,
        life: 1,
      });
      shooterTimeout = setTimeout(
        spawnShooter,
        Math.random() * 6000 + 3000
      );
    }

    function drawShooters() {
      shooters = shooters.filter((s) => {
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.life -= 0.02;
        s.alpha = s.life;
        if (s.life <= 0) return false;
        const ex = s.x - Math.cos(s.angle) * s.len;
        const ey = s.y - Math.sin(s.angle) * s.len;
        const g = ctx.createLinearGradient(s.x, s.y, ex, ey);
        g.addColorStop(0, `rgba(200,220,255,${s.alpha})`);
        g.addColorStop(1, "rgba(200,220,255,0)");
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        return true;
      });
    }

    function draw(t: number) {
      ctx.clearRect(0, 0, c.width, c.height);
      stars.forEach((s) => {
        const tw = Math.sin(t * 0.001 + s.phase) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220,225,255,${s.a * tw})`;
        ctx.fill();
        s.y -= s.speed;
        if (s.y < -5) {
          s.y = c.height + 5;
          s.x = Math.random() * c.width;
        }
      });
      drawShooters();
      raf = requestAnimationFrame(draw);
    }

    init();
    spawnShooter();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(shooterTimeout);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield-canvas" />;
}

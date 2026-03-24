import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  opacityDir: number;
}

export default function StarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let stars: Star[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // create stars with layers
    const createStars = (count: number, sizeRange: [number, number], speedRange: [number, number]) => {
      return Array.from({ length: count }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0],
        speed: Math.random() * (speedRange[1] - speedRange[0]) + speedRange[0],
        opacity: Math.random(),
        opacityDir: Math.random() > 0.5 ? 0.01 : -0.01
      }));
    };

    stars = [
      ...createStars(100, [0.5, 1], [0.05, 0.15]), // far layer
      ...createStars(100, [1, 1.5], [0.1, 0.3]),  // mid layer
      ...createStars(50, [1.5, 2], [0.2, 0.5])    // close layer
    ];

    const animate = () => {
      ctx.fillStyle = "#000"; // black space
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        // move
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        // twinkle
        star.opacity += star.opacityDir;
        if (star.opacity >= 1 || star.opacity <= 0.2) star.opacityDir *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;
        ctx.shadowBlur = star.size * 2;
        ctx.shadowColor = "white";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
}
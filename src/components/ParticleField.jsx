import { useEffect, useRef } from "react";

function createParticle(width, height) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.28,
    vy: (Math.random() - 0.5) * 0.28,
    radius: Math.random() * 1.8 + 0.6,
  };
}

export function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return undefined;
    }

    let animationFrameId = 0;
    let width = 0;
    let height = 0;
    let particles = [];

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    function resizeCanvas() {
      const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

      const count = Math.max(28, Math.min(72, Math.floor((width * height) / 24000)));
      particles = Array.from({ length: count }, () =>
        createParticle(width, height),
      );
    }

    function drawScene(animate) {
      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        if (animate) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x <= 0 || particle.x >= width) {
            particle.vx *= -1;
          }

          if (particle.y <= 0 || particle.y >= height) {
            particle.vy *= -1;
          }
        }

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = "rgba(255, 255, 255, 0.55)";
        context.fill();
      }

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];

        for (let offset = index + 1; offset < particles.length; offset += 1) {
          const neighbour = particles[offset];
          const dx = particle.x - neighbour.x;
          const dy = particle.y - neighbour.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 110) {
            const opacity = (1 - distance / 110) * 0.18;

            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(neighbour.x, neighbour.y);
            context.strokeStyle = `rgba(241, 48, 36, ${opacity})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        }
      }
    }

    function animate() {
      drawScene(true);
      animationFrameId = window.requestAnimationFrame(animate);
    }

    function startOrRedraw() {
      window.cancelAnimationFrame(animationFrameId);

      if (mediaQuery.matches) {
        drawScene(false);
        return;
      }

      animate();
    }

    function handlePreferenceChange() {
      startOrRedraw();
    }

    resizeCanvas();
    startOrRedraw();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("resize", startOrRedraw);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handlePreferenceChange);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(handlePreferenceChange);
    }

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("resize", startOrRedraw);

      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", handlePreferenceChange);
      } else if (typeof mediaQuery.removeListener === "function") {
        mediaQuery.removeListener(handlePreferenceChange);
      }
    };
  }, []);

  return <canvas aria-hidden="true" className="particle-field" ref={canvasRef} />;
}

import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import Matter from "matter-js";

const SWATCHES = ["#C17D3C", "#E8D5B7", "#3D2B1F", "#A85C2C", "#D9B383", "#8B4A26"];

export default function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sceneRef.current) return;
    const el = sceneRef.current;
    const w = el.clientWidth;
    const h = el.clientHeight;

    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    const Bodies = Matter.Bodies;
    const Composite = Matter.Composite;
    const Mouse = Matter.Mouse;
    const MouseConstraint = Matter.MouseConstraint;

    const engine = Engine.create();
    engine.gravity.y = 0.4;

    const render = Render.create({
      element: el,
      engine,
      options: {
        width: w,
        height: h,
        wireframes: false,
        background: "transparent",
        pixelRatio: window.devicePixelRatio,
      },
    });

    // walls
    const opts = { isStatic: true, render: { visible: false } };
    Composite.add(engine.world, [
      Bodies.rectangle(w / 2, h + 30, w, 60, opts),
      Bodies.rectangle(-30, h / 2, 60, h, opts),
      Bodies.rectangle(w + 30, h / 2, 60, h, opts),
      Bodies.rectangle(w / 2, -30, w, 60, opts),
    ]);

    // fabric pieces (rectangles + circles)
    const pieces: Matter.Body[] = [];
    const count = w < 768 ? 14 : 22;
    for (let i = 0; i < count; i++) {
      const color = SWATCHES[i % SWATCHES.length];
      const shape =
        i % 3 === 0
          ? Bodies.circle(Math.random() * w, -Math.random() * 400, 18 + Math.random() * 20, {
              restitution: 0.5,
              friction: 0.05,
              render: { fillStyle: color },
            })
          : Bodies.rectangle(
              Math.random() * w,
              -Math.random() * 600,
              30 + Math.random() * 50,
              20 + Math.random() * 30,
              {
                restitution: 0.4,
                friction: 0.08,
                angle: Math.random() * Math.PI,
                render: { fillStyle: color },
              },
            );
      pieces.push(shape);
    }
    Composite.add(engine.world, pieces);

    const mouse = Mouse.create(render.canvas);
    const mc = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });
    Composite.add(engine.world, mc);
    render.mouse = mouse;

    // allow page scroll over canvas
    mouse.element.removeEventListener(
      "wheel",
      (mouse as unknown as { mousewheel: EventListener }).mousewheel,
    );

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    const handleResize = () => {
      const nw = el.clientWidth;
      const nh = el.clientHeight;
      render.canvas.width = nw;
      render.canvas.height = nh;
      render.options.width = nw;
      render.options.height = nh;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(engine.world, false);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-cream pt-20">
      <div ref={sceneRef} className="absolute inset-0 z-0 pointer-events-auto" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-20 lg:pt-32 pb-20 pointer-events-none">
        <div className="max-w-3xl pointer-events-auto">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent mb-6 fade-up">
            <span className="w-8 h-px bg-accent" /> Jaipur • Since 1959
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl text-primary leading-[0.95] text-balance fade-up">
            Where <em className="text-accent not-italic">Fabric</em>
            <br />
            Meets <span className="italic">Art</span>
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-foreground/75 max-w-xl fade-up">
            Jaipur-based premium screen printing manufacturer. 2000+ designs, crafted by hand,
            delivered at scale to boutiques and brands worldwide.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 fade-up">
            <Link
              to="/catalogue"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full text-sm font-medium hover:bg-primary/90 shadow-warm transition-all hover:scale-105"
            >
              View Catalogue →
            </Link>
            <Link
              to="/factory-visit"
              className="inline-flex items-center gap-2 border border-primary text-primary px-7 py-4 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Visit Our Factory
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-xs uppercase tracking-[0.3em] text-foreground/40 animate-bounce">
        Scroll
      </div>
    </section>
  );
}

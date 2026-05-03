import ScrollReveal from "../../lib/ScrollReveal";
import ThreeScene from "../../lib/ThreeScene";
import LaptopModel from "../../lib/scenes/LaptopModel";

const HeroSection = () => {
  return (
    <section className="relative mesh-bg w-full overflow-hidden py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div className="z-10">
          <ScrollReveal direction="up" delay={0}>
            <p className="text-xs tracking-[0.35em] uppercase text-[var(--color-ink-500)] mb-4 font-light">
              Our Mission
            </p>

            <h1 className="text-6xl md:text-7xl font-thin leading-none tracking-tight text-[var(--color-ink-900)] mb-6">
              Bridging the Gap
              <br />
              <span className="font-light bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-warm)]">
                Business &amp; Technology
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <p className="mt-4 text-lg md:text-xl text-[var(--color-ink-500)] max-w-xl leading-relaxed font-light">
              We craft tailored digital solutions that empower ambitious
              businesses and drive real transformation.
            </p>
          </ScrollReveal>
        </div>

        {/* Right: 3-D laptop */}
        <ScrollReveal direction="right" delay={0.25}>
          <div className="w-full" style={{ height: "50vh" }}>
            <ThreeScene
              style={{ height: "50vh" }}
              cameraPosition={[0, 0, 5]}
              fov={45}
              disableOnMobile
            >
              <LaptopModel position={[0, 0, 0]} scale={2} />
            </ThreeScene>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;

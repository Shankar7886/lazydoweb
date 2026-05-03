import { motion } from "framer-motion";
import ImageHostLink from "../../variable";
import GradientMesh from "../../lib/GradientMesh";
import ScrollReveal from "../../lib/ScrollReveal";
import TiltCard from "../../lib/TiltCard";

const AboutUsSection = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-20 overflow-hidden">
      <GradientMesh colors={["#fde8e1", "#e8e6ff", "#fef3cd"]} />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <ScrollReveal direction="up" delay={0}>
          <TiltCard>
            <div className="glass-card rounded-2xl p-6">
              <h2
                className="text-4xl md:text-5xl font-thin mb-6 text-left tracking-tight"
              >
                <span
                  style={{
                    background:
                      "linear-gradient(135deg,var(--color-accent-primary),var(--color-accent-warm))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  About Us
                </span>
              </h2>
              <div
                className="h-1 w-20 mb-6 rounded-full"
                style={{ backgroundColor: "var(--color-accent-primary)" }}
              />
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-left">
                <span className="font-semibold text-gray-800">Lazy Do</span>{" "}
                is a leading software development company dedicated to providing
                innovative and tailored solutions to businesses of all sizes. With
                our team of experienced developers and cutting-edge technologies,
                we strive to deliver high-quality software products that meet our
                clients' unique requirements.
              </p>
            </div>
          </TiltCard>
        </ScrollReveal>

        {/* Right: Video */}
        <ScrollReveal direction="up" delay={0.1}>
          <motion.div
            className="w-full aspect-video rounded-xl overflow-hidden shadow-xl"
          >
            <video
              src={`${ImageHostLink}team.mp4`}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutUsSection;

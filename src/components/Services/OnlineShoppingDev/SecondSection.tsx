import { motion } from "framer-motion";
import ScrollReveal from "../../../lib/ScrollReveal";

export default function WebDevelopmentServicesSection() {
  return (
    <section className="py-24 px-6 text-center relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        <ScrollReveal direction="up">
          <h2 className="text-4xl md:text-5xl font-thin tracking-tight mb-4">
            <span className="bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-transparent">
              Online Shopping
            </span>{" "}
            <span
              className="bg-clip-text text-transparent font-extralight"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--color-accent-primary), var(--color-accent-warm))",
              }}
            >
              App Development
            </span>
          </h2>
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mt-4 mb-12 origin-center" />
        </ScrollReveal>

        <div className="space-y-8">
          <ScrollReveal direction="left" delay={0.2}>
            <p className="text-lg md:text-xl leading-relaxed font-light text-slate-600 tracking-wide">
              Lazy Do is committed to keeping pace with changing industry
              standards, providing end-to-end web development services through
              user-centric approaches. Our solutions are specifically designed to
              suit the specific needs of each client and maximize their digital
              impact.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <p className="text-base md:text-lg leading-relaxed font-light text-slate-500 tracking-wide">
              At Lazy Do, we have expertise in designing smart and scalable
              platforms to take your online business to the next level. Our
              end-to-end eCommerce solutions enable entrepreneurs and businesses
              to seamlessly build, run, and scale their digital storehouses with
              simplicity and effectiveness. We develop a variety of eCommerce
              mobile apps and websites for clients worldwide, providing flexible,
              secure mobile commerce applications for Business-to-Business (B2B)
              and Business-to-Consumer (B2C) applications. Whether it's a single
              brand store or a multi-brand business, we provide solutions that
              fit your situation and audience.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

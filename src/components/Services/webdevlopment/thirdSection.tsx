import { motion } from "framer-motion";
import {
  Code,
  ShoppingCart,
  FileText,
  Building2,
  Brush,
  LifeBuoy,
} from "lucide-react";

export default function WebDevSolutionsSection() {
  return (
    <section className="py-24 px-6 md:px-16 text-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-10">
          Comprehensive and Cutting-Edge Web Development Solutions We Offer
        </h2>
        <p className="text-lg md:text-xl mb-10 text-gray-600">
          To match your business goals, we use technology that propels strong,
          high-performance websites.
        </p>

        <ul className="space-y-8 text-lg text-gray-700">
          <li>
            <div className="flex items-center gap-2 mb-1">
              <Code size={24} className="text-primary" />
              <strong className="text-xl text-gray-900">
                Custom Web Development
              </strong>
            </div>
            We build high-performance, feature-rich, and scalable web
            applications for startups to large-scale enterprises to optimize
            business processes effectively.
          </li>

          <li>
            <div className="flex items-center gap-2 mb-1">
              <ShoppingCart size={24} className="text-primary" />
              <strong className="text-xl text-gray-900">
                E-Commerce Development
              </strong>
            </div>
            Realizing that each online shop has special needs, we provide
            specialized e-commerce development services to achieve maximum
            online business value.
          </li>

          <li>
            <div className="flex items-center gap-2 mb-1">
              <FileText size={24} className="text-primary" />
              <strong className="text-xl text-gray-900">
                CMS Web Development
              </strong>
            </div>
            Our skilled full stack developers leverage cutting-edge methods to
            quickly develop and deploy CMS-based applications with agility and
            speed.
          </li>

          <li>
            <div className="flex items-center gap-2 mb-1">
              <Building2 size={24} className="text-primary" />
              <strong className="text-xl text-gray-900">
                Enterprise App Development
              </strong>
            </div>
            Our business-class web app development skills enable us to offer our
            clients across the broad range of industries precision and accuracy.
          </li>

          <li>
            <div className="flex items-center gap-2 mb-1">
              <Brush size={24} className="text-primary" />
              <strong className="text-xl text-gray-900">UI/UX Design</strong>
            </div>
            We design engaging and intuitive user interfaces that enhance your
            brand while providing quick and seamless performance with
            interesting design elements.
          </li>

          <li>
            <div className="flex items-center gap-2 mb-1">
              <LifeBuoy size={24} className="text-primary" />
              <strong className="text-xl text-gray-900">
                Support & Maintenance
              </strong>
            </div>
            Lazy Do guarantees that your website performs at its best through
            regular maintenance and support, even during development stages.
          </li>
        </ul>
      </motion.div>
    </section>
  );
}

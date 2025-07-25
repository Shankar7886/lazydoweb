// DigitalMarketingPage.tsx
import { motion } from "framer-motion";
import useGoToContactPage from "../../Contact/contactFn";




export default function DigitalMarketingPage() {
  const goContact = useGoToContactPage();
  return (
    <>
      {/* Hero */}
    <section className="py-24 flex flex-col justify-center items-center px-6 md:px-20 text-center bg-gradient-to-br from-[#fefefe] via-[#f0f0f0] to-[#e6e6e6]">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
        >
          Accelerate Your Growth with{" "}
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
            Digital Marketing
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 max-w-2xl"
        >
        At Lazy Do, we don't merely provide digital marketing – we redefine your digital path. With more than a decade of background, we've assisted hundreds of companies to enter the top levels of search engines and create overwhelming online presences. From regional startups to industry leaders, our digital plans are created to achieve quantifiable expansion.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
         onClick={goContact}
       >
          Let’s Elevate Your Brand
        </motion.button>
      </section>

      {/* Services */}
   
    </>
  );
}

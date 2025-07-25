
import { motion } from "framer-motion";
import ImageHostLink from "../../../variable";
const bank = "8292057.jpg"

export default function ElegantOrbit3D() {
  return (
    <motion.div
      className="w-full h-[300px]  flex items-center justify-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
    >
      <img src={ImageHostLink +bank} style={{height:"300px"}}  loading="lazy"/>
    </motion.div>
  );
}

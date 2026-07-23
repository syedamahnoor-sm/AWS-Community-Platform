import { motion } from "motion/react";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
}

const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;
import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  id,
  dark = false,
}) => {
  return (
    <motion.section
      id={id}
      className={`section ${dark ? "bg-alt" : ""} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        backgroundColor: dark ? "var(--color-bg-alt)" : "var(--color-bg)",
      }}
    >
      <div className="container">{children}</div>
    </motion.section>
  );
};

export default Section;

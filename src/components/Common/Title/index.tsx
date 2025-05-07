"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type TitleType = {
  label: string;
  semantic?: boolean;
  color?: string;
  type?: "sm" | "lg";
  align?: "left" | "center" | "right";
};

const titleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Title({
  label,
  semantic = false,
  color = "dark",
  type = "sm",
  align = "left",
}: TitleType) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  const styles = {
    color: color,
    textAlign: align,
  };

  const sizeClasses = type === "sm" ? "title-sm" : "title-lg";

  const MotionTag = semantic ? motion.h1 : motion.h2;

  return (
    <MotionTag
      className={`title ${sizeClasses}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={titleVariants}
      style={styles}
      ref={ref}
      aria-hidden
    >
      {label}
    </MotionTag>
  );
}

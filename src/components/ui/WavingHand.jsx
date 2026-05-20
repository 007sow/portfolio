import React from "react";
import { Hand } from "lucide-react";
import { motion } from "framer-motion";

export default function WavingHand({ className  }) {
  return (
    <motion.div
      style={{ display: "inline-block" }}
      animate={{ rotate: [0, 14, -8, 14, 0] }}
      transition={{
        duration: 1,         // total time for one wave cycle
        ease: "easeInOut",   // smooth in/out
        repeat: Infinity,    // loop forever
        repeatDelay: 2       // 2s pause between waves
      }}
    >
      <Hand className={`${className}`}/>
    </motion.div>
  );
}

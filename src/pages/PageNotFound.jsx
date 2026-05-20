import React from "react";
import { motion } from "framer-motion";
import { RxCrossCircled } from "react-icons/rx";
import { DotBackground } from "../components/layout/DotBackground";

function PageNotFound() {
  return (
    <DotBackground className="min-h-screen">
    <motion.div
        className="flex flex-col items-center lg:mt-[250px] mt-[100px] p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <RxCrossCircled className="text-6xl text-blue-500 mb-6 animate-pulse" />
      <motion.h1
        className="text-4xl md:text-6xl font-OldStandardTT text-gray-800 mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Page Not Found
      </motion.h1>
    </motion.div>
    </DotBackground>
  );
}

export default PageNotFound;

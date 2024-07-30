"use client";

import React, { useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";

const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 1000 }}
        transition={{ duration: 0.4, delay: 2, easings: easeInOut }}
        className="fixed inset-0 flex items-center justify-center bg-red-500 z-50"
      >
        <div className="flex gap-2">
          <motion.h1
            initial={{ y: 10 }}
            animate={{ y: 0, opacity: [0, 1] }}
            transition={{ duration: 0.6, ease: easeInOut }}
            className="uppercase"
          >
            front
          </motion.h1>
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: [0, 1] }}
            transition={{ duration: 0.6, delay: 0.4, ease: easeInOut }}
            className="uppercase"
          >
            end
          </motion.h1>
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: [0, 1] }}
            transition={{ duration: 0.6, delay: 0.8, ease: easeInOut }}
            className="uppercase"
          >
            developer
          </motion.h1>
        </div>
      </motion.div>
    </>
  );
};

export default Preloader;

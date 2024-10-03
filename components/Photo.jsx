"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.3, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.3, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[358px] xl:h-[358px] absolute mix-blend-lighten brightness-50 "
        >
          <Image
            src="/photo.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain pb-12 rounded-bl-full "
          />
        </motion.div>

        {/* circle */}
        <motion.svg
          className="w-[250px] xl:w-[366px] h-[250px] xl:h-[366px] rounded-tr-full"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="255"
            stroke="#9333ea"
            strokeWidth="4"
            strokeLinecap="circle"
            strokeLinejoin="circle"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;

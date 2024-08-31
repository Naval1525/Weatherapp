/** @format */

import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

type Props = {};

export default function WeatherIcon(
  props: React.HTMLProps<HTMLDivElement> & { iconName: string }
) {
  return (
    <motion.div
      title={props.iconName}
      {...props}
      className={cn("relative h-20 w-20")}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        width={100}
        height={100}
        alt="weather-icon"
        className="absolute h-full w-full"
        src={`https://openweathermap.org/img/wn/${props.iconName}@4x.png`}
      />
    </motion.div>
  );
}

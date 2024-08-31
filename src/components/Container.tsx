/** @format */

import { cn } from "@/utils/cn";
import React from "react";
import { motion, MotionProps } from "framer-motion";

interface ContainerProps extends React.HTMLProps<HTMLDivElement>, MotionProps {}

const Container: React.FC<ContainerProps> = ({ className, ...props }) => {
  return (
    <motion.div
      {...props}
      className={cn(
        "w-full bg-white border rounded-xl flex py-4 shadow-sm",
        className
      )}
    />
  );
};

export default Container;

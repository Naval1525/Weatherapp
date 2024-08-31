/** @format */

import { cn } from "@/utils/cn";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { motion } from "framer-motion";

type Props = {
  className?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};

export default function SearchBox(props: Props) {
  return (
    <motion.form
      onSubmit={props.onSubmit}
      className={cn(
        "flex relative items-center justify-center h-10",
        props.className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search location.."
        className="px-4 py-2 w-[230px] border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 h-full"
        initial={{ x: -10 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.button
        className="px-4 py-[9px] bg-blue-500 text-white rounded-r-md focus:outline-none hover:bg-blue-600 h-full"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <IoSearch />
      </motion.button>
    </motion.form>
  );
}

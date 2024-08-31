/** @format */
import React from "react";
import { motion } from "framer-motion";

const SuggetionBox = ({
  showSuggestions,
  suggestions,
  handleSuggestionClick,
  error,
}: {
  showSuggestions: boolean;
  suggestions: string[];
  handleSuggestionClick: (item: string) => void;
  error: string;
}) => {
  return (
    <>
      {((showSuggestions && suggestions.length > 0) || error) && (
        <motion.ul
          className="mb-4 bg-white absolute border top-[44px] left-0 border-gray-300 rounded-md min-w-[200px] flex flex-col gap-1 py-2 px-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {error && suggestions.length === 0 && (
            <li className="text-red-500 p-1">{error}</li>
          )}
          {suggestions.map((item, i) => (
            <motion.li
              key={i}
              onClick={() => handleSuggestionClick(item)}
              className="cursor-pointer p-1 rounded hover:bg-gray-200"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </>
  );
};

export default SuggetionBox;

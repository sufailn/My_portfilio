"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type TypewriterEffectProps = {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
};

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: TypewriterEffectProps) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""), // Split text into characters
  }));

  const renderWords = () => {
    return (
      <div className="inline">
        {wordsArray.map((word, idx) => (
          <span key={`word-${idx}`} className="inline-block">
            {word.text.map((char, index) => (
              <motion.span
                key={`char-${index}`}
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className={cn("inline-block", word.className)}
              >
                {char}
              </motion.span>
            ))}
            &nbsp;
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("relative", className)}>
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-6 bg-blue-500 ml-1 align-middle",
          cursorClassName
        )}
      />
    </div>
  );
};

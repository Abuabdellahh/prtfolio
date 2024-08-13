import React, { useState, useEffect } from "react";

const TypingAnimation = ({ texts }) => {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timer;

    if (isTyping) {
      if (currentText.length < texts[textIndex].length) {
        timer = setTimeout(() => {
          setCurrentText((prev) => texts[textIndex].slice(0, prev.length + 1));
        }, 50); // Faster typing speed
      } else {
        setIsTyping(false);
        timer = setTimeout(() => {
          setIsTyping(true);
          setCurrentText("");
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 50); // Longer pause before starting the next text
      }
    } else {
      timer = setTimeout(() => {
        setIsTyping(true);
      }, 50); // Short pause after deleting text
    }

    return () => clearTimeout(timer);
  }, [currentText, textIndex, isTyping, texts]);

  return (
    <div className="h-20 flex items-center justify-center">
      <p className="font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl overflow-hidden whitespace-nowrap inline-block">
        {currentText}
        <span className="animate-blink">|</span>
      </p>
    </div>
  );
};

export default TypingAnimation;

import { useState, useEffect, useRef } from 'react';

const useTypingEffect = (texts, typingSpeed, delayBetweenTexts) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const textsRef = useRef(texts);

  useEffect(() => {
    if (isTyping) {
      if (displayedText.length < textsRef.current[textIndex].length) {
        setTimeout(() => {
          setDisplayedText(textsRef.current[textIndex].slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        setTimeout(() => {
          setIsTyping(false);
        }, delayBetweenTexts);
      }
    } else {
      if (displayedText.length > 0) {
        setTimeout(() => {
          setDisplayedText(displayedText.slice(0, displayedText.length - 1));
        }, typingSpeed);
      } else {
        setTextIndex((textIndex + 1) % textsRef.current.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, delayBetweenTexts, typingSpeed, textIndex]);

  return displayedText;
};

export default useTypingEffect;
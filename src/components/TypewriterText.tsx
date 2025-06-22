// TypewriterText.tsx
import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  phrases: string[];
  typeSpeed?: number;
  startDelay?: number; // ⬅️ nova prop
  className?: string;
  cursorClassName?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  phrases,
  typeSpeed = 100,
  startDelay = 1000, // ⬅️ valor padrão
  className = '',
  cursorClassName = 'text-blue-500',
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTypingFinished, setIsTypingFinished] = useState(false);
  const [hasStarted, setHasStarted] = useState(startDelay === 0); // ⬅️ só começa depois do delay

  useEffect(() => {
    if (!hasStarted && startDelay > 0) {
      const startTimer = setTimeout(() => setHasStarted(true), startDelay);
      return () => clearTimeout(startTimer);
    }
  }, [hasStarted, startDelay]);

  useEffect(() => {
    if (!hasStarted || phrases.length === 0 || isTypingFinished) return;

    const currentPhrase = phrases[currentPhraseIndex];

    if (currentText === currentPhrase) {
      if (currentPhraseIndex === phrases.length - 1) {
        setIsTypingFinished(true);
        return;
      } else {
        setCurrentPhraseIndex((prev) => prev + 1);
        setCurrentText('');
        return;
      }
    }

    const timeout = setTimeout(() => {
      setCurrentText(currentPhrase.substring(0, currentText.length + 1));
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentPhraseIndex, phrases, typeSpeed, isTypingFinished, hasStarted]);

  return (
    <span className={className}>
      {currentText}
      {!isTypingFinished && hasStarted && (
        <span className={`inline-block animate-pulse ml-1 ${cursorClassName}`}>
          |
        </span>
      )}
    </span>
  );
};

export default TypewriterText;

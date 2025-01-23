import Card from "@/types/question-answer";
import React, { useEffect, useRef, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useSpring, animated } from "@react-spring/web";

interface FlashCardProps {
  flashCard: Card;
  handleNextCard: () => void;
}

const FlashCard: React.FC<FlashCardProps> = ({ flashCard, handleNextCard }) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [positionX, setPositionX] = useState<number>(0);
  const [positionY, setPositionY] = useState<number>(0);
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);

  const [resetKey, setResetKey] = useState<number>(0);

  useEffect(() => {
    setResetKey((prev) => prev + 1);
  }, [flashCard]);

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStartX = e.touches[0].clientX;
    const touchStartY = e.touches[0].clientY;
    startX.current = touchStartX;
    startY.current = touchStartY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startX.current !== null && startX.current !== null) {
      const currentX = e.touches[0].clientX - (startX.current || 0);
      const currentY = e.touches[0].clientY - (startY.current || 0);
      setPositionX(currentX);
      setPositionY(currentY);
    }
  };

  const handleTouchEnd = () => {
    console.log(positionX);
    if (positionX < -100) {
      console.log(positionX);
      setShowAnswer(false);
      handleNextCard();
      startX.current = 0;
      startY.current = 0;
      setPositionX(0);
      setPositionY(0);
    }
  };

  const animationProps = useSpring({
    opacity: 1,
    transform: `translate(-50%, -50%) scale(1)`,
    from: {
      opacity: 0,
      transform: "translate(-50%, -50%) scale(0.3)",
    },
    key: resetKey,
    config: { tension: 250, friction: 25 },
  });

  return (
    <animated.div
      className={`w-[92vw] h-[75vh] bg-gray-800 rounded-3xl shadow-sm shadow-slate-500 p-4 flex flex-col gap-2 divide-y-1 text-sm text-balance relative`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        ...animationProps,
        left: `${positionX}px`,
        top: `${positionY}px`,
        transform: `rotate(${positionX * 0.07}deg)`,
      }}
    >
      <div
        className="flex flex-col gap-2"
        style={{
          transition: "0.05s",
          height: `${showAnswer ? "150px" : "90%"}`,
        }}
      >
        <div className="flex items-center gap-2 text-neutral-300">
          <div className="w-4 h-4 bg-green-500"></div>
          <p>2-nd repeat</p>
        </div>
        <div>
          <p className="text-neutral-300">Next.js</p>
        </div>
        <div>
          <p className="text-xl">{flashCard.question}</p>
        </div>
      </div>
      <div
        className={`h-1/2 bg-gray-800 flex flex-col gap-2 text-xl ${
          !showAnswer ? "opacity-60" : ""
        }`}
      >
        {!showAnswer && (
          <div className="flex items-center justify-center">
            <button
              className="w-52 h-32 bg-gray-600 rounded-xl"
              onClick={handleShowAnswer}
            >
              <VisibilityIcon sx={{ fontSize: "48px" }} />
            </button>
          </div>
        )}

        {showAnswer && <p>{flashCard.answer}</p>}
      </div>
    </animated.div>
  );
};

export default FlashCard;

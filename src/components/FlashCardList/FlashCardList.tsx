import Card from "@/types/question-answer";
import FlashCard from "@/components/FlashCard/FlashCard";
import React, { useState } from "react";

interface FlashCardListProps {
  flashCardList: Card[];
}

const FlashCardList: React.FC<FlashCardListProps> = ({ flashCardList }) => {
  const [index, setIndex] = useState(0);

  const handleIncrement = () => {
    setIndex((prev) => prev + 1);
  };

  return (
    <>
      <FlashCard
        flashCard={flashCardList[index]}
        handleNextCard={handleIncrement}
        key={flashCardList[index].answer}
      />
    </>
  );
};

export default FlashCardList;

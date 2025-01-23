import FlashCardList from "@/components/FlashCardList/FlashCardList";
import "./App.css";
import { questions } from "@/static/questions";

function App() {
  return (
    <>
      <div className="bg-gray-900 w-[100vw] h-[100vh] text-white flex items-center justify-center">
        <FlashCardList flashCardList={questions} />
      </div>
    </>
  );
}

export default App;

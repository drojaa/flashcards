
// Compoennt for Homepage 
import { useSelector, useDispatch} from "react-redux";
import { RootState } from "../redux/store";
import { removeFlashcard } from "../redux/flashcardsSlice";
import "./Home.css"


export default function Home() {
  const flashcards = useSelector((state: RootState) => state.flashcards);
  // accessing the global state flashcards 
  const dispatch = useDispatch();

  function handleClick(flashcard: { question: string; response: string}) {
    // Dispatch the removeFlashcard action with the selected flashcard
    console.log(flashcard.question)
    console.log(flashcard.response)
    dispatch(removeFlashcard(flashcard))
  }
    return (
      <>
        <h1 id="home-h1">Home Page </h1>
        <ul id="home-ul">
            {flashcards.map((flashcard, index) => (        
                <li id="home-li" key={index}>
                    <button onClick={() => handleClick(flashcard)} id="close-home">X</button>
                    <p id="home-p">Q: {flashcard.question}</p>
                    <p id="home-p">A: {flashcard.response}</p> 
                </li>
            ))}
        </ul>

      </>
    );
  }
  

// Compoennt for Homepage 
import { useSelector, useDispatch} from "react-redux";
import { RootState } from "../redux/store";
import { removeFlashcard, visibleFlashcard } from "../redux/flashcardsSlice";
import "./Home.css"


export default function Home() {
  const flashcards = useSelector((state: RootState) => state.flashcards);
  // accessing the global state flashcards 
  const dispatch = useDispatch();


  function handleClick(flashcard: { question: string; response: string; id: string; visible: boolean}) {
    // Dispatch the removeFlashcard action with the selected flashcard
    dispatch(removeFlashcard(flashcard))
  }

  function handleShowHide(flashcard: { question: string; response: string; id: string; visible: boolean}){
    // Dispatch the visibleFlashcard action with selected flashcard
    dispatch(visibleFlashcard(flashcard))
  }

  
  return (
    <>
      <h1 id="home-h1">All Flashcards</h1>
      <ul id="home-ul">
        {flashcards.map((flashcard, index) => (
          <li id="home-li" key={index}>
            <button onClick={() => handleClick(flashcard)} id="close-home">X</button>
            
            <p id="home-p">
              {flashcard.visible ? (
                <>
                  <span style={{ fontWeight: "bold" , display: "block" }}>Answer: </span> {flashcard.response}
                </>
              ) : (
                <>
                  <span style={{ fontWeight: "bold", display: "block" }}>Question: </span> {flashcard.question}
                </>
              )}
            </p>
            
            <button onClick={() => handleShowHide(flashcard)} id="show">{flashcard.visible ? "Hide" : "Show"}</button>
          </li>
        ))}
      </ul>
    </>
  )
}

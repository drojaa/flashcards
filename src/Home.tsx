
// Compoennt for Homepage 
import { useSelector} from "react-redux";
import { RootState } from "../redux/store";
import "./Home.css"


export default function Home() {
  const flashcards = useSelector((state: RootState) => state.flashcards);
  // accessing the global state flashcards 
    return (
      <>
        <h1 id="home-h1">Home Page </h1>
        <ul id="home-ul">
            {flashcards.map((flashcard, index) => (
                <li id="home-li" key={index}>
                    <p id="home-p">Q: {flashcard.question}</p>
                    <p id="home-p">A: {flashcard.response}</p> 
                </li>

            ))}
        </ul>

      </>
    );
  }
  
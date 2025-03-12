
// Compoennt for Homepage 
import { useState } from "react";
import "./Home.css"

export default function Home() {
    const [flashcards, setFlashcards] = useState([  { question: "What is the capital of France?", answer: "Paris" }, { question: "Who wrote 'To Kill a Mockingbird'?", answer: "Harper Lee" },
        { question: "What does HTML standfor?", answer: "HyperText Markup Language" },
    ]);

    return (
      <>
        <h1 id="home-h1">Home Page </h1>
        <ul id="home-ul">
            {flashcards.map((flashcard, index) => (
                <li id="home-li" key={index}>
                    <p id="home-p">Q: {flashcard.question}</p>
                </li>

            ))}
        </ul>

      </>
    );
  }
  
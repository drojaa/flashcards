// Create a Flashcard Component

import "./CreateFlashcard.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFlashcard } from "../redux/flashcardsSlice";


export default function CreateFlashcard() {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
    const dispatch = useDispatch();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault(); // Prevent browser from reloading

        dispatch(addFlashcard({ question, response})); 
        //sends action to Redux store to modify state 
        

        setQuestion("")
        setResponse("")
    }

  return (
    <>
     <div id="main-contain">
     <a id="close" href="/">X</a>
     <h1>Create Flashcard</h1>
    
      <form method="post" onSubmit={handleSubmit}> 
      <div id="add-contain">

      <div id="question-contain">
      <label id="create-flash">Question:</label>
     
      {/* by default value is binded to ''
          until the user makes changes
          in the textarea input  */}
      <textarea id="textarea" name="question" rows={4} cols={40} value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Write on the front of the card here"/>
      </div>


      <div id="response-contain">
      <label id="create-flash">Response:</label>

        {/* by default value is binded to ''
          until the user makes changes
          in the textarea input  */}
      <textarea id="textarea" name="response" rows={4} cols={40} value={response} onChange={(e) => setResponse(e.target.value)} placeholder="Write on the back of the card here" />
      </div>

      <button type="submit" id="save">save</button>
      
     

      </div>

      </form>
      </div>
    </>
  );
  
}

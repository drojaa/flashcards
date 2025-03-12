// Create a Flashcard Component

import "./CreateFlashcard.css";
import { useState } from "react";




export default function CreateFlashcard() {

    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');

    // Creates a New Flashcard Object 
    const newFlashcard = {
        question: question,
        response: response,
    }


    function handleSubmit(e) {
        e.preventDefault(); // Prevent browser from reloading
    
        const form = e.target;
        const formData = new FormData(form);
    
        const formJson = Object.fromEntries(formData.entries());


        setQuestion(formJson.question.toString());
        setResponse(formJson.response.toString());   
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
      <textarea id="textarea" name="question" rows={4} cols={40} placeholder="Write on the front of the card here"/>
      </div>

      <div id="response-contain">
      <label id="create-flash">Response:</label>
      <textarea id="textarea" name="response" rows={4} cols={40} placeholder="Write on the back of the card here" />
      </div>

      <button type="submit" id="save">save</button>
      
     

      </div>

      </form>
      </div>
    </>
  );
  
}

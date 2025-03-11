// Create a Flashcard Component

import "./CreateFlashcard.css";

export default function CreateFlashcard() {
  return (
    <>
     <div id="main-contain">
      <h1>Create Flashcard</h1>
      <div id="add-contain">
      <div id="question-contain">
      <label id="create-flash">Question:</label>
      <textarea id="textarea" name="question" rows={4} cols={40} />
      </div>

    <div id="response-contain">
    <label id="create-flash">Response:</label>
    <textarea id="textarea" name="response" rows={4} cols={40} />
    </div>

    <button id="save">save</button>
    </div>
    </div>
    </>
  );
}

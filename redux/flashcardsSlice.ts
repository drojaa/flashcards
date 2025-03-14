
// redux/flashcardSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Type for a flashcard 

interface Flashcard {
    question: string;
    response: string;
}

// Creates an array, flashcards, with values of Flashcard ^^
interface FlashcardState {
    flashcards: Flashcard[];
}

const initialState: FlashcardState = {
    flashcards: [ {
        question: "Who wrote 'To Kill a Mockingbird'?",
        response: "Harper Lee"
      }], 
}

const flashcardSlice = createSlice({
    name: "flashcards",
    initialState,
    reducers: {
      // Action to add a flashcard
      addFlashcard: (state, action: PayloadAction<Flashcard>) => {
        state.flashcards.push(action.payload);
      },
      // Action to remove a flashcard
      removeFlashcard: (state, action: PayloadAction<Flashcard>) => {
        state.flashcards = state.flashcards.filter(
          (flashcard) =>
            flashcard.question !== action.payload.question &&
            flashcard.response !== action.payload.response
        );
      },
    },
  });
  


console.log("reached in store")

export const { addFlashcard, removeFlashcard } = flashcardSlice.actions;
export default flashcardSlice.reducer;
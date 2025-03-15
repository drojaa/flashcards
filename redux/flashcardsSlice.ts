
// redux/flashcardSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

// Type for a flashcard 

interface Flashcard {
    id: string,
    question: string;
    response: string;
    visible: boolean;
}

// Creates an array, flashcards, with values of Flashcard ^^
interface FlashcardState {
    flashcards: Flashcard[];
}

const initialState: FlashcardState = {
  flashcards: [ {
      id: "1",
      question: "Who wrote 'To Kill a Mockingbird'?",
      response: "Harper Lee",
      visible: false
    }], 
}


const flashcardSlice = createSlice({
    name: "flashcards",
    initialState,
    reducers: {
      // Action to add a flashcard
      addFlashcard: (state, action: PayloadAction<{ question: string ; response: string}>) => {
        const newFlashcard = {
          id: uuidv4(),
          question: action.payload.question,
          response: action.payload.response,
          visible: false,
        }
        state.flashcards.push(newFlashcard);
      },
      // Action to remove a flashcard
      removeFlashcard: (state, action: PayloadAction<Flashcard>) => {
        state.flashcards = state.flashcards.filter(
          (flashcard) =>
            flashcard.id !== action.payload.id 
        );
      },
      visibleFlashcard: (state, action: PayloadAction<Flashcard>) => {
        const flashcard = state.flashcards.find(flashcard => 
          flashcard.id === action.payload.id);
          if( flashcard ){
            flashcard.visible = !flashcard.visible
          }
      },
    },
  });
  


console.log("reached in store")

export const { addFlashcard, removeFlashcard, visibleFlashcard } = flashcardSlice.actions;
export default flashcardSlice.reducer;
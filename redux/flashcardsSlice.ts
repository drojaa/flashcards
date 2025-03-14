
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
        addFlashcard: (state, action: PayloadAction<Flashcard>) => {
            state.flashcards.push(action.payload)
        }
    }
})

console.log("reached in store")

export const { addFlashcard } = flashcardSlice.actions;
export default flashcardSlice.reducer;
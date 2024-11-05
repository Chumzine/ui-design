import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cards: [
      {
        title: "Active Users",
        value: "27/80"
      },
      {
        title: "Questions Answered",
        value: "3,298"
      },
      {
        title: "Av. Session Length",
        value: "2m 34s"
      },
      {
        title: "Starting Knowledge",
        value: "64%",
        graph: "../../assets/icons/Graph.svg"
      },
      {
        title: "Current Knowledge",
        value: "86%",
        graph: "../../assets/icons/Graph.svg"
      },
      {
        title: "Knowledge Gain",
        value: "+34%",
        graph: "../../assets/icons/Graph.svg"
      }
    ],
  }

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {},
})

export default cardsSlice.reducer;
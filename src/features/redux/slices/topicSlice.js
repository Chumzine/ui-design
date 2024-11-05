import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    topics: [
      {
        imgSrc: "/assets/images/Food.png",
        title: "Food Safety",
        barColour: "",
        value: "74%",
        rating: "Correct",
        type: "weakest"
      },
      {
        imgSrc: "/assets/images/Basics.png",
        title: "Compliance Basics Procedures",
        barColour: "",
        value: "52%",
        rating: "Correct",
        type: "weakest"
      },
      {
        imgSrc: "/assets/images/Networking.png",
        title: "Company Networking",
        barColour: "",
        value: "36%",
        rating: "Correct",
        type: "weakest"
      },
      {
        imgSrc: "/assets/images/Covid.png",
        title: "Covid Protocols",
        barColour: "",
        value: "95%",
        rating: "Correct",
        type: "strongest"
      },
      {
        imgSrc: "/assets/images/Cyber.png",
        title: "Cyber Security Basics",
        barColour: "",
        value: "92%",
        rating: "Correct",
        type: "strongest"
      },
      {
        imgSrc: "/assets/images/Socials.png",
        title: "Social Media Policies",
        barColour: "",
        value: "89%",
        rating: "Correct",
        type: "strongest"
      }
    ],
  }

export const topicSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {},
})

export default topicSlice.reducer;
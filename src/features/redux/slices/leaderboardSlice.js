import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [
      {
        imgSrc: "/assets/images/Thomas.png",
        leader: "James Thomas",
        score: "637 Points - 98% Correct",
        rank: 1,
        arrow: "/assets/icons/Leaderboard-ArrowUp.svg",
        type: "user"
      },
      {
        imgSrc: "/assets/images/Thisal.png",
        leader: "Thisal Mathiyazhagan",
        score: "637 Points - 89% Correct",
        rank: 2,
        arrow: "/assets/icons/Leaderboard-ArrowDown.svg",
        type: "user"
      },
      {
        imgSrc: "/assets/images/Helen.png",
        leader: "Helen Chuang",
        score: "637 Points - 88% Correct",
        rank: 3,
        arrow: "/assets/icons/Leaderboard-ArrowUp.svg",
        type: "user"
      },
      {
        imgSrc: "/assets/images/Lura.png",
        leader: "Lura Silverman",
        score: "637 Points",
        rank: 4,
        arrow: "/assets/icons/Leaderboard-ArrowUp.svg",
        type: "user"
      },
      {
        leader: "Houston Facility",
        score: "52 Points / User - 97% Correct",
        rank: 1,
        arrow: "/assets/icons/Leaderboard-ArrowUp.svg",
        type: "groups"
      },
      {
        leader: "Test Group",
        score: "52 Points / User - 95% Correct",
        rank: 2,
        arrow: "/assets/icons/Leaderboard-ArrowDown.svg",
        type: "groups"
      },
      {
        leader: "Sales Leadership",
        score: "52 Points / User -  87% Correct",
        rank: 3,
        arrow: "/assets/icons/Leaderboard-ArrowUp.svg",
        type: "groups"
      },
      {
        leader: "Northeast Region",
        score: "52 Points / User",
        rank: 4,
        arrow: "/assets/icons/Leaderboard-ArrowUp.svg",
        type: "groups"
      }
    ],
  }

export const leaderboardSlice = createSlice({
    name: 'leaderboard',
    initialState,
    reducers: {},
})

export default leaderboardSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data: [
        {
            title: 'Reports',
            icon: "/assets/icons/Vector.svg",
            className: 'navText'
        },
        {
            title: 'Library',
            icon: "/assets/icons/Quiz.svg",
            className: 'navText'
        },
        {
            title: 'People',
            icon: "/assets/icons/People.svg",
            className: 'navText'
        },
        {
            title: 'Activities',
            icon: "/assets/icons/Assignments.svg",
            className: 'navText'
        }
    ]
}

export const statNavSlice = createSlice({
    name: 'statNav',
    initialState,
    reducers: {},
})

export default statNavSlice.reducer;
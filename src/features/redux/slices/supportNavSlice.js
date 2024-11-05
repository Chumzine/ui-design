import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
        {
            title: 'Get Started',
            icon: "/assets/icons/Bulb.svg",
            className: 'navText'
        },
        {
            title: 'Settings',
            icon: "/assets/icons/Settings.svg",
            className: 'navText'
        },
    ]
}

export const supportNavSlice = createSlice({
    name: 'supportNav',
    initialState,
    reducers: {},
})

export default supportNavSlice.reducer;
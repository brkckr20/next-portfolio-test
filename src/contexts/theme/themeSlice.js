import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: "dark"
    },
    reducers: {
        changeTheme: (state) => {
            state.theme = state.theme === "dark" ? "light" : "dark";
        }
    }
})

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
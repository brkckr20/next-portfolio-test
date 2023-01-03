import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: (typeof window !== "undefined") && localStorage.getItem("theme") || "light"
    },
    reducers: {
        changeTheme: (state, action) => {
            if (typeof window !== "undefined") {
                localStorage.setItem("theme", action.payload);
                state.theme = action.payload
            }
        }
    }
})

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { githubApi } from '@/redux/services/githubApi';

export interface UserState {
    searchUser: string;
    items: any;
    page: number;
}
const initialState: UserState = {
    searchUser: 'john-smilga',
    items: [],
    page: 1,
};

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setSearchUser: function (state, action: PayloadAction<string>) {
            state.searchUser = action.payload;
            state.items = [];
            state.page = 1;
        },
        setItems: function (state, action) {
            state.items = action.payload;
        },
        setPage: function (state, action) {
            state.page += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            githubApi.endpoints.getGithubUserByFollowers.matchFulfilled,
            (state, action) => {
                state.items = [...state.items, ...action.payload];
            }
        );
    },
});

export const { setSearchUser, setItems, setPage } = userSlice.actions;

export default userSlice.reducer;

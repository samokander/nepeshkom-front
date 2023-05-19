import ContentConacts from "@/@types/ContentContacts";
import ContentRentTermsResp from "@/@types/ContentRentTermsResp";
import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

export type AppState = {
	rentTerms: undefined | ContentRentTermsResp;
	contacts: ContentConacts | undefined;
};

const initialState: AppState = {
	rentTerms: undefined,
	contacts: undefined,
};

const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setRentTerms: (state, action: PayloadAction<ContentRentTermsResp>) => {
			state.rentTerms = action.payload;
		},
		setContacts: (state, action: PayloadAction<ContentConacts>) => {
			state.contacts = action.payload;
		},
	},
});

export const { setRentTerms, setContacts } = appSlice.actions;

export const store = configureStore({
	reducer: appSlice.reducer,
});

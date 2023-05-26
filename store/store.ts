import AutoCard from "@/@types/AutoCard";
import ContentConacts from "@/@types/ContentContacts";
import ContentRentTermsResp from "@/@types/ContentRentTermsResp";
import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

export type AppState = {
	rentTerms: undefined | ContentRentTermsResp;
	contacts: ContentConacts | undefined;
	autos: AutoCard[];
	loading: boolean;
};

const initialState: AppState = {
	rentTerms: undefined,
	contacts: undefined,
	autos: [],
	loading: true,
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
		setAutos: (state, action: PayloadAction<AutoCard[]>) => {
			state.autos = action.payload;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
	},
});

export const { setRentTerms, setContacts, setAutos, setLoading } = appSlice.actions;

export const store = configureStore({
	reducer: appSlice.reducer,
});

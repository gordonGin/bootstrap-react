import { createSlice } from '@reduxjs/toolkit';

const galleryReducer = createSlice({
	name: 'gallery',
	initialState: {
		gallery: [],
		isLoading: false,
		error: null,
	},
	reducers: {
		setGallerySuccess: (state, action) => {
			state.gallery = action.payload;
			state.isLoading = false;
			state.error = null;
		},
		setGalleryFailure: (state, action) => {
			// eslint-disable-next-line no-debugger
			debugger;
			state.isLoading = false;
			state.error = action.payload.message;
		},
		setGalleryLoader: (state, action) => {
			state.isLoading = action.payload;
		},
	},
});

export default galleryReducer.reducer;

export const { setGallerySuccess, setGalleryFailure, setGalleryLoader } =
	galleryReducer.actions;

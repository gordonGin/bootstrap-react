import Pictures from '../../../api/pictures';
import {
	setGalleryFailure,
	setGalleryLoader,
	setGallerySuccess,
} from './reducer';

const fetchGalleryByKeyword = (searchTerm) => {
	return async (dispatch) => {
		dispatch(setGalleryLoader(true));
		// eslint-disable-next-line no-debugger
		try {
			const gallery = await Pictures.getPictures(searchTerm);
			if (gallery) {
				// eslint-disable-next-line no-debugger
				debugger;
				dispatch(setGallerySuccess(gallery.items));
			}
		} catch (error) {
			// eslint-disable-next-line no-debugger
			debugger;
			dispatch(setGalleryFailure(error));
		}
	};
};

export default { fetchGalleryByKeyword };

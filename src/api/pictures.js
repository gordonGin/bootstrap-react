import axiosInstance from '../config/api';

const Pictures = {
	getPictures: (searchTerm) => {
		// eslint-disable-next-line no-debugger
		return axiosInstance
			.get(`/search/titles/results/`, {
				params: { terms: searchTerm, format: 'json' },
			})
			.then((response) => response.data)
			.catch((error) => {
				throw Error(error);
			});
	},
};

export default Pictures;

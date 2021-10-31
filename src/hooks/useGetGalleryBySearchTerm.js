import { useEffect, useState } from 'react';
import { galleryOperations, gallerySelectors } from '../store/duck/gallery';
import { useDispatch, useSelector } from 'react-redux';

const useGetGalleryBySearchTerm = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const dispatch = useDispatch();
	const { gallery, isLoading, error } = useSelector(
		gallerySelectors.getGallery
	);

	useEffect(() => {
		searchTerm.length > 3 &&
			dispatch(galleryOperations.fetchGalleryByKeyword(searchTerm));
	}, [searchTerm]);

	return {
		error,
		gallery,
		setSearchTerm,
		isLoading,
	};
};

export default useGetGalleryBySearchTerm;

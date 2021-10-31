import { useGetGalleryBySearchTerm } from '../hooks';
import { Gallery, SearchBar } from './index';
import React from 'react';

const Portfolio = () => {
	const {
		setSearchTerm,
		isLoading = false,
		gallery,
	} = useGetGalleryBySearchTerm();
	return (
		<>
			<div>
				<SearchBar setSearchTerm={setSearchTerm} />
				<div>
					{isLoading && <div>Wait a moment, we are loading your results</div>}
				</div>
				<Gallery galleryItems={gallery} />
			</div>
		</>
	);
};

export default React.memo(Portfolio);

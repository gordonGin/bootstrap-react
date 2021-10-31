import PropTypes from 'prop-types';
import { debounce } from '../helpers/utils';
import React from 'react';

const SearchBar = ({ setSearchTerm = () => {} }) => {
	return (
		<div className="gallery__search-wrapper">
			<div className="gallery__input-wrapper">
				<label className="gallery__label">Search term</label>
				<input
					onChange={debounce(({ target }) => {
						target.value.length > 3 && setSearchTerm(target.value);
					})}
					placeholder="search me"
					className="gallery__input"
				/>
			</div>
		</div>
	);
};

SearchBar.propTypes = {
	setSearchTerm: PropTypes.func.isRequired,
};

export default React.memo(SearchBar);

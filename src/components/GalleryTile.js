import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Picture from '../resources/images/paris.jpeg';

function GalleryTile({ lineItem: { title, lccn } }) {
	return (
		<NavLink to={`portfolio/${lccn}`}>
			<div className="gallery__tile">
				<div>
					<img className="image" src={Picture} alt="Paris - eiffel tower" />
					<div className="title">{title}</div>
				</div>
			</div>
		</NavLink>
	);
}

GalleryTile.propTypes = {
	lineItem: PropTypes.shape({
		title: PropTypes.string,
		lccn: PropTypes.string,
	}),
};
export default GalleryTile;

import PropTypes from 'prop-types';
import { GalleryTile } from './index';

const Gallery = ({ galleryItems = [] }) => {
	return (
		<div className="gallery__container">
			{galleryItems.map((item) => {
				return <GalleryTile key={item.id} lineItem={item} />;
			})}
		</div>
	);
};

Gallery.propTypes = {
	galleryItems: PropTypes.arrayOf(
		PropTypes.shape({
			city: PropTypes.array,
			end_year: PropTypes.number,
		})
	),
};
export default Gallery;

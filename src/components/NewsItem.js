import PropTypes from 'prop-types';

const NewsItem = ({ match }) => {
	// eslint-disable-next-line no-debugger
	debugger;
	const { params } = match;
	const { id } = params;

	return <div>{id}</div>;
};

NewsItem.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({ id: PropTypes.string }).isRequired,
	}),
};
export default NewsItem;

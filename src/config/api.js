import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://chroniclingamerica.loc.gov/',
	headers: { Accept: 'application / json' },
});

export default instance;

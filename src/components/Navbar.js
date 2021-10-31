import Logo from '../logo.svg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar__container">
			<a href="/" className="navbar__image">
				<img src={Logo} alt="logo" />
			</a>
			<div className="navbar__links">
				<NavLink to="/portfolio" className="navbar__link-items">
					portfolio
				</NavLink>
				<NavLink to="/resources" className="navbar__link-items">
					resources
				</NavLink>
				<NavLink to="/about" className="navbar__link-items">
					about
				</NavLink>
			</div>
			<div className="navbar__contact">contacto</div>
		</nav>
	);
};

export default Navbar;

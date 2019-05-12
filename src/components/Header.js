import React from 'react';

const Header = props => {
	const { branding } = props;
	return (
		<header>
			<h1>{branding}</h1>
		</header>
	);
};

Header.defaultProps = {
	branding: 'Default heading'
};

export default Header;

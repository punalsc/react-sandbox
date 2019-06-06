import React from 'react';

const Button = props => {
	const { onClick, buttonClass, spanClass, iconClass } = props;
	return (
		<button type='button' onClick={onClick} className={buttonClass}>
			<span className={spanClass}>
				<i className={iconClass}>close</i>
			</span>
		</button>
	);
};

export default Button;

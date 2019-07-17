import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
	const {
		onChange,
		placeholder,
		id,
		type,
		inputClass,
		value,
		name,
		labelClass,
		labelTitle,
		errorStyle,
		errorMsgStyle,
		errorMsg
	} = props;
	return (
		<>
			<input
				placeholder={placeholder}
				id={id}
				type={type}
				className={inputClass}
				value={value}
				name={name}
				onChange={onChange}
				style={errorStyle}
			/>
			<label htmlFor={id} className={labelClass}>
				{labelTitle}
			</label>
			{errorMsg && <span style={errorMsgStyle}>{errorMsg}</span>}
		</>
	);
};

Input.defaultProps = {
	errorStyle: null,
	errorMsg: null,
	errorMsgStyle: null
};

Input.propTypes = {
	placeholder: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	inputClass: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	labelClass: PropTypes.string.isRequired,
	labelTitle: PropTypes.string.isRequired,
	errorMsg: PropTypes.string
};

export default Input;

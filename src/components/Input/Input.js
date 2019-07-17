import React from 'react';

const Input = props => {
	const {
		onChange,
		placeholder,
		id,
		type,
		inputClass,
		value,
		name,
		labelClass, labelTitle
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
			/>
			<label htmlFor={id} className={labelClass}>
				{labelTitle}
			</label>
		</>
	);
};

export default Input;

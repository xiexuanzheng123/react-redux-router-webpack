import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
    id,
    name,
    value,
    placehoder,
    onChange,
    disabled
}) => {
    return (
        <input 
            id={id}
            name={name}
            value={value}
            placeholder={placehoder}
            onChange={onChange}
            disabled={disabled}
        />
    );
}
TextInput.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    placehoder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    disabled: PropTypes.bool
}
export default TextInput;
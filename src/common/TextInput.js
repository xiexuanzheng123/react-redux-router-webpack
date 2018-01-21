import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
    id,
    name,
    value,
    placehoder,
    onChange,
    readonly,
    disabled
}) => {
    return (
        <input 
            id={id}
            name={name}
            value={value}
            placeholder={placehoder}
            onChange={onChange}
            readOnly={readonly}
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
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool
}
export default TextInput;
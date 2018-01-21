import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]).isRequired,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool
};
const RadioInput = (
    {
        id,
        name,
        label,
        defaultValue,
        value,
        onChange,
        disabled,
        readOnly
    }
) => {
    return (
        <div>
            <input 
                type='radio'
                id={id}
                name={name}
                value={value}
                checked={defaultValue === value ? true : false}
                onChange={onChange}
                disabled={disabled}
                readOnly={readOnly}
            />
            {
                id ? <label htmlFor={id}>{label}</label> : <label>{label}</label>
            }
        </div>
        
    );
}
RadioInput.propTypes = propTypes;

export default RadioInput

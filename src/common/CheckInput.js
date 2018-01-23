import React from 'react';
import PropTypes from 'prop-types';

const CheckInput = (
    {
        id,
        name,
        label,
        value,
        checked,
        onChange,
        readOnly,
        disabled
    }
) => {
    return (
        <div>
            <input
                type='checkbox'
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                readOnly={readOnly}
                disabled={disabled}
            />
            {
                id ? <label htmlFor={id}>{label}</label> : <label>{label}</label>
            }
        </div>
    )
};

CheckInput.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]).isRequired,
    checked: PropTypes.bool.isRequired,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool
};

export default CheckInput;
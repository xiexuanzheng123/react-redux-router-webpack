import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = (
    {
        id,
        name,
        value,
        options,
        onChange,
        readOnly,
        disabled
    }
) => {
    return (
        <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            readOnly={readOnly}
            disabled={disabled}
        >
            {/* {
                defaultOption ? <option value={defaultOption.value}>{defaultOption.value}</option> : null
            } */}
            {
                options.map((option) => {
                    return (
                        <option 
                            key={option.key}
                            value={option.value}
                        >
                            {option.value}
                        </option>
                    )
                })
            }
        </select>
    );
}
SelectInput.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
    options: PropTypes.arrayOf(PropTypes.object),
    readonly: PropTypes.bool,
    disabled: PropTypes.bool
}
export default SelectInput;
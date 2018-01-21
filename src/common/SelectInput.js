import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = (
    {
        id,
        name,
        value,
        defaultOption,
        options,
        onChange,
        readonly,
        diabled
    }
) => {
    return (
        <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            readonly={readonly}
            disabled={disabled}
        >
            {
                defaultOption ? <option value={defaultOption.value}>{defaultOption.value}</option> : null
            }
            {
                options.filter(option => defaultOption.value !== option.value).map((option) => {
                    return (
                        <option 
                            key={option.value}
                            value={option.value}
                        >
                            {option.text}
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
    defaultOption: PropTypes.object,
    options: PropTypes.arrayOf(PropTypes.object),
    readonly: PropTypes.bool,
    disabled: PropTypes.bool
}
export default SelectInput;
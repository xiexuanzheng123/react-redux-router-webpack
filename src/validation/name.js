import _ from 'lodash';

function validateName (name) {
    return name.length && _.isString(name);
}

export default validateName;
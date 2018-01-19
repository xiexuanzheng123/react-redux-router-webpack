import * as types from './actionTypes';

export function modifyAge(age) {
    return {
        type: types.MODIFY_TYPES,
        age
    }
}
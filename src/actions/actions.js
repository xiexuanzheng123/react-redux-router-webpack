import * as types from './actionTypes';

export function modifyAge(student) {
    return {
        type: types.ADD_STUDENTS,
        student
    }
}
import * as types from './actionTypes';

export function addStudent (student) {
    return {
        type: types.ADD_STUDENTS,
        student
    }
}
export function editName (name) {
    return {
        type: types.EDIT_NAME,
        name
    }
}
export function editAge (age) {
    return {
        type: types.EDIT_AGE,
        age
    }
}
export function editSex (sex) {
    return {
        type: types.EDIT_SEX,
        sex
    }
}
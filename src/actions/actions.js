import * as types from './actionTypes';

/**add student */
export function addStudent (student) {
    return {
        type: types.ADD_STUDENT,
        student
    }
}
/**edit name */
export function editName (name) {
    return {
        type: types.EDIT_NAME,
        name
    }
}
/**edit age */
export function editAge (age) {
    return {
        type: types.EDIT_AGE,
        age
    }
}
/**edit sex */
export function editSex (sex) {
    return {
        type: types.EDIT_SEX,
        sex
    }
}
/**select student */
export function selectStudent (studentId) {
    return {
        type: types.SELECT_STUDENT,
        studentId
    }
}
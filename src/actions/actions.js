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
        type: types.UPDATE_STUDENT_CHECKED,
        studentId
    }
}
/**delete student */
export function deleteStudents (studentIds) {
    return {
        type: types.DELETE_STUDENT,
        studentIds
    }
}
/**search student */
export function searchStudent (keyWord) {
    return {
        type: types.SEARCH_STUDENT,
        keyWord
    }
}
/**edit the keyword */
export function editKeyWord (value) {
    return {
        type: types.EDIT_KEYWORD,
        value
    }
}
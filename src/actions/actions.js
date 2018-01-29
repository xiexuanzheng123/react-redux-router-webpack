import * as types from './actionTypes';

/**add student */
export function addStudent (student) {
    return {
        type: types.ADD_STUDENT,
        student
    }
}
export function initList() {
    return {
        type: types.INIT_LIST
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
// export function selectAndgetSelectedStudent (studentId, students) {
//     return (dispatch) => {
//         dispatch(selectStudent (studentId));
//         dispatch(getSelectedStudent(studentId, students));
//     }
// }
/**select student */
export function selectStudent (studentId) {
    return {
        type: types.GET_SELECTED_STUDENT_CHECKED,
        studentId
    }
}
export function deleteAndHideConfirm (studentIds) {
    return (dispatch) => { 
        dispatch(deleteStudents(studentIds)); 
        dispatch(hideConfirm()); 
        dispatch(initList());
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
/**check hobby */
export function checkHobby (hobby) {
    return {
        type: types.CHECK_HOBBY,
        hobby
    }
}
export function editProfile (text) {
    return {
        type: types.EDIT_PROFILE,
        text
    }
}
/**Edit major */
export function editMajor (major) {
    return {
        type: types.EDIT_MAJOR,
        major
    }
}
/** init the add page */
export function initStudent () {
    return {
        type: types.INIT_STUDENT
    }
}
/** show alert */
export function showAlert (
    {
        message,
        okText,
        okEvent
    }
) {
    return {
        type: types.SHOW_ALERT,
        message,
        okText,
        okEvent
    }
}
export function hideAlert () {
    return {
       type: types.HIDE_ALERT
    }
}
export function showConfirm (
    {
        message,
        okText,
        cancelText,
        confirmEvent,
        cancelEvent
    }
) {
    return {
        type: types.SHOW_CONFIRM,
        message,
        okText,
        cancelText,
        confirmEvent,
        cancelEvent
    }
}
export function hideConfirm () {
    return {
        type: types.HIDE_CONFIRM
    }
}
export function getSelectedStudent (studentId, students) {
    return {
        type: types.GET_SELECTED_STUDENT,
        studentId,
        students
    }
}
export function updateStudent (id, student) {
    return {
        type: types.UPDATE_STUDENT,
        id,
        student 
    }
}
import student from '../models/student';
import * as types from '../actions/actionTypes';
import { fromJS } from 'immutable';

const studentReducer = (state=student, action) => {
    switch (action.type) {
        case types.EDIT_NAME:
            return fromJS(state).setIn(['name'], action.name).toJS();
        case types.EDIT_AGE:
            return fromJS(state).setIn(['age'], action.age).toJS();
        case types.EDIT_SEX:
            return fromJS(state).setIn(['sex'], action.sex).toJS();
        case types.EDIT_MAJOR:
            return fromJS(state).setIn(['major'], action.major).toJS();
        case types.CHECK_HOBBY:
            return fromJS(state).setIn(['hobbies'], _.xor(state.hobbies, [action.hobby])).toJS();
        case types.EDIT_PROFILE:
            return fromJS(state).setIn(['profile'], action.text).toJS();
        case types.INIT_STUDENT:
            return initStudent(state, action);
        case types.UPDATE_STUDENT:
            return updateStudent(state, action);
        default:    
            return state;
    }
}
function initStudent (state, action) {
    return fromJS(state).setIn(['name'], '')
                        .setIn(['age'], 15)
                        .setIn(['sex'], '')
                        .setIn(['major'], '')
                        .setIn(['hobbies'], [])
                        .setIn(['profile'], '')
                        .toJS();
}
function updateStudent (state, action) {
    return _.filter(action.students, (student) => student.id === action.studentId)[0];
}
export default studentReducer;
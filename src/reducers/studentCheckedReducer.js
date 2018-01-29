import studentChecked from '../models/studentChecked';
import * as types from '../actions/actionTypes';
import { fromJS, List } from 'immutable';
import _ from 'lodash';

const studentCheckedReducer = (state=studentChecked, action) => {
    switch (action.type) {
        case types.UPDATE_STUDENT_CHECKED:
            return updateStudentChecked (state, action.studentId);
        case types.INIT_LIST:
            return studentChecked;
        default:
            return state;
    }
}
function updateStudentChecked (state, studentId) {
    return _.xor(state, [studentId]);
}
export default studentCheckedReducer;
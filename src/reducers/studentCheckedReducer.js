import studentChecked from '../models/studentChecked';
import * as types from '../actions/actionTypes';
import { fromJS, List } from 'immutable';
import _ from 'lodash';

const studentCheckedReducer = (state=studentChecked, action) => {
    switch (action.type) {
        case types.GET_SELECTED_STUDENT_CHECKED:
            return getSelectedStudentChecked (state, action.studentId);
        case types.INIT_LIST:
            return studentChecked;
        default:
            return state;
    }
}
function getSelectedStudentChecked (state, studentId) {
    return _.xor(state, [studentId]);
}
export default studentCheckedReducer;
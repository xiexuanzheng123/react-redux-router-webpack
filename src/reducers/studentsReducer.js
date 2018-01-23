import students from '../models/students';
import * as types from '../actions/actionTypes';
import { List } from 'immutable'; 
import _ from 'lodash';

const studentsReducer = (state = students, action) => {
    switch (action.type) {
        case types.ADD_STUDENT:
            return List(state).push(action.student).toJS();
        case types.DELETE_STUDENT:
            return deleteStudents (state, action.studentIds);
        default:
            return state;
    }
};
function deleteStudents (state, action) {
    return _.filter(state, s => !_.includes(action.studentIds, s.id));
}
export default studentsReducer;
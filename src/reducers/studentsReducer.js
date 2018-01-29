import students from '../models/students';
import * as types from '../actions/actionTypes';
import { formJS, List } from 'immutable'; 
import _ from 'lodash';

const studentsReducer = (state = students, action) => {
    switch (action.type) {
        case types.ADD_STUDENT:
            return addStudent(state, action);
        case types.DELETE_STUDENT:
            return deleteStudents (state, action);
        case types.SEARCH_STUDENT:
            return searchStudent (state, action);
        case types.UPDATE_STUDENT:
            return updateStudent(state, action);
        default:
            return state;
    }
};
function addStudent (state, action) {
    const lastIndex = state.length - 1;
    const studentToAdd = _.assign({id: String(lastIndex + 1)}, action.student);
    return _.union(state, [studentToAdd]);
}
function deleteStudents (state, action) {
    return _.filter(state, s => !_.includes(action.studentIds, s.id));
}
function searchStudent (state, action) {
    if (action.keyWord === '') {
        return state=students;
    }
    return _.filter(state, s => s.name === action.keyWord);
}
function updateStudent (state, action) {
    const { id } = action;
    return List(state).delete(Number(id)).insert(Number(id), action.student).toJS();
}
export default studentsReducer;
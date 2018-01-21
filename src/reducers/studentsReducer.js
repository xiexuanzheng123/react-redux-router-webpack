import students from '../models/students';
import * as types from '../actions/actionTypes';

const studentsReducer = (state = students, action) => {
    switch (action.type) {
        case types.ADD_STUDENTS:
            return state.push(action.student);
        default:
            return state;
    }
}
export default studentsReducer;
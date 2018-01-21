import students from '../models/students';
import * as types from '../actions/actionTypes';
import { List } from 'immutable'; 

const studentsReducer = (state = students, action) => {
    switch (action.type) {
        case types.ADD_STUDENT:
            return List(state).push(action.student).toJS();
        default:
            return state;
    }
}
export default studentsReducer;
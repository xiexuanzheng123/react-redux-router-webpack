import studentChecked from '../models/studentChecked';
import * as types from '../actions/actionTypes';
import { fromJS, List } from 'immutable';

const studentCheckedReducer = (state=studentChecked, action) => {
    switch (action.type) {
        case types.SELECT_STUDENT:
            return List(state).push(action.studentId).toJS();
        default:
            return state;
    }
}
export default studentCheckedReducer;
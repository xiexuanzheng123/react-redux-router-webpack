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
        case types.CHECK_HOBBY:
            return fromJS(state).setIn(['hobbies'], _.xor(state.hobbies, [action.hobby])).toJS();
        default:    
            return state;
    }
}
export default studentReducer;
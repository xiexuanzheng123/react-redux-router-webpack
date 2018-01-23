import keyWord from '../models/keyWord';
import * as types from '../actions/actionTypes';

const keyWordReducer = (state=keyWord, action) => {
    switch (action.type) {
        case types.EDIT_KEYWORD:
            return action.value;
        default:
            return state;
    }
}
export default keyWordReducer;
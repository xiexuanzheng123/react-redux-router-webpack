import uConfirm from '../models/uConfirm';
import * as types from '../actions/actionTypes';
import { fromJS } from 'immutable';

const uConfirmReducer = (state=uConfirm, action) => {
    switch (action.type) {
        case types.SHOW_CONFIRM:
            return showConfirm(state, action);
        case types.HIDE_CONFIRM:
            return hideConfirm(state, action);
        default:
            return state;
    }
}
function showConfirm (state, action) {
    const { message, okText, cancelText } = action;
    return fromJS(state).setIn(['isShow'], true)
                        .setIn(['message'], message)
                        .setIn(['confirmEvent'], action.confirmEvent)
                        .setIn(['cancelEvent'], action.cancelEvent)
                        .setIn(['okText'], okText)
                        .setIn(['cancelText'], cancelText)
                        .toJS();
}
function hideConfirm (state, action) {
    return fromJS(state).setIn(['isShow'], false).toJS();
}
export default uConfirmReducer;
import uAlert from '../models/uAlert';
import * as types from '../actions/actionTypes';
import _ from 'lodash';
import { fromJS } from 'immutable';

const alertReducer = (state=uAlert, action) => {
    switch (action.type) {
        case types.SHOW_ALERT:
            return showAlert(state, action);
        case types.HIDE_ALERT:
            return fromJS(state).setIn(['isShow'], false).toJS();
        default:
            return state;
    }
}

function showAlert (state, action) {
    const { message, okText, okEvent } = action;
    
    return fromJS(state).setIn(['isShow'], true)
                        .setIn(['message'], message)
                        .setIn(['okText'], okText)
                        .setIn(['okEvent'], okEvent)
                        .toJS();
}
export default alertReducer;
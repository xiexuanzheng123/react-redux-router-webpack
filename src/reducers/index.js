import { combineReducers } from 'redux';
import students from './studentsReducer';
import student from './studentReducer';

const rootReducer = combineReducers({
    students,
    student
});
export default rootReducer;
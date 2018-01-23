import { combineReducers } from 'redux';
import students from './studentsReducer';
import student from './studentReducer';
import studentChecked from './studentCheckedReducer';

const rootReducer = combineReducers({
    students,
    student,
    studentChecked
});
export default rootReducer;
import { combineReducers } from 'redux';
import students from './studentsReducer';
import student from './studentReducer';
import studentChecked from './studentCheckedReducer';
import keyWord from './keyWordReducer';

const rootReducer = combineReducers({
    students,
    student,
    studentChecked,
    keyWord
});
export default rootReducer;
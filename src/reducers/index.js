import { combineReducers } from 'redux';
import students from './studentsReducer';
import student from './studentReducer';
import studentChecked from './studentCheckedReducer';
import keyWord from './keyWordReducer';
import uHobby from './uHobbyReducer';

const rootReducer = combineReducers({
    students,
    student,
    studentChecked,
    keyWord,
    uHobby
});
export default rootReducer;
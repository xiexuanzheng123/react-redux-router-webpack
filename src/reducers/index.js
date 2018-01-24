import { combineReducers } from 'redux';
import students from './studentsReducer';
import student from './studentReducer';
import studentChecked from './studentCheckedReducer';
import keyWord from './keyWordReducer';
import uHobby from './uHobbyReducer';
import uSex from './uSexes';

const rootReducer = combineReducers({
    students,
    student,
    studentChecked,
    keyWord,
    uHobby,
    uSex
});
export default rootReducer;
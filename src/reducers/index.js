import { combineReducers } from 'redux';
import students from './studentsReducer';
import student from './studentReducer';
import studentChecked from './studentCheckedReducer';
import keyWord from './keyWordReducer';
import uHobby from './uHobbyReducer';
import uSexes from './uSexesReducer';
import uAges from './uAgesReducer';

const rootReducer = combineReducers({
    students,
    student,
    studentChecked,
    keyWord,
    uHobby,
    uSexes,
    uAges
});
export default rootReducer;
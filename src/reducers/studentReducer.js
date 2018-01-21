import students from '../models/students';

const studentReducer = (state = students, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
export default studentReducer;
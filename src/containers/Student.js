import React from 'react';
import StudentContent from '../components/StudentContent';
import Buttons from '../components/Buttons';

class Student extends React.Component {
    render () {
        return (
            <div>
                <StudentContent />
                <Buttons />
            </div>
        ) 
    }
}
export default Student;
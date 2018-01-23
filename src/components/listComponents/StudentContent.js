import React from 'react';
import _ from 'lodash';
import { CheckInput } from '../../common';
import { listContentStyles as Styles } from '../../styles/list';

class StudentContent extends React.Component {
    render () {
        const { 
            student, 
            studentChecked, 
            handleSelectStudent
        } = this.props;
        const { 
            id, 
            name, 
            age, 
            sex,
            major,
            hobby,
            profile
         } = student;
        return (
            <tr>
                <td>
                    <CheckInput 
                        id={`${id}`}
                        name={`student`}
                        value={id}
                        checked={_.indexOf(studentChecked, id) !== -1  ? true : false}
                        onChange={(e) => handleSelectStudent(e) }
                    />
                </td>
                <td>{name}</td>
                <td>{age}</td>
                <td>{sex}</td>
                <td>{major}</td>
                <td>{hobby.join(', ')}</td>
                <td>{profile}</td>
            </tr>
        )
    }
}
export default StudentContent;
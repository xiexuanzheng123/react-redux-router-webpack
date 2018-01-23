import React from 'react';
import { CheckInput } from '../../common';
import { listContentStyles as Styles } from '../../styles/list';

class StudentMessage extends React.Component {
    render () {
        const { student } = this.props;
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
                        id={`student_${id}`}
                        name={`student`}
                        value={id}
                        checked={`false`}
                        
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
export default StudentMessage;
import React from 'react';

class StudentMessage extends React.Component {
    render () {
        const { student } = this.props;
        const { name, age, sex } = student;
        return (
            <tr>
                <td>{name}</td>
                <td>{age}</td>
                <td>{sex}</td>
            </tr>
        )
    }
}
export default StudentMessage;
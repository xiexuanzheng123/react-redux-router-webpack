import React from 'react';

class Student extends React.Component {
    render () {
        return (
            <div>
                <h3>添加新生:</h3>
                <label>Name：<input /></label><br />
                <label>Age：<input /></label><br />
                <label>Sex：<input /></label>
            </div>
        ) 
    }
}
export default Student;
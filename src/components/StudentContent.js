import React from 'react';

class StudentContent extends React.Component {
    render () {
        const { handleEditName } = this.props;
        return (
            <div>
                <h3>添加新生:</h3>
                <label>Name：<input onChange={(e) => handleEditName(e)} /></label><br />
                <label>Age：<input /></label><br />
                <label>Sex：<input /></label>
            </div>
        )
    }
}
export default StudentContent;
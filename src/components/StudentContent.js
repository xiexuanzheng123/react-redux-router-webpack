import React from 'react';

class StudentContent extends React.Component {
    
    setOptions(mix, max, options=[]) {
        for (let i=mix; i<=max; i++) {
            options.push(i);
        }
        return options;
    }
    render () {
        const { 
            handleEditName, 
            handleEditAge, 
            handleEditSex 
        } = this.props;
        let options = this.setOptions(15, 25);
        return (
            <div>
                <h3>添加新生:</h3>
                <label>Name：
                    <input onChange={(e) => handleEditName(e)} />
                </label><br />
                <label>Age：
                    <select  name='age' onChange={(e) => handleEditAge(e)}>
                        {
                            options.map((option, key) => {
                                return (
                                    <option key={key} value={option}>{option}</option>
                                )
                            })
                        }
                    </select>
                </label><br />
                <label>Sex：
                    <input type='radio' name='sex' value='male' onChange={handleEditSex}/>male
                    <input type='radio' name='sex' value='female' onChange={handleEditSex}/>female
                </label>
            </div>
        )
    }
}
export default StudentContent;
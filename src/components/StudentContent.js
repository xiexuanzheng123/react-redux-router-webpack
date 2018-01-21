import React from 'react';
import { TextInput, SelectInput } from '../common';

class StudentContent extends React.Component {    
    setOptions(mix, max, options=[]) {
        for (let i=mix; i<=max; i++) {
            options.push({'key': i, 'value': i});
        }
        return options;
    }
    render() {
        const { 
            handleEditName, 
            handleEditAge, 
            handleEditSex,
            student 
        } = this.props;
        let options = this.setOptions(15, 25);
        const { name, age, sex } = student;
        return (
            <div>
                <h3>添加新生:</h3>
                <label>Name：
                    <TextInput
                        id={'student_name'}
                        name={'student_name'}
                        value={name}
                        placehoder={'Please input name...'}
                        onChange={(e) => handleEditName(e)} 
                    />
                </label><br />
                <label>Age：
                    <SelectInput 
                        id={`age_select`}
                        name={`age_select`}
                        value={age}
                        onChange={handleEditAge}
                        options={options}
                    />
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
import React from 'react';
import { 
    TextInput, 
    SelectInput, 
    RadioInput, 
    CheckInput 
} from '../../common';
import { messageStyles as Styles } from '../../styles/student';

class StudentMessage extends React.Component {
    componentDidMount() {
        const { initStudent } = this.props;
        initStudent();
    }    
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
            handleEditMajor,
            handleCheckHobby,
            handleEditProfile,
            student,
            uHobby,
            uSex 
        } = this.props;
        let options = this.setOptions(15, 25);
        const { 
            name, 
            age, 
            sex, 
            major, 
            hobbies, 
            profile 
        } = student;
        let uName = name || '';
        let uAge = age || 15;
        let uMajor = major || '';
        return (
            <div className={Styles.message}>
                <h3 className={Styles.title}>添 加 新 生</h3>
                <div className={Styles.items  + ' ' + Styles.clearfix}>
                    <label className={Styles.label}>名 字<span>*</span></label>
                    <div className={Styles.value}>
                        <TextInput
                            id={'student_name'}
                            name={'student_name'}
                            value={uName}
                            placehoder={'请输入姓名...'}
                            onChange={(e) => handleEditName(e)} 
                        />
                    </div>
                </div>
                <div className={Styles.items + ' ' + Styles.clearfix}>
                    <label className={Styles.label}>年 龄<span>*</span></label>
                    <div className={Styles.value}>
                        <SelectInput 
                            id={`age_select`}
                            name={`age_select`}
                            value={uAge}
                            onChange={handleEditAge}
                            options={options}
                        />
                    </div>
                </div>
                <div className={Styles.items + ' ' + Styles.clearfix}>
                    <label className={Styles.label}>性 别<span>*</span></label>
                    <div className={Styles.value}>
                        {
                            uSex.map((sexOption, key) => {
                                return (
                                    <RadioInput 
                                        id={`sex_radio_${sexOption}`}
                                        name={`sex_radio_${sexOption}`}
                                        label={sexOption}
                                        value={sexOption}
                                        key={key}
                                        defaultValue={sex}
                                        onChange={handleEditSex}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                <div className={Styles.items + ' ' + Styles.clearfix}>
                    <label className={Styles.label}>专 业</label>
                    <div className={Styles.value}>
                        <TextInput
                            id={'student_major'}
                            name={'student_major'}
                            value={uMajor}
                            placehoder={'请输入专业...'}
                            onChange={handleEditMajor} 
                        />
                    </div>    
                </div>
                <div className={Styles.items + ' ' + Styles.clearfix}>
                    <label className={Styles.label}>兴趣爱好</label>
                    <div className={Styles.value}>
                        {
                            _.map(uHobby, (hobby, key) => {
                                return (
                                    <CheckInput
                                        key={key}
                                        id={`hobby_${hobby}`}
                                        name={`hobby`}
                                        value={hobby}
                                        label={hobby}
                                        checked={_.includes(hobbies, hobby) ? true : false}
                                        onChange={handleCheckHobby} 
                                    />
                                );
                            })
                        }
                    </div>    
                </div>
                <div className={Styles.items + ' ' + Styles.clearfix}>
                    <label className={Styles.label}>个人简介</label>
                    <div className={Styles.value}>
                        <textarea 
                            className={Styles.textArea}
                            value={profile}  
                            onChange={handleEditProfile}  
                        >
                        </textarea>
                    </div>    
                </div>
            </div>
        )
    }
}
export default StudentMessage;
import React from 'react';
import { 
    TextInput, 
    SelectInput, 
    RadioInput, 
    CheckInput 
} from '../../common';
import { messageStyles as Styles } from '../../styles/student';

class StudentMessage extends React.Component {
    
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
            uSexes,
            uAges 
        } = this.props;
        let { 
            name, 
            age, 
            sex, 
            major, 
            hobbies, 
            profile,
            id 
        } = student;
        let uName = name || '';
        let uAge = age || 15;
        let uMajor = major || '';
        const isUpdate = id ? true : false;
        return (
            <div className={Styles.message}>
                <h3 className={Styles.title}>添 加 新 生</h3>
                <div className={Styles.items  + ' ' + Styles.clearfix}>
                    <label className={Styles.label}>名 字<span className={Styles.star}>*</span></label>
                    <div className={Styles.value + ' ' + Styles.dimmed}>
                        <TextInput
                            id={'student_name'}
                            name={'student_name'}
                            value={uName}
                            readOnly={isUpdate}
                            placehoder={'请输入姓名...'}
                            onChange={(e) => handleEditName(e)} 
                        />
                    </div>
                </div>
                <div className={Styles.items + ' ' + Styles.clearfix}>
                    <label className={Styles.label}>年 龄<span className={Styles.star}>*</span></label>
                    <div className={Styles.value + ' ' + Styles.dimmed}>
                        <SelectInput 
                            id={`age_select`}
                            name={`age_select`}
                            value={uAge}
                            disabled={isUpdate}
                            onChange={handleEditAge}
                            options={uAges}
                        />
                    </div>
                </div>
                <div className={Styles.items + ' ' + Styles.clearfix}>
                    <label className={Styles.label}>性 别<span className={Styles.star}>*</span></label>
                    <div className={Styles.value}>
                        {
                            uSexes.map((sexOption, key) => {
                                return (
                                    <RadioInput 
                                        id={`sex_radio_${sexOption}`}
                                        name={`sex_radio_${sexOption}`}
                                        label={sexOption}
                                        value={sexOption}
                                        key={key}
                                        disabled={isUpdate}
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
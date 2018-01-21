import React from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import {
    StudentList,
    Student
} from './src/containers';

export default (
    <div>
        <Switch>
            <Route exac path="/" component={StudentList} />
            <Route exac path="/StudentList" component={StudentList} />
            <Route exac path='/Student' component={Student} />
        </Switch>
    </div>
)
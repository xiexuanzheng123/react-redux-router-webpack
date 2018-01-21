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
            <Route exact path="/" component={StudentList} />
            <Route exact path="/StudentList" component={StudentList} />
            <Route exact path="/addStudent" component={Student} />
        </Switch>
    </div>
)
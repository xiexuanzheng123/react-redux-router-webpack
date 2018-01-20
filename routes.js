import React from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import {
    ContainerA,
    ContainerB
} from './src/containers';

export default (
    <div>
        <Switch>
            <Route exac path="/" component={ContainerA} />
            <Route exac path="/ContainerA" component={ContainerA} />
            <Route exac path='/ContainerB' component={ContainerB} />
        </Switch>
    </div>
)
// let idcType = 1;
// if (typeof idcType === 'string' && idcType.toString().toLowerCase() === 'kr') {
//     console.log('123');
// }
// import axios from 'axios';
// import jsonp from 'jsonp';
// import url from 'url';

// // let testUrl = `http://localhost:8080/api/languages`;
// // console.log(url.parse(testUrl, true));

// function getIssueTypes() {
//     return axios({
//         method: 'GET',
//         url: `http://localhost:8080/api/languages`
//     }).then((res) => {
//         return res.data;
//     })
// }
// let datas;
// getIssueTypes().then(function (data) {
//     console.log(data, 'da');
//     datas = data;
// });
// console.log(datas, 'datas');
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import routes from './routes';
import { Provider } from 'react-redux';
import storeConfig from './store';

let store = storeConfig();
render (
    <Provider store={store}>
        <BrowserRouter children={routes} />
    </Provider>,

    document.getElementById('app')
)
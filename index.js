// let idcType = 1;
// if (typeof idcType === 'string' && idcType.toString().toLowerCase() === 'kr') {
//     console.log('123');
// }
import axios from 'axios';
import jsonp from 'jsonp';
import url from 'url';

// let testUrl = `http://localhost:8080/api/languages`;
// console.log(url.parse(testUrl, true));

function getIssueTypes() {
    return axios({
        method: 'GET',
        url: `http://localhost:8080/api/languages`
    }).then((res) => {
        return res.data;
    })
}
let datas;
getIssueTypes().then(function (data) {
    console.log(data, 'da');
    datas = data;
});
console.log(datas, 'datas');
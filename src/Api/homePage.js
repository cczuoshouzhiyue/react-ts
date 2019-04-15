import axios from 'axios'
const targetUrl = 'https://cnodejs.org/api/v1'
export const getTopics =  (params) => {
    const url = targetUrl + '/topics ';
    axios.get(url, params)
};
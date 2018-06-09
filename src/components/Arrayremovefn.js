import axios from 'axios';

const arrayremovefn = (data) => {
    return axios.delete('http://localhost:3031/api/stuff/'+data).then(res => {
        return res.data
    }).catch(error => {
        console.log(error)
    })
}

export default arrayremovefn
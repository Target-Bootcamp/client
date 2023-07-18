import axios from "axios"
axios.defaults.baseURL="http://localhost:7777"

// const  api = {
//     post : async (url, data)=>{
//         apicalls("post")
//     }
// }

async function apicalls(method, url, setUsestate, body) {

    //     let result = await axios({
    //         method,
    //         url,
    //         headers:{
    //             "Authorization":"Bearer "+ localStorage.token
    //         }
    //     })

    //     return result.data
    // console.log(error);
    //     throw error

    if (method === "get") {
        axios
            .get(url)
            .then(res => setUsestate(res.data))
            .catch(error => console.log(error))
    }
    else if (method === "post") {
        axios
            .post(url, body)
            .then(res => setUsestate(res.data))
            .catch(error => console.log(error))
    }
    else if (method === "put") {
        axios
            .put(url, body)
            .then(res => setUsestate(res.data))
            .catch(error => console.log(error))
    }
    else {
        axios
            .delete(url)
            .then(res => setUsestate(res.data))
            .catch(error => console.log(error))
    }
}



const get = (url, setUsetate) => {
    apicalls("get", url, setUsetate)
}

const post = (url, setUsetate, body) => {
    apicalls("post", url, setUsetate, body)
}

const put = (url, setUsetate, body) => {
    apicalls("put", url, setUsetate, body)
}

const Delete = (url, setUsetate) => {
    apicalls("delete", url, setUsetate)
}
export default ({ get, post, put, Delete })


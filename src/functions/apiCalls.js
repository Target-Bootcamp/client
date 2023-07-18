import axios from "axios"



function apicalls(metod, url, setUsestate, body) {

    if (metod === "get") {
        axios
            .get(url)
            .then(res => setUsestate(res.data))
            .catch(error => console.log(error))
    }
    else if (metod === "post") {
        axios
            .post(url, body)
            .then(res => setUsestate(res.data))
            .catch(error => console.log(error))
    }
    else if (metod === "put") {
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


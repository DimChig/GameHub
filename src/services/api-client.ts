import axios from "axios"

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "ec0f8799f0054da29906506b3d123fff"
    }
})
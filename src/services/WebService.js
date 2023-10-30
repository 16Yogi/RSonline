import axios from "axios"
class WebService
{
    getApiCall(URL){
        return axios.get(URL)
    }
}

export default new WebService()


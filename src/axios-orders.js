import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-builder-399b8-default-rtdb.europe-west1.firebasedatabase.app/'
})

export default instance
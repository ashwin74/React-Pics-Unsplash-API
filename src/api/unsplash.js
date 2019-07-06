 import axios from 'axios'

 export default axios.create({
     baseURL: 'https://api.unsplash.com',
     headers: {
        Authorization: 'Client-ID 17015efe2a8e6b2e1dab38d8757c307a262caf9098f74b56159c3326c63a8ebd'
    }
 });
import axios from 'axios'

const APi = axios.create({
      baseURL:'https://api-prdo-henri-http.onrender.com'
})
export default APi
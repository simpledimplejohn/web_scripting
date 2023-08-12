// how to I import axios?
const axiosRequest = require('axios')

axiosRequest
    .get('https://www.boredapi.com/api/activity/')
    .then(response => {
        console.log(`You could do: ${response.data.activity}`)
    })
    .catch(error => {
        console.error(`ERROR! ${error}`)
    })
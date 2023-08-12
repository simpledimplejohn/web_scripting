// how to I import axios?
const axiosRequest = require('axios')

const boredurl = 'https://www.boredapi.com/api/activity/'
const httpurl= 'https://httpstat.us/404'

// write with a try catch
async function getBored() {
    try{
        let response = await axiosRequest.get(boredurl)
        console.log("potato",response.data);
    } catch (error) {
        console.error("error potato ", error.data)
    }
}
getBored()



/*
// how to write with async await
async function getActivity() {
    let response = await axiosRequest.get(httpurl);
    console.log(`Do this: ${response.data.activity}`);
}
console.log('potato')

getActivity()
*/
/*
// how to write using .then and .catch (original)
axiosRequest
    .get(httpurl)
    .then(response => {
        console.log(`You could do: ${response.data.activity}`)
    })
    .catch(error => {
        console.error(`ERROR! ${error}`)
    })

*/
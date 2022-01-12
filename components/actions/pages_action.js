import axios from "../utils/axios";
import url from "../utils/urls";


/* 
SOME THINGS I LEARNT DURING THIS CODE DEBUG
    Never return a variable in the then statement
*/

export default {
    home_page_requests: async () => {
        let response = null

        await axios.get(url.OTHERS.portfolio)
            .then(data => {
                response = data.data
            }).catch(err => {
                console.log(err)
                // alert("An error occurred when fetching portfolio.")
            })

        return response
    },
    testimonial_page_requests: async () => {
        let response = null

        await axios.get(url.OTHERS.testimonial)
            .then(data => {
                response = data.data
            }).catch(err => {
                console.log(err)
            })

        return response
    },
    messsage_me: async (data) => {
        await axios.post(url.OTHERS.messageMe, data)
            .then(data => {
                console.log(data)
                alert("Message sent successfully, I would get beck you shortly.")
            })
            .catch(err => {
                console.log(err)
            })
    }
}

import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API
const API = {
    getRandomUser: function() {
        return axios.get("https://randomuser.me/api/")
    },
    getMultipleUsers: function(count) {
        return axios.get(`https://randomuser.me/api/?results=${count}`);
    }
}

export default API
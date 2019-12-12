import axios from "axios";

export default axios.create({
    baseURL: "http://nicno.restful.training/api/ping-pong",

    params: { "key": "8555d3c0368a3f6dee8ef485fb7455394de00dba" },

    header: { "Accept" : "application/json"}

});


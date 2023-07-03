import axios from "axios";

const locationBase = window.location.port
    ? window.location.protocol + "//" + window.location.hostname + ":" + window.location.port
    : window.location.protocol + "//" + window.location.hostname;
let BASE_URL = "";
if(window.location.hostname === "localhost") {
    BASE_URL = "http://localhost:8080";
} else {
    //BASE_URL = `${locationBase}`;
};

const CONTEXT_PATH = `${BASE_URL}`;


export async function load(url, data) {
    try {
        const res = await axios({
            method: "post",
            url: `${CONTEXT_PATH}${url}`,
            data: {data}
        });
        return res.data;
    } catch (e) {
        throw e;
        //alert("load error!!");
        //return;
    }
}
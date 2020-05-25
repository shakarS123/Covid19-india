import axios from "axios";

export const covidlist=()=> dispatch =>{
    axios
    .get("https://api.covid19india.org/data.json")
    .then(res=>{
        console.log(res)
        dispatch({
            type:"COVID_LIST",
            payload:res.data
        })
    })
};



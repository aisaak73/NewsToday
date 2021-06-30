/*import getEnvVars from "../../enviroment";

const {apiurl} = getEnvVars();*/

//Realizar peticion a la API
const fetchNews = async () =>{
    //const endpoint = {apiurl};

    const response = await fetch("https://free-news.p.rapidapi.com/v1/search?q=Apple%20%iPhone&lang=en", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "5c1488f81emsh962d45ecca43faap15ef9djsn04811aa0029e",
            "x-rapidapi-host": "free-news.p.rapidapi.com"
        }
    });

    const data = await response.json();
    console.log(data);
    return data;
}


export default fetchNews;
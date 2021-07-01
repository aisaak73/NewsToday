import getEnvVars from "../../enviroment";

const {apiUrl, headers} = getEnvVars();

//Realizar peticion a la API
const fetchNews = async () =>{

    try {
        const response = await fetch(apiUrl, { headers: headers });
        const data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
        console.log("FML");
    }
}

/*const searchArticle = async (search)=>{
    const response = await fetch(`https://free-news.p.rapidapi.com/v1/search?q=${search}&lang=en`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "5c1488f81emsh962d45ecca43faap15ef9djsn04811aa0029e",
            "x-rapidapi-host": "free-news.p.rapidapi.com"
        }
    });
}*/


export default fetchNews;
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

const searchArticle = async (search)=>{
   try {
        const response = await fetch(apiUrl, {headers: headers});
        const data = await response.json();
        return data;

    }    
    catch (error) {
     console.log("FML X2");
          
     }
}


export default fetchNews;
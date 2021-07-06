import getEnvVars from "../../enviroment";

const {apiUrl, headers} = getEnvVars();

//Realizar peticion a la API
const fetchNews = async () =>{
    
    try {
        const response = await fetch(`${apiUrl}search?q=today&lang=en&page=2&page_size=20`, { headers: headers });
        const data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
        console.log("FML");
    }
}

export const searchArticle = async (search, language) =>{
   try {
        const response = await fetch(`${apiUrl}search?q=${search}&lang=en&page_size=20`, {headers: headers});
        const data = await response.json();
        return data;

    }    
    catch (error) {
     console.log("FML X2");
          
    }
}


export default fetchNews;
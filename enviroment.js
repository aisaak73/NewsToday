import Constant from "expo-constants";

const ENV = {
    dev:{
        apiURL: ("https://free-news.p.rapidapi.com/v1/search?q=Apple%20%iPhone&lang=en", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "5c1488f81emsh962d45ecca43faap15ef9djsn04811aa0029e",
                "x-rapidapi-host": "free-news.p.rapidapi.com"
            }
        }),
    },

    production:{
        apiURL: ("https://free-news.p.rapidapi.com/v1/search?q=Apple%20%iPhone&lang=en", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "5c1488f81emsh962d45ecca43faap15ef9djsn04811aa0029e",
                "x-rapidapi-host": "free-news.p.rapidapi.com"
            }
        }),
    }
};

const getEnvVars = (env = Constant.manifest.releaseChannel) =>{
    if(__DEV__) return ENV.dev;
    else if(env == "staging") return ENV.dev;
    else if(env == "production" || env == "default") return ENV.dev;
    
};

export default getEnvVars;
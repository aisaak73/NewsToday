/*
"https://free-news.p.rapidapi.com/v1/search?q=Elon%20Musk&lang=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "5c1488f81emsh962d45ecca43faap15ef9djsn04811aa0029e",
		"x-rapidapi-host": "free-news.p.rapidapi.com"
	}
}
*/


const dev = {
	url:"https://free-news.p.rapidapi.com/v1/search?q=Elon%20Musk&lang=en",
	headers: {
		"x-rapidapi-key": "5c1488f81emsh962d45ecca43faap15ef9djsn04811aa0029e",
		"x-rapidapi-host": "free-news.p.rapidapi.com"
	}
}

async function getData(){
	const {url, headers} = dev;
	const response = await fetch(dev.url, {headers: dev.headers});
	const data = await response.json();

	console.log(data);
}

getData();
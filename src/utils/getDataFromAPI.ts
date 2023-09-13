const BASE_URL = "https://youtube-v31.p.rapidapi.com/";
const YT_API_BASE = "https://yt-api.p.rapidapi.com/";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.PUBLIC_RAPID_API_KEY,
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function getDataFromYTV3(url: string) {
  const response = await fetch(`${BASE_URL}${url}`, options);
  const result = response.json();

  return result;
}

const ytAPIOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.PUBLIC_RAPID_API_KEY,
    'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
  },
};

async function getDataFromYTAPI(url: string) {
  const response = await fetch(`${YT_API_BASE}${url}`, ytAPIOptions);
  const result = response.json();

  return result;
}

export { getDataFromYTV3, getDataFromYTAPI };
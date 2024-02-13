import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const value = atob('YmM3ZTU2MTk4MW1zaDc0NzE0MDhiMzVjY2NkYnAxZTNkZWZqc24wYjc4NGE0ZjdjODM=')

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.value,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

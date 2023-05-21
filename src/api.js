import axios from "axios";

const searchImages =async (term) => {
  const response =  await axios.get('https://api.unsplash.com/search/photos' , {
      headers: {
          Authorization: 'Client-ID 1THfhCMQkNbvqeOR7fQZFJvLx2E1peuLPSvspjkQe0c'
      },
      params: {
        query: term,
      }
  });

  return response
};

export default searchImages;
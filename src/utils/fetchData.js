// export const exerciseOptions = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
//       'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
//     },
//   };

  export const fetchData = async (url, options) => {
    try {

      const baseUrl = 'https://repsworkouttracker.adaptable.app'; // Adjust the base URL for your local server
      const res = await fetch(url, options);
      const data = await res.json();
      console.log("This is fetched data ===>", data)
      return data;
    } catch(err) {
      console.log("Fetching error", err)
    }
};

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      // 'X-RapidAPI-Key': '2a1b027512msh78ad975f80c8e0ap17fc03jsnfc411b905bd0',
    },
  };
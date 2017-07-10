const APP_ID = '289802fc';
const APP_KEY = 'c4980c24ac487e6f71cb773f010aa03d';
const ENDPOINT = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free`;

export const fetchRecipe = id =>
  fetch(ENDPOINT)
  .then(res => res.json());



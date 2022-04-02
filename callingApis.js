import got from 'got';
import fetch from 'node-fetch';

// =============================================
// const handleReceivedResponse = (response) => {
//   const data = JSON.parse(response.body);
//   console.log(data);
// };

// got('https://api.github.com/repos/sinatra/sinatra').then(
//   handleReceivedResponse
// );

// =============================================
/** FETCH .THEN ASYNCHRONOUS */

// fetch('https://api.github.com/repos/sinatra/sinatra')
//   .then((res) => res.json()) // Returns a promise
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//   .then((res) => res.json()) // Returns a promise?
//   .then((data) => console.log(data))
//   .catch(() => console.error('No pokemon with this name.'));

// =============================================
/** ASYNC AWAIT ASYNCHRONOUS
 *
 * TODO:
 *  - async ensures that the function returns a promise
 *  - await makes JavaScript wait until that promise settles and returns its result.
 *  - await literally suspends the function execution until the promise settles, and then resumes it with the promise result.
 */
const fetchPokemon = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fetchPokemon(1);

// =====================================
// Exercise Promises and .then
// =====================================
const fetchRepoInfo = (repoName, callback) => {
  got(`https://api.github.com/repos/${repoName}`).then((res) => {
    const response = JSON.parse(res.body);
    callback(response);
  });
};

fetchRepoInfo('sinatra/sinatra', (callback) => {
  console.log(callback);
});

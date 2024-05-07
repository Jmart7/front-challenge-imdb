export const getMoviesFromSearch = async (search: string) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.apiKey}&s=${search}`);
    const data = await response.json();
    return data.Search;
}

export const getMoviesFromID = async (id: string) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.apiKey}&i=${id}`);
    const data = await response.json();
    return data;
}
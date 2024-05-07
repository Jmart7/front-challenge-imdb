export const getMoviesFromSearch = async (search: string) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=698425cc&s=${search}`);
    const data = await response.json();
    // console.log(data)
    // console.log(data.Search)
    return data.Search;
}

export const getMoviesFromID = async (id: string) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=698425cc&i=${id}`);
    const data = await response.json();
    return data;
}
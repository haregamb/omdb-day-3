const omdbURL="https://www.omdbapi.com/?";

export const getMovieDetailsById= async(movieID)=>{
    const fetchData= await fetch(
        `${omdbURL}apikey=c5ef35d9&i=${movieID}`
    );
    const jsonData = await fetchData.json();
    return jsonData;

}

export const getMoviesBySearchTerm= async(searchTerm)=>{
    const res= await fetch(
        `${omdbURL}apikey=c5ef35d9&s=${searchTerm}`
    );
    const movies=await res.json();
    return movies;
}

function favFun(id) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjNjNzViMWI2ZDUwMGNkMjgzZjU0MmU4ZTFlZDJkYSIsInN1YiI6IjVjMDNiNDQwMGUwYTI2NDg2YTA2ZjYwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pj6auQlw-VfPG6PenA6MbujH_SQk3Xr3LmD6H9WdH04'
        }
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
        .then(response => response.json())
        .then(movie => {
            const favDiv = document.getElementById("favDiv");
            const h1 = document.createElement("h1");
            h1.textContent = movie.title;
            const img = document.createElement("img");
            img.src = `http://image.tmdb.org/t/p/w500/${movie.poster_path}`;
            img.id = "singleMoviePic";

            const movieContainer = document.createElement("div");
            movieContainer.className = "movie-container";
            movieContainer.appendChild(h1);
            movieContainer.appendChild(img);

            favDiv.appendChild(movieContainer);
        })
        .catch(err => console.error(err));
}

const storageVal = localStorage.getItem("movies");
console.log(storageVal);
if (storageVal !== null) {
    moviesWishList = JSON.parse(storageVal);
    for (let i = 0; i < moviesWishList.length; i++) {
        favFun(moviesWishList[i].id);
    }
}

    const removeFavBtn = document.getElementById("removeFavBtn")
    removeFavBtn.addEventListener("click",(e)=>{
        localStorage.removeItem("movies",JSON.stringify(moviesWishList))
        location.reload()
    })

function singelMovieFun(id) {
    const singleMovieDiv = document.getElementById("singleMovieDiv")
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
            console.log(movie);
            singleMovieDiv.innerHTML = ""
            singleMovieDiv.innerHTML +=`
            <h1>${movie.title}</h1>
            <img src="http://image.tmdb.org/t/p/w500${movie.poster_path}" id="singleMoviePic">
            <span id="heartIcon" onclick="saveIdHeartButton(${movie.id})">
                <img src="../assets/img/img/favorite ICON.png">
                </span>
            `
        })
        .catch(err => console.error(err));
    }
    let moviesWishList = []
    const storageVal = localStorage.getItem("movies")
    console.log(storageVal);
    if (storageVal!== null) {
        moviesWishList = JSON.parse(storageVal)
    }
    console.log(moviesWishList);
            function saveIdHeartButton(id) {
                let movieObj = {id}
                const movieHeartInPage = moviesWishList.find(movie => movie.id===id);
                if(movieHeartInPage){
                  console.log("exist");
                }else{
                    moviesWishList.push(movieObj);
                    localStorage.setItem("movies",JSON.stringify(moviesWishList));
                    console.log(moviesWishList);
                }
            }
    
    const idBtn = document.getElementById("idBtn")
    idBtn.addEventListener("click",(e)=>{
        e.preventDefault()
        let singleMovieInput = document.getElementById("singleMovieInput").value
        singelMovieFun(singleMovieInput)                  
        })
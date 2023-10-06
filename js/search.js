function searchMovieFun(name) {
    const searchMovieDiv = document.getElementById("searchMovieDiv")
    const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjNjNzViMWI2ZDUwMGNkMjgzZjU0MmU4ZTFlZDJkYSIsInN1YiI6IjVjMDNiNDQwMGUwYTI2NDg2YTA2ZjYwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pj6auQlw-VfPG6PenA6MbujH_SQk3Xr3LmD6H9WdH04'
    }
  };

      fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(movie => {
            console.log(movie);
            for (let i = 0; i < movie.results.length; i++) {
                console.log(movie.results[i].title);
                searchMovieDiv.innerHTML +=`
                <div> 
                <h1>${movie.results[i].title}</h1>
                <img src="http://image.tmdb.org/t/p/w500${movie.results[i].poster_path}" id="searchPic">
                </div>
                <span class="heartIcon" onclick="saveIdHeartButton(${movie.results[i].id})">
                <img src="../assets/img/img/favorite ICON.png" class="like-icon">
                </span>
                `
            }
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
          localStorage.removeItem("movies",JSON.stringify(moviesWishList))
      }else{
          moviesWishList.push(movieObj);
          localStorage.setItem("movies",JSON.stringify(moviesWishList));
          console.log(moviesWishList);
      }
  }
      
    const searchBtn = document.getElementById("searchBtn")
    searchBtn.addEventListener("click",(e)=>{
        e.preventDefault()
        searchMovieDiv.innerHTML = ""

        let searchInput = document.getElementById("searchInput").value
        searchMovieFun(searchInput)                  
        })
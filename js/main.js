  function fetchPages(time = "week",pages=1) {
    const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjNjNzViMWI2ZDUwMGNkMjgzZjU0MmU4ZTFlZDJkYSIsInN1YiI6IjVjMDNiNDQwMGUwYTI2NDg2YTA2ZjYwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pj6auQlw-VfPG6PenA6MbujH_SQk3Xr3LmD6H9WdH04'
    }
  };

      fetch(`https://api.themoviedb.org/3/trending/movie/${time}?language=en-US&page=${pages}`, options)
        .then(response => response.json())
        .then(movie => {
            console.log(movie);
            for (let i = 0; i < movie.results.length; i++) {
                const mainDiv = document.getElementById("mainDiv")
                let myImg = movie.results[i].poster_path
                mainDiv.innerHTML += `<img src="http://image.tmdb.org/t/p/w500${myImg}" class="allImg">
                <span class="heartIcon" onclick="saveIdHeartButton(${movie.results[i].id})">
                <img src="../assets/img/img/favorite ICON.png" class="like-icon">
                </span>
                `
                }
            })
            .catch(err => console.error(err));
        }
        fetchPages()
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
            const btn1 = document.getElementById("btn1")
            const btn2 = document.getElementById("btn2")
            const btn3 = document.getElementById("btn3")
            const btn4 = document.getElementById("btn4")
            const btn5 = document.getElementById("btn5")
            btn1.addEventListener("click",(e)=>{
                e.preventDefault()
                let time = weekOrDayBtnInput.value
               mainDiv.innerHTML = ""
               fetchPages(time,1)
           })
           btn2.addEventListener("click",(e)=>{
            e.preventDefault()
            let time = weekOrDayBtnInput.value
               mainDiv.innerHTML = ""
               fetchPages(time,2)
           })
           btn3.addEventListener("click",(e)=>{
            e.preventDefault()
            let time = weekOrDayBtnInput.value
            mainDiv.innerHTML = ""
            fetchPages(time,3)
        })
        btn4.addEventListener("click",(e)=>{
            e.preventDefault()
            let time = weekOrDayBtnInput.value
            mainDiv.innerHTML = ""
            fetchPages(time,4)
        })
        btn5.addEventListener("click",(e)=>{
            e.preventDefault()
            let time = weekOrDayBtnInput.value
            mainDiv.innerHTML = ""
            fetchPages(time,5)
        })

// https://www.omdbapi.com/?i=tt3896198&apikey=9513ca31&t=

document.getElementById("btn").addEventListener("click",searchMovie)
var container
async function searchMovie(){
    var search = document.querySelector("#mov").value;
   const url = `http://www.omdbapi.com/?i=tt3896198&apikey=9513ca31&t=${search}`


    try{

        let res = await fetch(url);

        let movie = await res.json();

        if(search==""){
            alert("Please enter movie name")
            container = document.querySelector("#container")
            container.innerHTML = "";
        }

        if(movie.Response=="False")
        {
            alert("Movie not found Try another")

            var img = document.createElement("img");
            img.src = "https://media4.giphy.com/media/aYpmlCXgX9dc09dbpl/200w.webp?cid=ecf05e47kgo9a4d0b5cdim4e0kapwo7xdnagn5fz0ank3glt&rid=200w.webp&ct=g"
            
            let err = document.querySelector("#error");

            err.append(img);
        }

        else{
             
            var arr = [];
            arr.push(movie)
            console.log(arr);

            append(arr);
        }

        

    }
    catch(err){
        console.log(err);
    }
}

function append(arr){
    arr.forEach(function(elem){
         container = document.querySelector("#container")

        // container.innerHTML = null;

        var box1 = document.createElement("div");
        box1.setAttribute("id","box1")
        
        var poster = document.createElement("img");
        poster.src = elem.Poster;

        var title = document.createElement("p");
        title.innerText  = `Movie Title: ${elem.Title}`;

        var genre = document.createElement("p");
        genre.innerText = `Type: ${elem.Genre}`;

        var releaseDate = document.createElement("p");
        releaseDate.innerText = `Release Year :${elem.Released}`;

        var director = document.createElement("p");
        director.innerText = `Director:${elem.Director}`;

        var plot = document.createElement("p");
        plot.innerText = `Plot: ${elem.Plot}`;

        var rating = document.createElement("p");
        rating.innerText = `IMDB Rating: ${elem.imdbRating}`;

        if(elem.imdbRating>8.5){
            rating.innerText = `IMDB Rating: ${elem.imdbRating} \n Recommended`
            rating.style.color = "red"

        }
        else{
            rating.innerText = `IMDB Rating: ${elem.imdbRating}`;
        }

        box1.append(poster,title,genre,releaseDate,director,plot,rating)
        container.append(box1);

    })
}

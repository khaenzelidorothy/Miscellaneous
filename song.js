let id = document.querySelector("#lyric");
let song = document.querySelector("#song");
let album = document.querySelector("#album");
let btn = document.querySelector("#btn");

const options = {
    method: "GET",
    contenttype: "application/json"
}

async function ts(){
    let resp = await fetch("https://dummyjson.com/quotes/random", options);
    let data = await resp.json();
    id.textContent = data.quote;
    song.textContent = data.author;
    album.textContent = data.id;
}

btn.addEventListener("click", ts);
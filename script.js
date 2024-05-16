let dataLikes = [11111, 222, 121]; 
let dataTexts = ["ken carson", "playboi carti","destroylonely"] 
let dataImgs = ["https://images.genius.com/baa8d15c714f865dc302c5a21e454a04.1000x1000x1.jpg", "https://i.ytimg.com/vi/4cY16nCTkRg/maxresdefault.jpg", "https://i.pinimg.com/originals/a6/bf/fa/a6bffab24608545bdc50df51c82f0b44.jpg"] 
 
let korobkaPostov = document.getElementById("postsBox"); 
let originalPost = document.getElementById("firstPost"); 
 
for(let i = 0; i < 100; i++){ 
    let newPost = originalPost.cloneNode(true); 
 
    let img = newPost.getElementsByClassName("img")[0]; 
    img.setAttribute("src", dataImgs[i%3]); 
 
    let numberOfLikes = newPost.getElementsByClassName("numberOfLikes")[0] 
    numberOfLikes.innerHTML = dataLikes[i%3]; 
 
    let postText = newPost.getElementsByClassName("postText")[0] 
    postText.innerHTML = dataTexts[i%3]; 
 
    let likeBtn = newPost.getElementsByClassName("likeBtn")[0] 
    likeBtn.setAttribute("onclick", "likes(" + i + ")") 
 
    korobkaPostov.appendChild(newPost); 
} 
 
 
function like(){ 
     
}
const f = document.getElementById('submit-button');
let reviews = document.querySelectorAll(".jh");

f.onclick = function(event) {
    event.preventDefault();
    

    for (let i = 0; i < reviews.length; i++) {
      reviews[i].style.display = "flex";
    }
}
document.getElementsByClassName(".a").style.backgroundColor.size = "40px 30px";


// let review = document.getElementById("lord");
// let reveiw2 = document.getElementById("helpl");

// review.onclick = function(event) {
//   event.preventDefault();

//   reveiw2.innerHTML = "";

// }
//JS

var url = "http://api.icndb.com/jokes/random";
var jokeText = document.getElementById("joke-text");
var button = document.getElementById("random-joke");

button.addEventListener("click", function() {
  getJoke();
});

function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.addEventListener("load", function() {
    var response = JSON.parse(xhr.response);
    jokeText.innerHTML = response.value.joke;
  });
  xhr.send();
}

document.addEventListener("DOMContentLoaded", getJoke());


//jQuery
//0;
// $(function() {
//   var url = "http://api.icndb.com/jokes/random";
//   var $button = $("#random-joke").click(function() {
//     getJoke();
//   });
//   var $jokeText = $("#joke-text");

//   function getJoke() {
//     $.ajax({
//       method: "GET",
//       url: url,
//       success: function(res) {
//         $jokeText.text(res.value.joke);
//       }
//     });
//   }
// });

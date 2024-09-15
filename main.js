const kittenImg = document.getElementById('kitten');

function loadKitten() {
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(answer => answer.json())
    .then(data => {
      kittenImg.src = data[0].url;
    });
}

kittenImg.addEventListener("click", function () {
  loadKitten();
})

loadKitten();
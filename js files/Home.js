
let gamesData=[];
async function getGames(category) { 
   const apiResponse = await fetch(`https://corsproxy.io/?https://www.freetogame.com/api/games?category=${category}`);
   const data = await apiResponse.json();
   gamesData = data;
   displayData()
   hideLoader();
}


const loader = document.getElementById('loader');
const detailsRow = document.getElementById('detailsRow');

function hideLoader() {
  loader.classList.add('d-none');
  detailsRow.classList.remove('d-none');
}

function displayData() {
    let cartona = ``
    for (let i = 0; i < gamesData.length; i++) {
       cartona+=`
<div class="col-md-6 col-sm-12 col-lg-3 ">
<div class="card h-100 " data-url="${gamesData[i].freetogame_profile_url}">
  <div class="p-4">
  <div class="position-relative">
  <img class="rounded-2 w-100 " src="${gamesData[i].thumbnail}" alt="">
  </div>
  <div class="d-flex justify-content-between mt-3 my-1">
    <h6>${gamesData[i].title}</h6>
    <span class="badge text-bg-primary">free</span>
  </div>
  <p class="text-center  mt-3 ">${gamesData[i].short_description}</p>
  </div>
  <footer class="d-flex justify-content-between card-footer px-0 ">
    <span class="badge text-bg-light ms-4">${gamesData[i].genre}</span>
    <span class="badge text-bg-light me-4">${gamesData[i].platform}</span>
</footer>
</div>
</div>`
    }
document.getElementById('rowData').innerHTML=cartona
}

getGames('shooter')


document.querySelector('.navbar-nav').addEventListener('click' , function (e) {
  if (e.target.id) {
    getGames(e.target.id)
  }
})

document.querySelector('.navbar-brand').addEventListener('click' , function () {
getGames('superhero')
})

document.getElementById('rowData').addEventListener('click' , function (e) {
    const card = e.target.closest('.card')
    if (card) {
        window.open(card.dataset.url)
    }
})
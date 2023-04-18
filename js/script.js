const userSearch = document.querySelector('#searchInput');
const searchResultContainer = document.querySelector('.search-result-cards');
const searchBtn = document.querySelector('.submit');
let searchResult = document.querySelector('#search-result');
let modal = document.querySelector('.modal')
let loader = document.querySelector('.loader');


const app_id = '8bff48f8';
const api_key = '31a182112982e47aee53ccf3309de709';

const getRecipe = async () => {
    let searchValue = userSearch.value;
    const baseUrl = `https://api.edamam.com/search?q=${searchValue}&app_id=${app_id}&app_key=${api_key}&to=7`;
    searchResult.innerHTML = searchValue;

    // Loader
    setTimeout(() => {
        loader.style.display = 'block';
    }, document.onload);
    

    try {
        const response = await fetch(`${baseUrl}`);
        if(response.ok){
            const jsonResponse = await response.json();
            const data = jsonResponse;
            generateHTML(data.hits)
        }
    } catch (error) {
        console.log(error);
    }

}

searchBtn.addEventListener('click', getRecipe);

const generateHTML = (results) =>{
    let generatedHTML = '';
    results.map((result) =>{
        generatedHTML += 
        `
        <div class="card">
            <img src="${result.recipe.image}" alt="">
            <i class="fa-solid fa-heart"></i>
            <div class="recipe-name">
            <h2>${result.recipe.label}</h2>
            </div>
            <a href="${result.recipe.url}" target="_blank">View recipe ></a>
        </div>
        `;

    });
    searchResultContainer.innerHTML = generatedHTML;
};
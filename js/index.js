
function loadPlayers(){
    const input = document.getElementById('input');
    const inputValue = input.value;
    input.value = '';
    if(inputValue == ''){
        alert('pleass enter food naem')
    }
    else{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then(res => res.json())
        .then(data => displayPlayer(data.meals))
    }
}
function displayPlayer(data){
    // console.log(data)
    const container = document.getElementById('container')
    const contain  = document.getElementById('contain');
    contain.textContent = '';
    container.textContent = '';
    for(const meals of data){
        // console.log(meals)
        const div = document.createElement('div');
        div.innerHTML = `
        <div onclick="useId(${meals.idMeal})" class="col">
          <div class="card">
            <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meals.strMeal}</h5>
              <p class="card-text">${meals.strInstructions.slice(0, 200)}</p>
            </div>
          </div>
        </div>
        `;
        container.appendChild(div);
    }
}
const useId = meals =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals}`)
    .then(res => res.json())
    .then(data => displayId(data.meals[0]))
}
const displayId = meals =>{
    console.log(meals)
    const div = document.createElement('div');
        div.innerHTML = `
        <div class="col">
          <div class="card">
            <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meals.strMeal}</h5>
              <p class="card-text">${meals.strInstructions.slice(0,150)}</p>
              <a href="${meals.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        `;
        contain.appendChild(div);
}

function loadCountris(){
    const input = document.getElementById('input');
    const inputValue = input.value;
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => displayCountry(data))
}
loadCountris()
const displayCountry = data =>{
    const container = document.getElementById('container')
    for(const country of data){
        // console.log(country)
        const div = document.createElement('div')
        div.classList.add('styles')
        div.innerHTML = `
        <div onclick="detail('${country.name.common}')">
        <img src="${country.flags.png}"> 
              <h3> ${country.name.common}</h3>
                 <p>${country.region}</p>
        </div>
        `;
        container.appendChild(div);
    }
}
const detail = names =>{
fetch(`https://restcountries.com/v3.1/name/${names}
`)
.then(res => res.json())
.then(data => enter(data[0]))
}
const enter = country=>{
    const container = document.getElementById('leader')
    const div = document.createElement('div')
        div.classList.add('styles')
        div.innerHTML = `
        <div class="mx-auto"">
        <img src="${country.flags.png}"> 
              <h3> ${country.name.common}</h3>
                 <p>${country.region}</p>
        </div>
        `;
        container.appendChild(div)
}

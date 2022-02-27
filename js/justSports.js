
const gifUse = (sty) =>{
    document.getElementById('gif').style.display = sty;
}
function loadPlayers(){
    const input = document.getElementById('input');
    const inputValue = input.value;
    gifUse('block')
    if(input.value == ''){
        alert('not work type somthig')
    }
    else{
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputValue}
        `)
        .then(res => res.json())
        .then(data => displayPlayer(data.player))
    }
    input.value = '';
}
const displayPlayer = data => {
    // console.log(data)
    if(data == null){
        alert('Search valid Name')
    }else{

    
    const leader = document.getElementById('leader');
    leader.textContent = '';
    for(const players of data){
        console.log(players)
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card w-25 mt-5 p-5">
        <img src=" ${players.strThumb}" alt="">
        <h2>Name: ${players.strPlayer}</h2>
        <h5>Country: ${players.strNationality}</h5>
        <button class="bg-danger text-white px-3 py-2" onclick="">Delete</button>
        <button class="bg-info mt-3 text-white px-3 py-2" onclick="details(${players.idPlayer})">Details</button>
    </div>
        `;   
        leader.appendChild(div)
    }
}
    gifUse('none')
}
const details = getId =>{
   fetch(`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${getId}
   `)
   .then(res => res.json())
   .then(data => displyId(data.players[0]))
}
const displyId = getId =>{
    const container = document.getElementById('parent');
    console.log(getId)
    const gender = `${getId.strGender}`
    const female = document.getElementById('female');
    const male = document.getElementById('male');
    if(gender == 'Male'){
       female.style.display = 'none'
       male.style.display = 'block'
    }else{
       male.style.display = 'none'
       female.style.display = 'block'
    }
    const div = document.createElement('div');
    div.innerHTML = `
    <h2>Name: ${getId.strPlayer}</h2>
    <h5>Country: ${getId.strNationality}</h5>
    <h5 width="25">BirthLocation: ${getId.strBirthLocation}</h5>
    `
    container.appendChild(div);
}
const URL = "https://hp-api.onrender.com/api/characters";
const generateapi = document.getElementById('btn-generate');
const imgcard = document.getElementById('img-card');
const username = document.getElementById('character');
const birth = document.getElementById('dateOfBirth');
const genderOf = document.getElementById('gender');

generateapi.addEventListener('click',getApi)

function getApi(){
    fetch(URL) 
    .then(response => response.json())
    .then(data =>  {
        username.textContent = data[0].name;
        imgcard.src = data[0].image;
        birth.textContent = data[0].dateOfBirth;
        genderOf.textContent = data[0].gender;
    })
}
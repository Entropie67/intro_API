
// réccupère la balise d'id result
result = document.querySelector('#result');
const root_url = "https://gsi.fly.dev/"

// Ajoutons les personnages sur la page :
const addPerso = (data) => {
        result.innerHTML += data['results'][1]['name'];
}


// Travail sur l'API
const getInfo = async() => {
    let response = await fetch(root_url + "characters");
    let data = await response.json();
    addPerso(data);
}

getInfo();
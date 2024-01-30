
// réccupère la balise d'id result
result = document.querySelector('#result');
const root_url = "https://gsi.fly.dev/"

// Ajoutons les personnages sur la page :
const addPerso = (data) => {
    for (perso of data['results']) {
        result.innerHTML += `<article class="${perso['vision']}">
                                <h2>${perso['name']}</h2>
                                <p>Element : ${perso['vision']}</p>
                                <a href="${perso['wiki_url']}">wiki_url</a>
                             </article>`;
    }
}


// Travail sur l'API
const getInfo = async() => {
    let response = await fetch(root_url + "characters?limit=51");
    let data = await response.json();
    addPerso(data);
}

getInfo();
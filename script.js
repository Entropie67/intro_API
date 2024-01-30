
// réccupère la balise d'id result
result = document.querySelector('#result');

// Travail sur l'API

// On fait un test avec des données locales
let personnages = [
                                            {"id": 1, "name": "Henri"},
                                            {"id": 2, "name": "Charlotte"}
                                            ];



// Ajoutons les personnages sur la page :
for (perso of personnages){
    // += plutôt que = pour ajouter les personnages les uns à la suite des autres
    result.innerHTML += ` <p>Personnage : ${perso.name}</p>`; // les " " sont ceux du 7 !! ` `
}



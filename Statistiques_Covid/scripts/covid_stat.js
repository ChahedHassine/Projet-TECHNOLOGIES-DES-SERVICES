var commentaire = /** @class */ (function () {
    function commentaire(firstcomm, middleComm, lastcomm) {
        this.firstcomm = firstcomm;
        this.middleComm = middleComm;
        this.lastcomm = lastcomm;
        this.fullcomm = firstcomm + " " + middleComm + " " + lastcomm;
    }
    return commentaire;
}());
function greeter(comm) {
    return comm.fullcomm;
}
var comm1 = new commentaire("Fig", 1, ". - Nombre de Guérisons en 22 avril 2021");
var comm2 = new commentaire("Fig", 2, ". - Nombre de Guérisons en 22 avril 2021");
var comm3 = new commentaire("Fig", 3, ". - Nombre de Guérisons en 22 avril 2021");
var titre = /** @class */ (function () {
    function titre(type) {
        this.type = type;
        this.titre = "Nombre de " + type;
    }
    return titre;
}());
function convert(titre) {
    return titre.titre;
}
var titre1 = new titre("Cas");
var titre2 = new titre("Guérisons");
var titre3 = new titre("Décès");
var paragraphe = /** @class */ (function () {
    function paragraphe(type, nombre) {
        this.type = type;
        this.p = "Le nombre de " + type + " a atteint " + nombre;
    }
    return paragraphe;
}());
function convertp(p) {
    return p.p;
}
var p1 = new paragraphe("Cas", 296343);
var p2 = new paragraphe("Guérisons", 246001);
var p3 = new paragraphe("Décès", 10170);
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('figure1').innerHTML = greeter(comm1);
    document.getElementById('figure2').innerHTML = greeter(comm2);
    document.getElementById('figure3').innerHTML = greeter(comm3);
    document.getElementById('titre1').innerHTML = convert(titre1);
    document.getElementById('titre2').innerHTML = convert(titre2);
    document.getElementById('titre3').innerHTML = convert(titre3);
    document.getElementById('p1').innerHTML = convertp(p1);
    document.getElementById('p2').innerHTML = convertp(p2);
    document.getElementById('p3').innerHTML = convertp(p3);
});
window.onload = function () {
    getCovidStats();
};
function getCovidStats() {
    fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/248')
        .then(function (resp) { return resp.json(); })
        .then(function (data) {
        var population = data.location.country_population;
        var update = data.location.last_updated;
        var confirmedCases = data.location.latest.confirmed;
        var deaths = data.location.latest.deaths;
        document.getElementById('population').innerHTML = population.toLocaleString('en');
        document.getElementById('update').innerHTML = update.substr(0, 10);
        document.getElementById('cases').innerHTML = confirmedCases.toLocaleString('en');
        document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');
        document.getElementById('percent').innerHTML = ((Number(deaths) / Number(confirmedCases)) * 100).toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "%";
    })["catch"](function () {
        console.log("error");
    });
    setTimeout(getCovidStats, 43200000); // update every 12 hours
}

class commentaire {
fullcomm: string;
constructor(public firstcomm: string, public middleComm: number, public lastcomm: string) {
this.fullcomm = firstcomm + " " + middleComm + " " + lastcomm;
}
}
function greeter(comm: commentaire) {
return  comm.fullcomm ;
}
let comm1 = new commentaire("Fig", 1, ". - Nombre de Guérisons en 22 avril 2021");
let comm2 = new commentaire("Fig", 2, ". - Nombre de Guérisons en 22 avril 2021");
let comm3 = new commentaire("Fig", 3, ". - Nombre de Guérisons en 22 avril 2021");

class titre {
titre: string;
constructor(public type: string) {
this.titre = "Nombre de " +type;
}
}
function convert(titre: titre) {
return  titre.titre ;
}
let titre1 = new titre("Cas");
let titre2 = new titre("Guérisons");
let titre3 = new titre("Décès");
class paragraphe {
p: string;
constructor(public type: string,nombre:number) {
this.p = "Le nombre de " +type+" a atteint "+nombre;
}
}
function convertp(p: paragraphe) {
return  p.p ;
}
let p1 = new paragraphe("Cas",296343);
let p2 = new paragraphe("Guérisons",246001);
let p3 = new paragraphe("Décès",10170);
document.addEventListener('DOMContentLoaded', () => {
document.getElementById('figure1').innerHTML = greeter(comm1);
document.getElementById('figure2').innerHTML = greeter(comm2);
document.getElementById('figure3').innerHTML = greeter(comm3);
document.getElementById('titre1').innerHTML = convert(titre1);
document.getElementById('titre2').innerHTML = convert(titre2);
document.getElementById('titre3').innerHTML = convert(titre3);
document.getElementById('p1').innerHTML = convertp(p1);
document.getElementById('p2').innerHTML = convertp(p2);
document.getElementById('p3').innerHTML = convertp(p3);
})
window.onload = function() {
	getCovidStats();
}

function getCovidStats() {
	fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/248')
	.then(function(resp) { return resp.json() })
	.then(function(data) {
		let population = data.location.country_population;
		let update = data.location.last_updated;
		let confirmedCases = data.location.latest.confirmed;
		let deaths = data.location.latest.deaths;

		document.getElementById('population').innerHTML = population.toLocaleString('en');
		document.getElementById('update').innerHTML = update.substr(0, 10);
		document.getElementById('cases').innerHTML = confirmedCases.toLocaleString('en');
		document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');
		document.getElementById('percent').innerHTML = ((Number(deaths)/Number(confirmedCases))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";




	})
	.catch(function() {
		console.log("error");
	})
	setTimeout(getCovidStats, 43200000) // update every 12 hours
}
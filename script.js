var listek = 12
var navstevnici = 174
var pocetPredstaveni = 15
var prijem = listek*navstevnici*pocetPredstaveni
document.body.innerHTML += "<p>" + prijem + " €" +"</p>"
var studenti = 12*0.65
var studenti40procet = studenti*navstevnici*pocetPredstaveni*0.4
var plneVstupne60procent = prijem*0.6
var prijemSeStudenty = plneVstupne60procent+studenti40procet
document.body.innerHTML += "<p>" + Math.floor(prijemSeStudenty) + " €" +"</p>"


document.body.innerHTML += "<p>" + "hod kostkou: " + (Math.floor(Math.random() * 6)+1) + "</p>"
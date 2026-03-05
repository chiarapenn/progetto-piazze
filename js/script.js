var catania = {
    id: "1",
    piazzaName: "piazza duomo",
    piazzaImg: "./immagini/piazze/acireale.jpg",
    piazzaLocation: "P.za Duomo, 95024 Acireale CT, Italia",
    piazzaStoria: "Si presenta come un autentico museo a cielo aperto, grazie ai monumenti che la circondano. La pavimentazione, rinnovata nel 2009 secondo un progetto di Aldo Scaccianoce, Vito Messina e Paolo Portoghesi, quest'ultimo celebre per la Moschea di Roma, è caratterizzata da un disegno a anelli concentrici, che richiama le forme di un rosone gotico simile a quello della facciata della Cattedrale." +
        "<br/>Attorno a questa piazza si ergono importanti monumenti, tra cui la Cattedrale di Maria Santissima Annunziata, risalente al XV secolo, la Basilica dei Santi Pietro e Paolo, costruita tra il XVI e il XVII secolo, il Palazzo Municipale del Settecento e il Palazzo Modò, che ospitava un tempo il Teatro Eldorado.",
}
var palermo = {
    id: "3",
    piazzaName: "piazza vittorio emanuele",
    piazzaImg: "./immagini/piazze/monreale.jpg",
    piazzaLocation: "Piazza Vittorio Emanuele - Monreale (PA)",
    piazzaStoria: "<b>Piazza Vittorio Emanuele</b> è la piazza principale del paese di <b>Monreale</b>. Su di essa vi si affaccia il Duomo e al centro trova spazio la celebre fontana di marmo denominata <b>Fontana del Tritone</b>, opera dello scultore palermitano Mario Rutelli del 1881. La vasca in marmo ha una forma circolare, al centro è collocata la figura di un uomo sopra degli scogli, il Tritone, che con un gesto eroico e forza sovrumana vince la furia dei draghi che emergono dalle acque e li calpesta. L'opera simboleggia la vittoria dell'uomo sulle forze brute.",
}
var messina = {
    id: "2",
    piazzaName: "piazza municipio",
    piazzaImg: "./immagini/piazze/pacedelmela.jpg",
    piazzaLocation: "Pace del Mela - Largo Municipio, 40",
    piazzaStoria: "Piazza Municipio rappresenta il cuore istituzionale di Pace del Mela. Circondata da edifici pubblici e impreziosita da spazi verdi e aiuole curate, è spesso sede di eventi civili e manifestazioni culturali.",
}
var agrigento = {
    id: "4",
    piazzaName: "piazza chiesa madre",
    piazzaImg: "./immagini/piazze/aragona.jpeg",
    piazzaLocation: "Piazza Matrice snc, ARAGONA, Sicilia, Italia",
    piazzaStoria: "La piazza sorge dinanzi alla Chiesa Madre parrocchia  SS. Crocifisso (sec. XVIII) che venne edificata per vivo interesse del conte Baldassare III Naselli che, in onore al suo nome, a quello del padre e del nonno, la dedicò a Nostra Signora dei tre Re Magi. Contiene all’interno alcune interessanti opere d’arte: una statua della Madonna delle Grazie attribuita al Gagini e una statua di legno di Santa Rosalia Vergine. Interessante nel primo altare a destra un Presepe settecentesco in cartapesta.",
}
var caltanissetta = {
    id: "5",
    piazzaName: "piazza europa",
    piazzaImg: "./immagini/piazze/montedoro.jpg",
    piazzaLocation: "Percorrere la SS640 da Caltanissetta, prendere la SP23 in direzione Montedoro per circa 10 km, così da arrivare in Piazza Europa.",
    piazzaStoria: "Principale piazza a Montedoro è Piazza Europa in cui è sita l’unica chiesa del paese dedicata a Maria Santissima del Rosario. Essa fu edificata nel 1645 per volontà di Mariano De Lucia e nel tempo ha subito diverse ristrutturazioni sia nel soffitto che nel prospetto, a causa delle lesioni dovute alle gallerie delle miniere scavate nel sottosuolo. L’ultimo restauro ha tentato di portare la Chiesa ai suoi colori e forme originarie, esso è stato effettuato dalla Sovraintendenza ai bb.vv. aa. di Caltanissetta nel 1996."+
    "<br/>Il colore giallo della facciata rende la Piazza più bella e luminosa."+  
    "<br/>Questa Piazza a Montedoro è luogo di incontri e passatempi per gli abitanti del paese.",
}
var enna = {
    id: "6",
    piazzaName: "piazza degli eventi",
    piazzaImg: "./immagini/piazze/agira.jpg",
    piazzaLocation: "Via Giacomo Matteotti, 3, 94011 Agira EN",
    piazzaStoria: "Piazza principale in cui si tengono gli eventi e i concerti più importanti della città.",
}
var ragusa= {
    id: "7",
    piazzaName: "piazza vittorio veneto",
    piazzaImg: "./immagini/piazze/ragusa.jpg",
    piazzaLocation: "Corso Vittorio Veneto, 781 Ragusa (RG) 97100",
    piazzaStoria: "Piazza principale della città.",
}
var siracusa = {
    id: "8",
    piazzaName: "piazza aldo moro",
    piazzaImg: "./immagini/piazze/lentini.jpg",
    piazzaLocation: "Indirizzo: Piazza Moro, 44, 96016 Lentini SR",
    piazzaStoria: "Piazza principale; punto di ritrovo per i giovani e per la scuola.",
}
var trapani= {
    id: "9",
    piazzaName: "piazza della loggia",
    piazzaImg: "./immagini/piazze/erice.jpg",
    piazzaLocation: "Piazza della Loggia91016 Erice TP",
    piazzaStoria: "Piazza Della Loggia è una piazza situata nel centro del centro storico di Erice, una cittadina medievale molto carina dell'Isola di Sicilia. Lo si vede, se si cammina per la città vecchia. Qui si possono vedere alcuni bei palazzi, negozi e ristoranti. Bel posto tipico in un centro storico pedonale.",
}
var piazze = [catania, palermo, messina, agrigento, caltanissetta, enna, ragusa, siracusa, trapani]
var prendiParametro=()=>{
    const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('provincia'); 
return myParam
}
var valorizzaPiazza=(piazza)=>{
    var h1= document.getElementById("piazza_name")
    h1.innerHTML=piazza.piazzaName
    var img= document.getElementById("piazza_img")
    img.src=piazza.piazzaImg
    var span= document.getElementById("piazza_location")
    span.innerHTML=piazza.piazzaLocation
    var p=document.getElementById("piazza_storia")
    p.innerHTML=piazza.piazzaStoria
}
window.onload=(event)=>{
    var provinciaId=prendiParametro()
    var piazzaTrovata= piazze.find(piazza=>piazza.id==provinciaId)
    valorizzaPiazza(piazzaTrovata)
}
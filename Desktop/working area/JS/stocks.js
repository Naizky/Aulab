
//esercizio a caso

let stockMagliette = 100;

let QMagliette = parseInt(prompt("inserisci la quantita' di magliette desiderate: "))

let ColoreMaglia = prompt("inserisci il colore che preferisci tra rosso,verde,blu:  ")

if (ColoreMaglia === null || ColoreMaglia.trim() === "" ) {
 alert("ERRORE")
} else {
    switch (ColoreMaglia) {
        case "rosso":
            console.log("Hai comprato " + QMagliette + " magliette  di colore rosso ")
            break;
        case "verde":
            console.log("Hai comprato " + QMagliette + " magliette  di colore verde ")
            break;
        case "blu":
            console.log("Hai comprato " + QMagliette + " magliette  di colore blu ")
            break;
        default:
            alert("colore non trovato")
    }

}

if (QMagliette <= 100) {
    console.log("hai comprato " + QMagliette)

}
else if (QMagliette > 100) {
    alert("non ci sono abbbastanza magliette, sono disponibili solo " + stockMagliette + " magliette")

}
else if (QMagliette <=0) {
    alert("errore")
}
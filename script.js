// dichiarazione costanti e variabili
const Km = parseInt(prompt('Quanti kilometri devi percorrere?'));
const Anni = parseInt(prompt('Quanti anni hai?'));
let PrezzoBase = km * 0.21;

//istruzioni condizionali
if(Anni < 18){

    Prezzo = (PrezzoBase * 20) / 100;

} else if(Anni > 65){
    
    Prezzo = (PrezzoBase * 40) / 100;

} else {

    Prezzo = PrezzoBase;
    
}
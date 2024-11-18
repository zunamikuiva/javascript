const naytto = document.getElementById("näyttö");

// Lue syötetyt numerot

function liitaNayttoon(input){
    naytto.value += input;
}

//Pyyhitään näyttö (tulokset ja syötetyt numerot)

function pyyhiNaytto(){
    naytto.value = "";
}

//Suoritetaan laskutoimitus, jos ei mahdollinen, vastaus = Error

function laske(){
    try{
        naytto.value = eval(naytto.value);
    }
    catch(error){
        naytto.value = "Error";
    }
}

function inputPlayer(vakjeNummer){
    var vakje = document.getElementById('vakje'+vakjeNummer);
    console.log(vakje);
    if(vakje.innerHTML == 'X'){
        vakje.innerHTML = 'O';
    }else{
        vakje.innerHTML = 'X';
    }
}
function inputPlayer(vakjeNummer){
    var vakje = document.getElementById('vakje'+vakjeNummer);
    console.log(vakje);
    vakje.innerHTML = 'O';
}
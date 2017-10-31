
function inputPlayer(vakjeNummer){
    var vakje = document.getElementById('vakje'+vakjeNummer);
    console.log(vakje);
    if(vakje.innerHTML == 'X'){
        vakje.innerHTML = 'O';
    vakje.style = "background-color:green";
    }else{
        vakje.innerHTML = 'X';
    vakje.style = "background-color:red";
    }
}
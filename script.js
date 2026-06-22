function insert (num) {
var numero = document.getElementById ('resultado').innerHTML;
document.ngetElementById('resultado').innerHTML=numero+num;
}
function clean(){
    document.getElementById('resultado').innerHTML="";
}
function eack (){
    var numero = document.getElementById ('resultado').innerHTML;
    document.getElementById ('resultado').innerHTML=resultado.substring(0,resultado.lenght-1);
}
function calcular (){
    var resultado= document.getElementById('resultado').innerHTML;
    if(resultado) {
        document.getElementById('resultado').innerHTML=eval(resultado);
    }
    else {
        document.getElementById('resultado').innerHTML="nada para calcular";
    }
}
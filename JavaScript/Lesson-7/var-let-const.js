/*
var/let/const a = 12;

*/ 

//var -> Function Scope -- ram bellekte çok fazla yer kaplıyor...
//let/const ->Block Scope özelliğine sahiptir...

function topla(){
    var a = 10; //Function Scope
    if(true){
        var b = 10;
        
    }
    console.log(b);
    console.log(a);
}


//LET & CONST FARK

//const (constant = sabit)
const a = 10;
a = 15; //değişmez
console.log(a);

let c = 10;
c = 3; //değişir
console.log(c);

let user = {
    username : "Furkan",
    password : "123"
}
user.username = "ayhan";
console.log(user);
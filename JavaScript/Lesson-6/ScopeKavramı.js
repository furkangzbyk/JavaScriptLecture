// Global Scope -> Her yerden erişilebilir...

var c = 10;

 if (true) {

}

function method1(){
    console.log(c);
}

method1();



// Function Scope -> Dışarıya kapalı...


function method1() {
    var sayi = 10;
    console.log(sayi);    
}

method1();





function method1(){
     var a = 5; //Function Scope
    if(true){
        var j = 20; //Block Scope
   }

while(true){

}

}


//Parametreli metot tanımlamak


// function yazdir(isim,soyisim){
//     debugger;
//     console.log(isim + " " + soyisim);

// }
// debugger;
// yazdir("Furkan","Gozubuyuk");
// yazdir("Ali", "Cevher");



// cube(6);
// function cube(sayi){
// console.log(sayi*sayi*sayi);
// }



let yas = Number(prompt("Yaşınızı Giriniz"));

check(yas);

function check(yas){
if(yas > 18){
console.log("Ehliyeti alabilirsiniz");
}else{
    console.log("Ehliyet alamazsınız");
}
}


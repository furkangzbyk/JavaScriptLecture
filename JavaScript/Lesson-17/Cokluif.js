// ÇOKLU İF KULLANMAK

/*

adını ve tckn

Ad: Boş geçilemez
TCKN: 11 karakterden oluşacak

*/


let ad = prompt("İsiminizi giriniz :");
let tckn = prompt("TCKN giriniz: ");

kontrolEt2(ad , tckn);

function kontrolEt(ad , tckn){

 if(ad!=""){
if(tckn.length !=11){
    console.log("İsim ve TCKN problemsiz girildi");
}else{
    console.log("Lütfen TC'nizi 11 karakter olarak giriniz.")
}

}else{

console.log("Lütfen isim alanını boş bırakmayınız!!!");
}


 }


 function kontrolEt2(ad , tckn){
if(ad ==""){
console.log("Lütfen isim alanını boş bırakmayınız!!!");
return;

}
if(tckn.length!=11){
console.log("Lütfen TC'nizi 11 karakter olarak giriniz.");
return;
}

console.log("Lütfen TC'nizi 11 karakter olarak giriniz.");

}
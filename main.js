// Değişkenler

//------------------------------
// eski var ; yeni let const değeri sonradan değiştirilir
// var
var x=40;
// let
let ad='berkan';
// const değişmez
const user={
    name:'berkan',
    surname:'tut'
};
user.name='ramazan';

const tel=[12 , 23];
tel[0]=56789;

console.log(user.name)
salam();

function salam() {
    console.log("selamlar")
}

//  Veri türleri
// string
const name="Selamlar";

let temel="yeni";
const uzun=`bunu 
option ve virgülle yaptım 
uzun string e yaradı
ayrıca değişken de alabilirim ${temel}`;
console.log(uzun);
// number
const sayi=5;
// boolen
const is_true=true;
// Object
const person ={
    adi:'berkan',
    soyad:`tester`,
    okay:is_true,
};
// Array
var color=['kırmızı','mavi',true,78];
// Undefine
var u;
console.log(u);
// null bilinçli olarak boş bırakılan yer, böyle bir değer yok kullanıcı girmemiş oluyor
var nul=null;



// Funcition 
t=add(5,6);
function add(x,y){
   p= x+y;
   return p;
};

const testfonk= adiniz=> 'selam' + adiniz; 
console.log(testfonk('berkan'));

const test3 =(a,b)=> {
    let c= a*b;
    return c;
};
console.log(test3(2,4));

// Veri çok satırlıysa
const test1=(texxt) => (
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    
</head>
<body>
    <h1>Selam</h1>

    <script src="main.js"></script>
</body>
</html>
`

);
console.log(test1());


$(document).ready(function () {
    $('.frame').delay(4000).fadeOut(1000);
    $(".header-right").removeClass("ccc").delay(4000).queue(function (next) {

        $(this).addClass("ccc");

        next();

    });

});




    let fn =["as","sgw","js"];

    localStorage.setItem("name",fn);
    let fm =  localStorage.getItem("name");
    console.log(fm);
    
   

// let min = document.getElementsByClassName("min-left");

// console.log(min);

// let hh1 = prompt("輸入你要找的");
// let left = (hh1) =>{
 
//  console.log(document.querySelectorAll(hh1));
// };


 
// left(hh1);

// function sea_hi(){
//     console.log("你好~");
// }
// let set_1 = setInterval(sea_hi,2000);


// function stop(){
//     clearInterval(set_1);
// }




// 將裡面的反過來------------------------------------
// let a =["Harry", "Ron", "Snap"];
// let b = [];


// for(let i=0; i<a.length;i++){

//     b.unshift(a[i]);


// }

// console.log(b);











// 終極密碼--------------------------------
// let b = Math.floor(Math.random() * 100);
// console.log(b);
// let x, y, a = 0;
// x = 0;
// y = 100;
// while (a != b) {
//     a = prompt(x + "~" + y + "之間");
//     if (a > x && a < y) {
//         if (a < b) {
//             x = a;
//         } else {
//             y = a;
//         }
//     } else {
//         alert("請輸入隊的數字");
//     }
// }
// alert("對了");



// 對比陣列裡面的大小 選出最大的---------------------------------
// let a = [22, 66, 55, 44];
// let b = [-22, -66, 52];

// function hi(www) {

//     let bigg;
//     bigg = www[0];
//     for (let i = 1; i < www.length; i++) {
//         if (bigg < www[i]) {
//             bigg = www[i];
//         }
//     }
//     return bigg;
// }
// console.log(hi(a));
// console.log(hi(b));



// 輸入一個數由1加到那個數----------------------------------------
// let a = 5;


// function addUpTo(n){
//     let result = 0;
// for(let i=1; i<=n ;i++){
// result += i;
// }
// return result;
// }
// console.log(addUpTo(a)) ;











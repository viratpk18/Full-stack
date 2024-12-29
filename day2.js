//1---------------------------//

// let a=15;
// if(a%3==0)
//     console.log('hi');
// if(a%5==0){
//     console.log('hello');
//}

//2---------------------------//

// choice = 2;
// switch(choice){
//     case 1:
//         console.log('hi');
//         break;
//     case 2:
//         console.log('hello');
//         break;
//     default:
//         console.log('bye');
//         break;
// }

//3---------------------------//

// let arr = [1,2,3,4,5];
// for(let i=0;i<5;i++){
//     console.log(arr[i]);
// }

//4---------------------------//

// let arr = [1,2];
// switch(arr) {
//     case 1:
//         console.log('hi');
//         break;
//     case 2:
//         console.log('hello');
//         break;
//     default:
//         console.log('bye');
//         break;
// }

//5---------------------------//

// let a=10;
// for(i=1;i<=a;i++){
//     if(i%2==0) {
//         console.log(i);
//     }
// }


//6---------------------------//

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// for(let i=0;i<3;i++){
//     for(let j=0;j<3;j++){
//         console.log(arr[i][j]);
//     }
// }

//7---------------------------//

// let a=10;
// while(a>0){
//     console.log('hi');
//     break;
// }

//8---------------------------//

// let orange = () => "orange";
// console.log(orange());

//9---------------------------//

// let banana = () => {
//     console.log('pk');
//     return 10+8;
// }
// console.log(banana());

//10---------------------------//

// function cat(callback){
//     setTimeout (() => {
//         console.log('Tom the cat');
//         callback();
//     }, 2000);
// }
// function mouse(){
//     console.log('Jerry the mouse');
// }
// cat(mouse);

//11---------------------------//

// function attandance(callback){
//     console.log('Attandance is marked');
//     callback();
// }
// function lunch(callback){
//     console.log('Lunch time');
//     callback();
// }
// function goingHome(callback){
//     console.log('Going home');
//     callback();
// }
// function dayComplete(){
//     console.log('Day is completed');
// }
// attandance(() => {
//     lunch(() => {
//         goingHome(() => {
//             dayComplete();
//         });
//     });
// });

//---------------------------//

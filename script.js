// 1.
//   function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

// 2.
// let count = 0;
// (function () {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();

// 3.
// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }

// 4.
// function calculateArea(length) {
//     function getBreadth() {
//       return 8; // hardcoded breadth value for example purposes
//     }
//     var breadth = getBreadth();
//     var area = length * breadth;
//     return area;
//   }
//   console.log(calculateArea(10)); // output: 80

// 5.
// function outerFunction() {
//     var counter = 0;
//     function innerFunction() {
//       counter++;
//       console.log(counter);
//     }
//     return innerFunction;
//   }
//   var incrementCounter = outerFunction();
//   incrementCounter(); // output: 1
//   incrementCounter(); // output: 2
//   incrementCounter(); // output: 3

// 6.
// var a = 12;
// (function () {
//   alert(a);
// })();

// 7.
// var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     alert(a);
//   };
// })();
// x();

// 8.
// var globalVar = "xyz";

// (function outerFunc(outerArg) {
//     var outerVar = 'a';
    
//     (function innerFunc(innerArg) {
//     var innerVar = 'b';
    
//     console.log(
//         "outerArg = " + outerArg + "\n" +
//         "innerArg = " + innerArg + "\n" +
//         "outerVar = " + outerVar +"\n" +
//         "innerVar = " + innerVar + "\n" +
//         "globalVar = " + globalVar);
    
//     })(456);
// })(123);
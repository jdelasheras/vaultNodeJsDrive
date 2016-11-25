console.log('Ejecuto antes del timer');

console.time('timer');



setTimeoute(function () {
console.timeEnd('timer'); // Prints much more than 1000ms
}, 3000)

console.log('Ejecuto despues del timer');
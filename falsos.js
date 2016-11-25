console.log(null == undefined); // true
console.log(null === undefined); // false
// Are these all falsy?
if (!false) {
console.log('falsy 1');
}
if (!null) {
console.log('falsy 2');
}
if (!undefined) {
console.log('falsy 3');
}
if (!'aa') {
console.log('falsy 4');
}
if (!2) {
console.log('falsy 5');
}
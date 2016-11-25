console.time('timeit');

function longRunningOperation(callback, time) {
// simulate a 3 second operation
setTimeout(callback, time);
}
function webRequest(request, time) {
console.log('starting a long operation for request:', request.id, request.name);
longRunningOperation(function () {
console.log('ending a long operation for request:', request.id, request.name);
}, time);
}
// simulate a web request
webRequest({ id: 1 , name: 'Tutu'},3000);
// simulate a second web request
webRequest({ id: 2 , name: 'Titi'},1000);

console.timeEnd('timeit'); // On my system it takes about 9000ms (i.e. 9 seconds)
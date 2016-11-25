var foo = { bas: 123 };
var bar = { bas: foo.bas }; // copy
bar.bas = 456; // change copy
console.log(foo, bar); // 123, original is unchanged
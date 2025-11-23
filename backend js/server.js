console.log('hello world');

var slugify=require('slugify')
let a=slugify("some strings")
console.log(a);
let b=slugify("s&&*ome/. strings","_")
console.log(b);


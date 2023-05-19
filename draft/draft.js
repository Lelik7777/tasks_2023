console.log('23345445123'.match(/.{1,4}/g));
function a(params) {
console.log(params);
}
a(4);
 a=5;
console.log(a);
//! throw ERROR because variable a overridden and not a function
//a(3);
const obj={name: 'foo',}
function fun(params) {
  console.log(this.name,params);
}
fun.call(obj,'hello world');
fun('hello');


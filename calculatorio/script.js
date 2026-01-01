const d_set = [];

function plus() {
  d_set.push("+");
  console.log(d_set);
  let x = d_set.join('');
  document.getElementById("xd").textContent = x;

}

function minus() {
  d_set.push("-");
  console.log(d_set);
    let x = d_set.join('');
  document.getElementById("xd").textContent = x;
}

function times() {
  d_set.push("*");
  console.log(d_set);
    let x = d_set.join('');
  document.getElementById("xd").textContent = x;
}

function division() {
  d_set.push("/");
  console.log(d_set);
    let x = d_set.join('');
  document.getElementById("xd").textContent = x;
}


function one() {
  d_set.push(1);
  console.log(d_set);
      let x = d_set.join('');
  document.getElementById("xd").textContent = x;
}

function two() {
  d_set.push(2);
  console.log(d_set);
      let x = d_set.join('');
  document.getElementById("xd").textContent = x;
}

function three() {
  d_set.push(3);
  console.log(d_set);
      let x = d_set.join('');
  document.getElementById("xd").textContent = x;
}

function four() {
  d_set.push(4);
  console.log(d_set);
      let x = d_set.join('');
  document.getElementById("xd").textContent = x;
}

function five() {
  d_set.push(5);
  console.log(d_set);
      let x = d_set.join('');
  document.getElementById("xd").textContent = x;
}

function six() {
  d_set.push(6);
  console.log(d_set);
      let x = d_set.join('');
  document.getElementById("xd").textContent = x;
}

function seven() {
  d_set.push(7);
  console.log(d_set);
      let x = d_set.join('');
  document.getElementById("xd").textContent = x;
}

function eight() {
  d_set.push(8);
  console.log(d_set);
      let x = d_set.join('');
  document.getElementById("xd").textContent = x;
}

function nine() {
  d_set.push(9);
  console.log(d_set);
      let x = d_set.join('');
  document.getElementById("xd").textContent = x;
}



function equal() {
let expression = d_set.join('')
let result = Function("return " + expression)();

console.log(d_set)
console.log(expression)
console.log(result)

  document.getElementById("xd").textContent = result;

d_set.length = 0
d_set.push(result);
console.log(d_set)
}



function back(){
d_set.pop()
console.log(d_set)
    let x = d_set.join('');
  document.getElementById("xd").textContent = x;
}

function delet(){

d_set.length = 0
console.log(d_set)
    let x = d_set;
  document.getElementById("xd").textContent = x;
}
//  function areaOfCirle(r) {
//      var PI = 3.14;
//      return PI*r*r;
//  }
//  console.log(areaOfCirle(7));

//  function areaOfTriangle(a,b) {
//      const div = 2; 
//      return a*b/div
//  }
//  console.log(areaOfTriangle(3,2));
 
//  let areaOfSquare = (a,b) =>{
//      return a*b;
//  }
//  console.log(areaOfSquare(3,3));
 

let input1 = document.getElementById('in1');
let input2 = document.getElementById('in2');
const btn = document.getElementById('btn');
let ans = document.querySelector('.h3')





// turn inputs to number


;


btn.addEventListener('click', () =>{
ans.innerHTML = `<h2>Answer:${Number(input1.value * input2.value/2)}</h2>`;
   
    if (input1.value = ' ') {
        input2.value = ' ';
    }
})

let name = prompt('your name ')
let ae = prompt(' ur ae')

console.log(`ello ${name} you are ${ae} years old`)
let input = document.querySelector("input");
let btn_no = document.querySelectorAll(".btn-num");
let btn_logic = document.querySelectorAll(".btn-logic");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");


let value1='';
let value2='';
let operator;
let result;


btn_no.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (operator===undefined) {
      value1 += event.target.dataset.num;
      input.value = value1;
    }else{
      value2 += event.target.dataset.num;
      input.value = value1+operator+value2;
    }
  });
});

btn_logic.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    operator = event.target.dataset.num;
    input.value += operator;
  });
});


equal.addEventListener("click",(event) => {
  if (input.value === '') {
    input.value = 0;
  } else {
    let result = value1+operator+value2;
    let fresult = eval(result);
    input.value=fresult;
  }
  
});

clear.addEventListener("click",(event)=>{
  value1='',
  value2='',
  operator=undefined,
  input.value=''
});




const display = document.getElementById("display");
const history = document.getElementById("history");

function append(value){
display.value += value;
}

function clearDisplay(){
display.value="";
}

function del(){
display.value=display.value.slice(0,-1);
}

function calculate(){
try{
let expression=display.value;
let result=eval(expression);

let li=document.createElement("li");
li.textContent=`${expression} = ${result}`;
history.prepend(li);

display.value=result;
}
catch{
display.value="Error";
}
}

function square(){
display.value=Math.pow(Number(display.value),2);
}

function sqrt(){
display.value=Math.sqrt(Number(display.value));
}

function sin(){
display.value=Math.sin(Number(display.value)*Math.PI/180).toFixed(4);
}

function cos(){
display.value=Math.cos(Number(display.value)*Math.PI/180).toFixed(4);
}

function tan(){
display.value=Math.tan(Number(display.value)*Math.PI/180).toFixed(4);
}

function log(){
display.value=Math.log10(Number(display.value)).toFixed(4);
}

document.addEventListener("keydown",function(e){

if("0123456789+-*/.%".includes(e.key)){
display.value+=e.key;
}

if(e.key==="Enter"){
calculate();
}

if(e.key==="Backspace"){
del();
}

if(e.key==="Escape"){
clearDisplay();
}
});

const themeBtn=document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{
document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
themeBtn.textContent="☀ Light Mode";
}
else{
themeBtn.textContent="🌙 Dark Mode";
}
});
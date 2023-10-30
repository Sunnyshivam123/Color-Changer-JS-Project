let buttons=document.querySelectorAll('.box');
let body=document.querySelector('body');
console.log(buttons);

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target)
    if(e.target.id==='boxRed')
    body.style.backgroundColor='red'; 

    if(e.target.id==='boxBlue')
    body.style.backgroundColor='blue';

    if(e.target.id==='boxMagenta')
    body.style.backgroundColor='magenta';

    if(e.target.id==='boxGrey')
    body.style.backgroundColor='grey';
    })
});

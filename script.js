let display=document.querySelector('.display')
let numbers = document.querySelectorAll('.number')
document.querySelector('.clear').addEventListener('click', function(){
    display.value=''
})
document.querySelector('.divide').addEventListener('click', function(){
    display.value+='/'
})
document.querySelector('.multiply').addEventListener('click', function(){
    display.value+='*'
})
document.querySelector('.plus').addEventListener('click', function(){
    display.value+='+'
})
document.querySelector('.minus').addEventListener('click', function(){
    display.value+='-'
})
document.querySelector('.dot').addEventListener('click', function(){
    display.value+='.'
})
document.querySelector('.result').addEventListener('click', function(){
    display.value=eval(display.value)
})
for(i=0; i<numbers.length; i++){
    numbers[i].addEventListener('click', function(e){
        display.value+=e.target.getAttribute('value')
    })
}



const buttons=document.querySelectorAll('.button')
console.log(buttons);
const body=document.querySelector('.Colour')
buttons.forEach(function (button){
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id=='Grey'){
            body.style.backgroundColor=e.target.id
        }
        else if(e.target.id=='Black'){
            body.style.backgroundColor=e.target.id
        }
        else if(e.target.id=='Green'){
            body.style.backgroundColor=e.target.id
        }
        else if(e.target.id=='Red'){
            body.style.backgroundColor=e.target.id
        }
        else if(e.target.id=='Blue'){
            body.style.backgroundColor=e.target.id
        }
        else if(e.target.id=='Yellow'){
            body.style.backgroundColor=e.target.id
        }
    })
});
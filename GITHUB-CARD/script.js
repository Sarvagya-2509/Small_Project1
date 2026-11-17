const button=document.querySelector('.click');

button.addEventListener('click',function(e){

   let box=document.querySelector('.card');

   const requestUrl='https://api.github.com/users/hiteshchoudhary'

   const xhr=new XMLHttpRequest();

   let text=document.querySelector('.text');

   xhr.open('GET',requestUrl);

   let imgg =document.querySelector('.img')

   xhr.onreadystatechange=function(){

    console.log(xhr.readyState);
    if(xhr.readyState===4){

        const data=JSON.parse(this.responseText)

        box.style.backgroundColor='white';

        const img = document.createElement('img');

        img.src = data.avatar_url;

        imgg.appendChild(img);
        
        text.innerHTML=`The number of followers are: ${data.followers}`;
    }
   }
   xhr.send();
})
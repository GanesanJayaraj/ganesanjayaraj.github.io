const mainHeading = document.querySelector('h2');
const ptag = document.querySelector('p');
const imgtag = document.querySelector('img');
const btntag = document.querySelector('button');
mainHeading.innerHTML = 'JS Connected';
mainHeading.textContent = 'JS Connection-2';
mainHeading.addEventListener('click',()=>alert('heading is '+mainHeading.innerHTML));
ptag.onclick=function(){
    alert('p tag clicked');
}
imgtag.onclick=()=>{
    let imagesrc=imgtag.getAttribute('src');
    if(imgtag.getAttribute('src')!=='./images/topp-dog.png'){
        imgtag.setAttribute('src','./images/topp-dog.png');
    }else{
        imgtag.setAttribute('src','./images/clipart1937011.png');
    }
}
// btntag.onclick=setName();

function setName(){
    let username=prompt('User name:');
    if(!username){
        setName();
    }else{
        localStorage.setItem('name',username);
        if(localStorage.getItem('name')==='null'){
            mainHeading.textContent='Welcome Here';
        }else{
            mainHeading.textContent='Welcome '+localStorage.getItem('name');
        }    
    }
}
// if(!(localStorage.getItem('name'))){
//     setName();
// }else{
//     mainHeading.textContent='Welcome '+localStorage.getItem('name');
// }
if(!localStorage.getItem('name') || (localStorage.getItem('name')==='null')) {
    setName();
}
else {
    let storedName = localStorage.getItem('name');
    mainHeading.textContent = 'Mozilla is cool, ' + storedName;
}
btntag.onclick=()=>setName();
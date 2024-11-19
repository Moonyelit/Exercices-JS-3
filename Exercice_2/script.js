const showLink = document.querySelector('#show');
const hideLink = document.querySelector('#hide');
const textDiv = document.querySelector('#text');

// textDiv.style.display = 'none';

showLink.addEventListener("click", handleclickshow );
function handleclickshow (){
    textDiv.style.display= "block"
}

hideLink.addEventListener("click", handleclickhide );
function handleclickhide (){
    textDiv.style.display= "none"
}


console.log(textDiv);
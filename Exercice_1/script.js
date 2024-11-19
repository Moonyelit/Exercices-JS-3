const image = document.getElementById('image1');

image.addEventListener('mouseover', handleMouseOver);
 function handleMouseOver() {
    image.style.border = '3px solid red'; 
};

image.addEventListener('mouseout', handleMouseOut);
 function handleMouseOut() {
    image.style.border = 'none'; 
};

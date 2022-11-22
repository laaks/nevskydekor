let grid = document.querySelector('.catalog-grid').children.length;




let col4 = document.querySelector('.catalog-col-4');
if (grid === 3) {
    col4.style.width = '100%';
} else {
    col4.style.width = '30%';
}

let col5 = document.querySelector('.catalog-col-5');
if (grid === 4) {
    col5.style.width = '70%';
} if (grid > 4) {
    col5.style.width = '30%';
} 
    

let col7 = document.querySelector('.catalog-col-7');
if (grid === 6) {
    col7.style.width = '100%';
   
} if (grid > 6 ) {
    col7.style.width = '40%';
} 
    


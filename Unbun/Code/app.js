 document.addEventListener('mousemove', (ev) => cursorMove(ev));

 function cursorMove(ev) {
     let circle = document.getElementById('circle');
     let posY = ev.clientY;
     let posX = ev.clientX;

     circle.style.top = posY + 'px';
     circle.style.left = posX + 'px';
 }
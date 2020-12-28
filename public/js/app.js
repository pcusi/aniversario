$('#second__btn').on('click', () => {
   let wrapOne = document.getElementById('wrap-one');
   let otherSection = document.getElementById('other__section');
   let otherTemplate = document.createElement('section');
   otherTemplate.className = 'second__section';
   otherTemplate.innerHTML = `
        <h1>¡Mongol!</h1>
        <div class="wrap">
            <div class="wrap__item">
                <img src="public/assets/images/meco_siono.jpg" class="second__img" alt="efisimo">
            </div>
            <div class="wrap__item__two">
                <p>
                    Muchas gracias por la paciencia que me das, aunque
                    a veces la pierdas porque soy bien pesado XDDDD,
                    ya un día se te va caer las teturris de tanto que te 
                    hago renegar 😂 incluso en este momento pensarás 
                    la frase del título jajaja.
                </p>
                <p>
                    Otra cosa que preguntarás por que puse la imagen del 
                    “todo meco este vato siono rasa” y es porque en verdad 
                    estoy bien meco como dicen los mexicanos (mongol 
                    como me dices) xddddddddddddddddddddddddddddd, 
                    ya en vez de insulto es halago 😂.
                </p>
                <a class="btn__more" id="back__btn" type="button">Regresar</a>
            </div>
        </div>
   `;

   wrapOne.style.display = 'none';
   otherSection.append(otherTemplate);

   $('#back__btn').on('click', () => {
      console.log('hola');
      let wrapOne = document.getElementById('wrap-one');
      let otherSection = document.getElementById('other__section');
      wrapOne.style.display = 'block';
      otherSection.style.display = 'none';
   });
});

$('#btn__chido').on('click', () => {

});

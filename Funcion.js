let noButtonState = 0; // Estado actual del botón "No"
let growCount = 0; // Contador de cuántas veces ha crecido el botón "Sí"

// Mostrar el gif inicial (el tamaño no cambiará)
document.getElementById('gifContainer').style.display = 'block';
document.getElementById('happyGifContainer').style.display = 'none';
document.getElementById('sadGifContainer').style.display = 'none';
document.getElementById('sadGifContainer1').style.display = 'none';
document.getElementById('sadGifContainer2').style.display = 'none';

// Mostrar solo el gif inicial
document.getElementById('gifContainer').style.display = 'block';

document.getElementById('siBtn').addEventListener('click', function() {
    // Ocultar gifs tristes y mostrar el gif feliz
    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'block';

    // Ocultar botones y mostrar mensaje
    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.getElementById('noBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = '¡AHHHH MI PINCHECHA HA DICHO QUE SIIII NO TE PIENSO FALLAR! ¡TE QUIERO INFINITO LINDA!';

    // Mostrar gifs felices en secuencia
    setTimeout(() => {
        document.getElementById('happyGifContainer').style.display = 'none';
        document.getElementById('happyGifContainer2').style.display = 'block';
    }, 1000);

    setTimeout(() => {
        document.getElementById('happyGifContainer2').style.display = 'none';
        document.getElementById('happyGifContainer3').style.display = 'block';
    }, 1000);

    setTimeout(() => {
        document.getElementById('happyGifContainer3').style.display = 'none';
        document.getElementById('happyGifContainer4').style.display = 'block';
    }, 1000);
});

document.getElementById('noBtn').addEventListener('click', function() {
    switch (noButtonState) {
        case 0:
            // Ocultar cualquier gif visible anteriormente
            document.getElementById('happyGifContainer').style.display = 'none';
            document.getElementById('happyGifContainer2').style.display = 'none';
            document.getElementById('happyGifContainer3').style.display = 'none';
            document.getElementById('happyGifContainer4').style.display = 'none';

            // Mostrar gifs tristes y actualizar el mensaje
            document.getElementById('gifContainer').style.display = 'none';
            document.getElementById('sadGifContainer').style.display = 'block';
            document.getElementById('noBtn').innerHTML = '¿No quieres? 🥹';
            noButtonState++;
            break;
        case 1:
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'block';
            document.getElementById('noBtn').innerHTML = '¡¿De verdad no quieres?!';
            noButtonState++;
            break;
        case 2:
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'block';
            document.getElementById('noBtn').innerHTML = '¿Estás segurita que no quieres, eh?';
            noButtonState++;
            break;
        case 3:
            document.getElementById('noBtn').innerHTML = '¿En serio no quieres?';
            noButtonState++;
            break;
        case 4:
            document.getElementById('noBtn').innerHTML = '¿Deberitas no quieres?';
            noButtonState++;
            break;
        case 5:
            document.getElementById('noBtn').innerHTML = '¿Deberitas, deberitas?';
            noButtonState++;
            break;
        case 6:
            document.getElementById('noBtn').innerHTML = 'Deberitas, deberitas, deberitas?';
            noButtonState++;
            break;
        case 7:
            document.getElementById('noBtn').innerHTML = 'Yo creo que sí quieres, pero me dices que no...';
            noButtonState++;
            break;
        case 8:
            document.getElementById('noBtn').innerHTML = 'Está bien... 😢';
            noButtonState++;
            break;
        case 9:
            document.getElementById('noBtn').innerHTML = 'Po fi, di que sí. Quiero estar contigo ❤️';
            noButtonState++;
            break;
        case 10:
            document.getElementById('noBtn').innerHTML = 'Ahhh, okas... 😞';
            noButtonState++;
            break;
        case 11:
            document.getElementById('noBtn').innerHTML = 'Nononono, po fi, di que sí';
            noButtonState++;
            break;
        case 12:
            document.getElementById('noBtn').innerHTML = 'Bueno... lo que quieras 💔';
            noButtonState++;
            break;

        case 13:
            document.getElementById('noBtn').innerHTML = 'Quiero que sepas que me encantas como eres y siempre me tendrás a tu lado corazón. Picky Promise';
            break;
    }

    // Incrementar el tamaño del botón "Sí" si aún no ha alcanzado el límite de 13 veces
    if (growCount < 13) {
        const siBtn = document.getElementById('siBtn');
        const currentSize = parseInt(window.getComputedStyle(siBtn).getPropertyValue('font-size'));
        siBtn.style.fontSize = (currentSize + 2) + 'px';
        growCount++;
    }
});


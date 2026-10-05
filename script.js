// Klavyeye ek olarak Mobil Dokunmatik Kontrol Dinleyicileri
const btnLeft = document.getElementById('btn-touch-left');
const btnRight = document.getElementById('btn-touch-right');
const btnJump = document.getElementById('btn-touch-jump');

if (btnLeft && btnRight && btnJump) {
    // Sol Buton
    btnLeft.addEventListener('touchstart', (e) => { e.preventDefault(); keys.left = true; });
    btnLeft.addEventListener('touchend', (e) => { e.preventDefault(); keys.left = false; });

    // Sağ Buton
    btnRight.addEventListener('touchstart', (e) => { e.preventDefault(); keys.right = true; });
    btnRight.addEventListener('touchend', (e) => { e.preventDefault(); keys.right = false; });

    // Zıplama Butonu
    btnJump.addEventListener('touchstart', (e) => {
        e.preventDefault();
        if (cat.isGrounded) {
            cat.velocityY = cat.jumpPower;
            cat.isGrounded = false;
        }
    });
}
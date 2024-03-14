document.querySelector('#icon_eye').addEventListener('click', function() {
    var imgSrc = this.getAttribute('src');
    var passwordInput = document.querySelector('#password');
    if (imgSrc === 'https://img.icons8.com/ios-glyphs/30/000000/visible.png') {
        this.setAttribute('src', 'https://img.icons8.com/ios-filled/50/closed-eye.png');
        passwordInput.setAttribute('type', 'password');
    } else {
        this.setAttribute('src', 'https://img.icons8.com/ios-glyphs/30/000000/visible.png');
        passwordInput.setAttribute('type', 'text');
    }
});
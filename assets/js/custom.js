function blink_text() {
    $('#top-banner-name').fadeOut(600);
    $('#top-banner-name').fadeIn(600);
}
setInterval(blink_text, 1500);
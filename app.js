

document.addEventListener('keydown', (event) => {


    const key = event.key;
    const code = event.code;
    const which = event.keyCode;
    console.log('which', which)

    document.getElementById(
        'key-pressed').innerHTML = key;

    document.getElementById(
        'key-code').innerHTML = code;

    document.getElementById(
        'key-which').innerHTML = which;



}, false);



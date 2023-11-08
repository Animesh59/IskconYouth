var btn = document.getElementById('btn');


btn.addEventListener('click', () => {
    console.log('clicked');
    input.removeEventListener('keyup', filter_All);
    input.addEventListener('keyup', filter_DOB);
    input.placeholder = "Search into DOB..."
    filter_DOB();
})
